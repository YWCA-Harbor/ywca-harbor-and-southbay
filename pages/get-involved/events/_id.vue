<template>
  <main class="ywca-harbor events-post">
    <div v-if="err" class="container">
      <h1>Oh no</h1>
    </div>
    <div v-else class="container">
      <h1>{{ eventName }}</h1>
      <img :src="eventImg" class="w-100">
      <h3>Date and Time:&nbsp;&nbsp;{{ eventDate }}&nbsp;&nbsp;{{ eventStart }}-{{ eventEnd }}</h3>
      <div v-html="eventDescription"></div>
    </div>
  </main>
</template>

<script>
import axios from "axios";

const convertTime = time => {
  var H = +time.substr(0, 2);
  var h = H % 12 || 12;
  var ampm = H < 12 ? "AM" : "PM";
  time = h + time.substr(2, 3) + ampm;
  return time;
};

const getDate = eventDate => {
  var dateObj = new Date(eventDate);
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();

  return `${month}/${day}/${year}`;
};

export default {
  validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id);
  },
  async asyncData({ params }) {
    try {
      const res = await axios.get(
        `https://ywca-harbor-and-southbay.firebaseio.com/flamelink/environments/production/content/calendarEvents/en-US/${
          params.id
        }.json`
      );
      const events = res.data;
      if (events === null) {
        return { err: true };
      }
      const {
        eventName,
        eventDescription,
        date,
        time,
        endTime,
        image
      } = events;
      const eventImg = `https://firebasestorage.googleapis.com/v0/b/ywca-harbor-and-southbay.appspot.com/o/flamelink%2Fmedia%2F${
        image[0]
      }_${eventName}.png?alt=media`;
      const eventStart = convertTime(time);
      const eventEnd = convertTime(endTime);
      const eventDate = getDate(date);
      return {
        eventName,
        eventDescription,
        eventStart,
        eventEnd,
        eventDate,
        eventImg,
        err: false
      };
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  }
};
</script>
