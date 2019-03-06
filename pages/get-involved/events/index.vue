<template>
  <!-- Main -->
  <main class="ywca-harbor events">
    <div id="myCalendar" ref="myCalendar"></div>
  </main>
  <!-- Main -->
</template>

<script>
import axios from "axios";

export default {
  computed: {
    getEvents() {
      const { events } = this.$store.state;
      return events;
    }
  },
  mounted: function() {
    // Import scripts
    let bsPoly = document.createElement("script");
    let bsNative = document.createElement("script");
    let bundleScript = document.createElement("script");
    bundleScript.setAttribute("src", "/vendors.min.js");
    bsPoly.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/bootstrap.native/2.0.15/polyfill.min.js"
    );
    bsNative.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/bootstrap.native/2.0.15/bootstrap-native-v4.min.js"
    );
    document.body.appendChild(bsPoly);
    document.body.appendChild(bsNative);
    document.body.appendChild(bundleScript);

    var elem = this.$refs.myCalendar;
    var { calendarObj } = this.getEvents;
    var calendar = new JSCalendar(elem, {
      eventBackground: "rgb(250, 70, 22)"
    });

    calendar.on("dragging", function(calendar, extra) {
      var myURI = `/${extra.id}`;
      window.location += myURI;
    });

    calendar
      .init()
      .setMatrix(calendarObj)
      .render();
  },
  destroyed: function() {
    let bsPoly = document.querySelector(
      'script[src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap.native/2.0.15/polyfill.min.js"'
    );
    let bsNative = document.querySelector(
      'script[src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap.native/2.0.15/bootstrap-native-v4.min.js"'
    );
    let bundleScript = document.querySelector('script[src="/vendors.min.js"');

    bsPoly.remove();
    bsNative.remove();
    bundleScript.remove();
  }
};
</script>

