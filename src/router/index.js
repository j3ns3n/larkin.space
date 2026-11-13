import { route } from 'quasar/wrappers'
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router'
import routes from './routes'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  // Native SSG/SSR sets import.meta.env.QUASAR_SERVER. The process.env
  // fallbacks cover older Quasar CLI defines.
  const isServer =
    import.meta.env.QUASAR_SERVER === true ||
    process.env.SERVER === true ||
    process.env.SERVER === 'true'
  const routerMode = import.meta.env.QUASAR_VUE_ROUTER_MODE || process.env.VUE_ROUTER_MODE
  const routerBase = import.meta.env.QUASAR_VUE_ROUTER_BASE || process.env.VUE_ROUTER_BASE

  const createHistory = isServer
    ? createMemoryHistory
    : routerMode === 'history'
      ? createWebHistory
      : createWebHashHistory

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(routerBase),
  })

  return Router
})
