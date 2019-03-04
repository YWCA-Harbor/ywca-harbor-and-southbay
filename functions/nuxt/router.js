import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _d6c57082 = () => interopDefault(import('..\\..\\pages\\contact-us.vue' /* webpackChunkName: "pages_contact-us" */))
const _42b73f0a = () => interopDefault(import('..\\..\\pages\\about\\history.vue' /* webpackChunkName: "pages_about_history" */))
const _1c1bc173 = () => interopDefault(import('..\\..\\pages\\about\\mission.vue' /* webpackChunkName: "pages_about_mission" */))
const _782d5854 = () => interopDefault(import('..\\..\\pages\\about\\partners.vue' /* webpackChunkName: "pages_about_partners" */))
const _b0fab4f4 = () => interopDefault(import('..\\..\\pages\\about\\team.vue' /* webpackChunkName: "pages_about_team" */))
const _68393857 = () => interopDefault(import('..\\..\\pages\\get-involved\\events\\index.vue' /* webpackChunkName: "pages_get-involved_events_index" */))
const _5126ecb3 = () => interopDefault(import('..\\..\\pages\\get-involved\\opportunities\\index.vue' /* webpackChunkName: "pages_get-involved_opportunities_index" */))
const _ea691a36 = () => interopDefault(import('..\\..\\pages\\programs\\child-care.vue' /* webpackChunkName: "pages_programs_child-care" */))
const _bf2ec8f0 = () => interopDefault(import('..\\..\\pages\\programs\\human-wellness.vue' /* webpackChunkName: "pages_programs_human-wellness" */))
const _974e1156 = () => interopDefault(import('..\\..\\pages\\programs\\racial-justice.vue' /* webpackChunkName: "pages_programs_racial-justice" */))
const _a072465e = () => interopDefault(import('..\\..\\pages\\programs\\seasonal.vue' /* webpackChunkName: "pages_programs_seasonal" */))
const _8ceaed60 = () => interopDefault(import('..\\..\\pages\\programs\\thrift-store.vue' /* webpackChunkName: "pages_programs_thrift-store" */))
const _0097647f = () => interopDefault(import('..\\..\\pages\\get-involved\\events\\_id.vue' /* webpackChunkName: "pages_get-involved_events__id" */))
const _5ede7fdb = () => interopDefault(import('..\\..\\pages\\get-involved\\opportunities\\_id.vue' /* webpackChunkName: "pages_get-involved_opportunities__id" */))
const _015669ae = () => interopDefault(import('..\\..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/contact-us",
      component: _d6c57082,
      name: "contact-us"
    }, {
      path: "/about/history",
      component: _42b73f0a,
      name: "about-history"
    }, {
      path: "/about/mission",
      component: _1c1bc173,
      name: "about-mission"
    }, {
      path: "/about/partners",
      component: _782d5854,
      name: "about-partners"
    }, {
      path: "/about/team",
      component: _b0fab4f4,
      name: "about-team"
    }, {
      path: "/get-involved/events",
      component: _68393857,
      name: "get-involved-events"
    }, {
      path: "/get-involved/opportunities",
      component: _5126ecb3,
      name: "get-involved-opportunities"
    }, {
      path: "/programs/child-care",
      component: _ea691a36,
      name: "programs-child-care"
    }, {
      path: "/programs/human-wellness",
      component: _bf2ec8f0,
      name: "programs-human-wellness"
    }, {
      path: "/programs/racial-justice",
      component: _974e1156,
      name: "programs-racial-justice"
    }, {
      path: "/programs/seasonal",
      component: _a072465e,
      name: "programs-seasonal"
    }, {
      path: "/programs/thrift-store",
      component: _8ceaed60,
      name: "programs-thrift-store"
    }, {
      path: "/get-involved/events/:id?",
      component: _0097647f,
      name: "get-involved-events-id"
    }, {
      path: "/get-involved/opportunities/:id?",
      component: _5ede7fdb,
      name: "get-involved-opportunities-id"
    }, {
      path: "/",
      component: _015669ae,
      name: "index"
    }],

    fallback: false
  })
}
