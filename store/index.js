import axios from '../plugins/ywca-api';
import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      employment: {},
      volunteer: {},
      events: {}
    },
    mutations: {
      setOpportunities(state, {
        employment,
        volunteer
      }) {
        state.employment = employment;
        state.volunteer = volunteer;
      },
      setEvents(state, events) {
        state.events = events;
      }
    },
    actions: {
      async getEvents({
        commit
      }) {
        let res = await axios.get(`content/calendarEvents.json`);
        let data = res['en-US'];
        commit('setEvents', data);
      },
      async getOpportunities() {
        let {
          employmentOpportunities,
          volunteerOpportunities
        } = await axios.get(`content.json`);
        let employment = employmentOpportunities['en-US'];
        let volunteer = volunteerOpportunities['en-US'];
        commit('setOpportunities', {
          employment,
          volunteer
        });
      }
    }
  });
}

export default createStore;
