import axios from '../plugins/ywca-api';

export const state = () => ({
  events: {},
  calendarObj: {}
});

export const actions = {
  async getEvents({
    commit
  }) {
    let res = await axios.get(`/calendarEvents/en-US.json`);
    let data = res.data;
    commit('setEvents', data);
    commit('setCalendarObj', data);
  }
};

export const mutations = {
  setEvents(state, events) {
    state.events = events;
  },
  setCalendarObj(state, events) {
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
        calendarObj[year][month - 1][day] = [{
          displayname: events[event].eventName,
          duration: endTime,
          at: atTime,
          id: event
        }];
      } else {
        calendarObj[year][month - 1][day].push({
          displayname: events[event].eventName,
          duration: endTime,
          at: atTime,
          id: event
        });
      }
    }
    state.calendarObj = calendarObj;
  }
};
