import { defineSsgGetPages, defineSsgRenderPreloadTag } from '#q-app'
import routes from '@/router/routes'

/**
 * Pages pre-rendered by `quasar build -m ssg`.
 * Dynamic routes (the 404 catch-all) are skipped here; Quasar still
 * renders that catch-all into dist/ssg/404.html.
 */
export const getSsgPages = defineSsgGetPages(async ({ parseVueRouterRoutes }) => {
  const { ssgPages } = await parseVueRouterRoutes({ routes, verbose: true })
  return ssgPages
})

const jsRE = /\.js$/
const cssRE = /\.css$/
const woffRE = /\.woff$/
const woff2RE = /\.woff2$/
const gifRE = /\.gif$/
const jpgRE = /\.jpe?g$/
const pngRE = /\.png$/

export const renderPreloadTag = defineSsgRenderPreloadTag((file) => {
  if (jsRE.test(file)) {
    return `<link rel="modulepreload" href="${file}" crossorigin>`
  }
  if (cssRE.test(file)) {
    return `<link rel="stylesheet" href="${file}" crossorigin>`
  }
  if (woff2RE.test(file)) {
    return `<link rel="preload" href="${file}" as="font" type="font/woff2" crossorigin>`
  }
  if (woffRE.test(file)) {
    return `<link rel="preload" href="${file}" as="font" type="font/woff" crossorigin>`
  }
  if (gifRE.test(file)) {
    return `<link rel="preload" href="${file}" as="image" type="image/gif" crossorigin>`
  }
  if (jpgRE.test(file)) {
    return `<link rel="preload" href="${file}" as="image" type="image/jpeg" crossorigin>`
  }
  if (pngRE.test(file)) {
    return `<link rel="preload" href="${file}" as="image" type="image/png" crossorigin>`
  }
  return ''
})
