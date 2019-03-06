import axios from "axios";

module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "YWCA Harbor Area & South Bay",
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "https://www.youtube.com/watch?v=8hgWXQFtaaw&feature=youtu.be"
      }
    ],
    script: [
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/bootstrap.native/2.0.15/polyfill.min.js",
        defer: true,
        body: true
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/bootstrap.native/2.0.15/bootstrap-native-v4.min.js",
        defer: true,
        body: true
      },
      {
        src: "/bundle.min.js",
        defer: true,
        body: true
      },
      {
        src: "/vendors.min.js",
        defer: true,
        body: true
      }
    ],
    link: [
      {
        rel: "apple-touch-icon",
        size: "180x180",
        href: "/img/apple-touch-icon.png"
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/img/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/img/favicon-16x16.png"
      },
      {
        rel: "manifest",
        href: "/img/site.webmanifest"
      },
      {
        rel: "mask-icon",
        href: "/img/safari-pinned-tab.svg",
        color: "#da532c"
      },
      {
        rel: "shortcut icon",
        href: "/img/favicon.ico"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Poppins:400,500,600,700"
      },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.5.0/css/regular.css",
        integrity:
          "sha384-z3ccjLyn+akM2DtvRQCXJwvT5bGZsspS4uptQKNXNg778nyzvdMqiGcqHVGiAUyY",
        crossorigin: "anonymous"
      },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.5.0/css/brands.css",
        integrity:
          "sha384-QT2Z8ljl3UupqMtQNmPyhSPO/d5qbrzWmFxJqmY7tqoTuT2YrQLEqzvVOP2cT5XW",
        crossorigin: "anonymous"
      },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.5.0/css/fontawesome.css",
        integrity:
          "sha384-u5J7JghGz0qUrmEsWzBQkfvc8nK3fUT7DCaQzNQ+q4oEXhGSx+P2OqjWsfIRB8QT",
        crossorigin: "anonymous"
      },
      {
        rel: "stylesheet",
        href: "/styles.css"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#fff"
  },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios"
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  // buildDir: "./functions/nuxt",
  build: {
    // publicPath: "./_nuxt/",
    // extractCSS: true
  },

  /*
   ** Generate options for static build
   */
  generate: {
    routes: function() {
      let events = axios
        .get(
          "https://ywca-harbor-and-southbay.firebaseio.com/flamelink/environments/production/content/calendarEvents/en-US.json"
        )
        .then(res => {
          let objArr = [];
          Object.entries(res.data).forEach(eventID => {
            objArr.push({
              route: "/get-involved/events/" + eventID[0],
              payload: eventID[1]
            });
          });
          return objArr;
        });
      let employmentOpportunities = axios
        .get(
          "https://ywca-harbor-and-southbay.firebaseio.com/flamelink/environments/production/content/employmentOpportunities/en-US.json"
        )
        .then(res => {
          let objArr = [];
          Object.entries(res.data).forEach(opportunityID => {
            objArr.push({
              route: "/get-involved/opportunities/" + opportunityID[0],
              payload: opportunityID[1]
            });
          });
          return objArr;
        });
      let volunteerOpportunities = axios
        .get(
          "https://ywca-harbor-and-southbay.firebaseio.com/flamelink/environments/production/content/volunteerOpportunities/en-US.json"
        )
        .then(res => {
          let objArr = [];
          Object.entries(res.data).forEach(opportunityID => {
            objArr.push({
              route: "/get-involved/opportunities/" + opportunityID[0],
              payload: opportunityID[1]
            });
          });
          return objArr;
        });
      return Promise.all([
        events,
        employmentOpportunities,
        volunteerOpportunities
      ]).then(values => {
        return [...values[0], ...values[1]];
      });
    }
  }
};
