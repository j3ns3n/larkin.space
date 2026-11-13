const fs = require('fs')
const path = require('path')

const distDir = path.resolve(__dirname, '..', 'dist', 'ssg')
const distIndex = path.join(distDir, 'index.html')
const dist404 = path.join(distDir, '404.html')

function extractInitialState(html) {
  const marker = 'window.__INITIAL_STATE__'
  const start = html.indexOf(marker)
  if (start === -1) return null

  // find first '{' after marker and do brace matching to extract the JSON object
  const braceStart = html.indexOf('{', start)
  if (braceStart === -1) return null
  let depth = 0
  let i = braceStart
  for (; i < html.length; i++) {
    const ch = html[i]
    if (ch === '{') depth++
    else if (ch === '}') {
      depth--
      if (depth === 0) {
        const jsonText = html.substring(braceStart, i + 1)
        try {
          return JSON.parse(jsonText)
        } catch (err) {
          console.error('Failed to parse INITIAL_STATE JSON (brace extracted):', err)
          return null
        }
      }
    }
  }

  return null
}

function buildJsonLd(state) {
  const skills = (state.skillsStore?.categories || []).flatMap((c) =>
    (c.skills || []).map((s) => s.name),
  )
  const currentJob = state.experience?.experiences?.[0]
  const sameAs = (state.socialsStore?.socials || [])
    .map((s) => s.url)
    .filter((u) => !u.startsWith('mailto:'))
  const credentials = (state.certifications?.certifications || []).map((cert) => ({
    '@type': 'EducationalOccupationalCredential',
    name: cert.name,
    credentialCategory: 'certificate',
    recognizedBy: { '@type': 'Organization', name: cert.issuer },
    url: cert.credentialUrl,
  }))

  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jensen Larkin',
    givenName: 'Jensen',
    familyName: 'Larkin',
    jobTitle: currentJob?.title ?? 'Software Engineer',
    url: 'https://larkin.space',
    email: 'jensen@larkin.space',
    description:
      'Software Engineer based in the UK, specialising in Laravel, Vue.js, and scalable backend systems.',
    image: 'https://larkin.space/og.png',
    address: { '@type': 'PostalAddress', addressCountry: 'GB' },
    worksFor: {
      '@type': 'Organization',
      name: currentJob?.company ?? 'axitech',
      url: currentJob?.url ?? 'https://axitech.co',
    },
    knowsAbout: skills,
    hasCredential: credentials,
    knowsLanguage: 'en',
    sameAs,
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Jensen Larkin',
    url: 'https://larkin.space',
    description: 'Portfolio of Jensen Larkin, Software Engineer based in the UK.',
  }

  return { person: JSON.stringify(person), website: JSON.stringify(website) }
}

function injectScripts(html, personJson, websiteJson) {
  const personTag = `<script id="json-ld-person" type="application/ld+json">${personJson}</script>`
  const websiteTag = `<script id="json-ld-website" type="application/ld+json">${websiteJson}</script>`

  const placeholder = '<!-- JSON-LD-PLACEHOLDER -->'
  if (html.includes(placeholder)) {
    return html.replace(placeholder, personTag + '\n' + websiteTag)
  }

  if (html.includes('id="json-ld-person"') || html.includes('id="json-ld-website"')) {
    // replace existing
    html = html.replace(/<script[^>]*id="json-ld-person"[\s\S]*?<\/script>/, personTag)
    html = html.replace(/<script[^>]*id="json-ld-website"[\s\S]*?<\/script>/, websiteTag)
    return html
  }

  const idx = html.indexOf('</head>')
  if (idx === -1) return html
  return html.slice(0, idx) + '\n' + personTag + '\n' + websiteTag + '\n' + html.slice(idx)
}

function applyNoIndex(html) {
  // The SSG HTML minifier drops quotes around simple attribute names.
  const robotsRe =
    /<meta\s+name=["']?robots["']?\s+content=["'][^"']*["']\s*\/?>/i
  if (!robotsRe.test(html)) {
    console.error('404.html: robots meta tag not found')
    process.exitCode = 1
    return null
  }

  let out = html.replace(
    robotsRe,
    '<meta name="robots" content="noindex, nofollow" />',
  )
  out = out.replace(/<link\s+rel=["']?canonical["']?[^>]*>\s*/gi, '')
  out = out.replace(
    /<title>[^<]*<\/title>/i,
    '<title>Page Not Found - Jensen Larkin</title>',
  )
  out = out.replace(/<!-- JSON-LD-PLACEHOLDER -->\s*/g, '')

  if (/<link\s+rel=["']?canonical["']?/i.test(out)) {
    console.error('404.html: canonical link still present')
    process.exitCode = 1
    return null
  }
  if (!/noindex,\s*nofollow/i.test(out)) {
    console.error('404.html: noindex robots tag missing after rewrite')
    process.exitCode = 1
    return null
  }
  return out
}

function writeSitemap() {
  const lastmod = new Date().toISOString().slice(0, 10)
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://larkin.space/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), xml, 'utf8')
  console.log('Wrote sitemap.xml with lastmod', lastmod)
}

function main() {
  if (!fs.existsSync(distIndex)) {
    console.error('dist/ssg/index.html not found at', distIndex)
    process.exitCode = 1
    return
  }

  const html = fs.readFileSync(distIndex, 'utf8')
  const state = extractInitialState(html)
  if (!state) {
    console.error('Could not extract INITIAL_STATE from built HTML')
    process.exitCode = 1
    return
  }

  const { person, website } = buildJsonLd(state)
  const out = injectScripts(html, person, website)
  fs.writeFileSync(distIndex, out, 'utf8')
  console.log('Injected JSON-LD into', distIndex)

  if (!fs.existsSync(dist404)) {
    console.error('dist/ssg/404.html not found at', dist404)
    process.exitCode = 1
    return
  }

  const notFound = applyNoIndex(fs.readFileSync(dist404, 'utf8'))
  if (!notFound) return
  fs.writeFileSync(dist404, notFound, 'utf8')
  console.log('Marked', dist404, 'noindex and removed the homepage canonical')

  writeSitemap()

  // The SSG compiler bundle is not part of the static site.
  fs.rmSync(path.join(distDir, '__ssg__'), { recursive: true, force: true })
}

main()
