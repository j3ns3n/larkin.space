// Configuration for your app
// https://v2.quasar.dev/quasar-cli-vite/quasar-config-file

const { existsSync, renameSync } = require('node:fs')
const { join } = require('node:path')
const { configure } = require('quasar/wrappers')

module.exports = configure((/* ctx */) => {
  return {
    // https://v2.quasar.dev/quasar-cli-vite/prefetch-feature
    // preFetch: true,

    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    // https://v2.quasar.dev/quasar-cli-vite/boot-files
    boot: [],

    // https://v2.quasar.dev/quasar-cli-vite/quasar-config-file#css
    css: ['app.scss'],

    // Icons are inline SVGs from @quasar/extras/fontawesome-v6.
    // Inter is self-hosted. No icon or Roboto webfonts are shipped.
    extras: [],

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/quasar-config-file#build
    build: {
      target: {
        browser: ['es2022', 'firefox115', 'chrome115', 'safari14'],
        node: 'node20',
      },

      vueRouterMode: 'history', // available values: 'hash', 'history'

      // This CLI only aliases "@" and "#q-app" by default. The app still
      // imports through the historical Quasar aliases.
      alias: {
        src: join(__dirname, 'src'),
        layouts: join(__dirname, 'src/layouts'),
        pages: join(__dirname, 'src/pages'),
        components: join(__dirname, 'src/components'),
        assets: join(__dirname, 'src/assets'),
        boot: join(__dirname, 'src/boot'),
      },

      // The SSG renderer imports ./server-entry.js, but Vite's SSR build
      // emits server-entry.mjs when the package is not "type": "module".
      extendViteConf(viteConf, { isServer }) {
        if (!isServer) return
        viteConf.plugins.push({
          name: 'ssg-server-entry-js',
          // Rolldown ignores in-place bundle renames, so rename the file
          // after it has been written. The SSG script imports server-entry.js.
          closeBundle() {
            const from = join(__dirname, 'dist/ssg/__ssg__/server-entry.mjs')
            const to = join(__dirname, 'dist/ssg/__ssg__/server-entry.js')
            if (existsSync(from)) renameSync(from, to)
          },
        })
      },

      vitePlugins: [
        [
          'vite-plugin-checker',
          {
            eslint: {
              lintCommand: 'eslint -c ./eslint.config.js "./src*/**/*.{js,mjs,cjs,vue}"',
              useFlatConfig: true,
            },
          },
          { server: false },
        ],
      ],
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/quasar-config-file#devserver
    devServer: {
      // https: true,
      open: true, // opens browser window automatically
    },

    // https://v2.quasar.dev/quasar-cli-vite/quasar-config-file#framework
    framework: {
      config: {
        dark: true,
      },

      lang: 'en-GB', // Quasar language pack

      // Quasar plugins
      plugins: [],
    },

    // No Quasar animation CSS is used; motion lives in app.scss.
    animations: [],

    // https://github.com/quasarframework/quasar/tree/dev/app-vite/docs
    // Native SSG (`quasar build -m ssg`). The catch-all route is rendered
    // to dist/ssg/404.html; scripts/ssg-inject-jsonld.js then marks it noindex.
    ssg: {
      ssgRendererConcurrency: 10,
      error404HtmlFilename: '404.html',
    },
  }
})
