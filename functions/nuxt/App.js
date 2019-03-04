import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import _6f6c098b from '..\\..\\layouts\\default.vue'
import _d7307efc from '..\\..\\layouts\\partials\\footer.vue'
import _230840c8 from '..\\..\\layouts\\partials\\nav.vue'

const layouts = { "_default": _6f6c098b,"_partials/footer": _d7307efc,"_partials/nav": _230840c8 }

export default {
  head: {"title":"YWCA Harbor Area & South Bay","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"https:\u002F\u002Fwww.youtube.com\u002Fwatch?v=8hgWXQFtaaw&feature=youtu.be"}],"script":[{"src":"\u002Fbundle.min.js","body":true}],"link":[{"rel":"apple-touch-icon","size":"180x180","href":".\u002Fimg\u002Fapple-touch-icon.png"},{"rel":"icon","type":"image\u002Fpng","href":".\u002Fimg\u002Ffavicon-32x32.png"},{"rel":"icon","type":"image\u002Fpng","href":".\u002Fimg\u002Ffavicon-16x16.png"},{"rel":"manifest","href":".\u002Fimg\u002Fsite.webmanifest"},{"rel":"mask-icon","href":".\u002Fimg\u002Fsafari-pinned-tab.svg","color":"#da532c"},{"rel":"shortcut icon","href":".\u002Fimg\u002Ffavicon.ico"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Source+Sans+Pro:400,600,700"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Poppins:400,500,600,700"},{"rel":"stylesheet","href":"https:\u002F\u002Fuse.fontawesome.com\u002Freleases\u002Fv5.5.0\u002Fcss\u002Fregular.css","integrity":"sha384-z3ccjLyn+akM2DtvRQCXJwvT5bGZsspS4uptQKNXNg778nyzvdMqiGcqHVGiAUyY","crossorigin":"anonymous"},{"rel":"stylesheet","href":"https:\u002F\u002Fuse.fontawesome.com\u002Freleases\u002Fv5.5.0\u002Fcss\u002Fbrands.css","integrity":"sha384-QT2Z8ljl3UupqMtQNmPyhSPO\u002Fd5qbrzWmFxJqmY7tqoTuT2YrQLEqzvVOP2cT5XW","crossorigin":"anonymous"},{"rel":"stylesheet","href":"https:\u002F\u002Fuse.fontawesome.com\u002Freleases\u002Fv5.5.0\u002Fcss\u002Ffontawesome.css","integrity":"sha384-u5J7JghGz0qUrmEsWzBQkfvc8nK3fUT7DCaQzNQ+q4oEXhGSx+P2OqjWsfIRB8QT","crossorigin":"anonymous"},{"rel":"stylesheet","href":".\u002Fstyles.css"}],"style":[]},

  render(h, props) {
    const loadingEl = h('NuxtLoading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll')
          })
        }
      }
    }, [ templateEl ])

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      transitionEl
    ])
  },
  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: ''
  }),
  beforeCreate() {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created() {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (process.client) {
      window.$nuxt = this
      this.refreshOnlineStatus()
      // Setup the listeners
      window.addEventListener('online', this.refreshOnlineStatus)
      window.addEventListener('offline', this.refreshOnlineStatus)
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },

  mounted() {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },

  computed: {
    isOffline() {
      return !this.isOnline
    }
  },
  methods: {
    refreshOnlineStatus() {
      if (process.client) {
        if (typeof window.navigator.onLine === 'undefined') {
          // If the browser doesn't support connection status reports
          // assume that we are online because most apps' only react
          // when they now that the connection has been interrupted
          this.isOnline = true
        } else {
          this.isOnline = window.navigator.onLine
        }
      }
    },

    errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    }
  },
  components: {
    NuxtLoading
  }
}
