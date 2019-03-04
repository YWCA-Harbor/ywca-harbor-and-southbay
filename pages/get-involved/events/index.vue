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
  async asyncData() {
    try {
      const res = await axios.get(
        "https://ywca-harbor-and-southbay.firebaseio.com/flamelink/environments/production/content/calendarEvents.json"
      );
      const events = res.data["en-US"];
      let calendarObj = {};
      for (let event in events) {
        let date = events[event].date.split("T")[0];
        let year = date.split("-")[0];
        let month = date.split("-")[1];
        let day = date.split("-")[2];
        let atTime = new Date(`${date}T${events[event].time}`);
        let endTime = new Date(`${date}T${events[event].endTime}`);
        if (!calendarObj[year]) {
          calendarObj[year] = {};
        }
        if (!calendarObj[year][month - 1]) {
          calendarObj[year][month - 1] = {};
        }
        if (!calendarObj[year][month - 1][day]) {
          calendarObj[year][month - 1][day] = [
            {
              displayname: events[event].eventName,
              duration: endTime,
              at: atTime,
              id: event
            }
          ];
        } else {
          calendarObj[year][month - 1][day].push({
            displayname: events[event].eventName,
            duration: endTime,
            at: atTime,
            id: event
          });
        }
      }
      return { events, calendarObj };
    } catch (err) {
      console.log(`Error: ${err}`);
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
    var calendar = new JSCalendar(elem, {
      eventBackground: "rgb(250, 70, 22)"
    });

    calendar.on("dragging", function(calendar, extra) {
      var myURI = `/${extra.id}`;
      window.location += myURI;
    });

    calendar
      .init()
      .setMatrix(this.calendarObj)
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

