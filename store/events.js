import axios from '../plugins/ywca-api';

export const state = () => ({
  events: {}
});

export const actions = {
  async getEvents({
    commit
  }) {
    let res = await axios.get(`/calendarEvents/en-US.json`);
    let data = res.data;
    commit('setEvents', data);
  }
};

export const mutations = {
  setEvents(state, events) {
    state.events = events;
  }
};
