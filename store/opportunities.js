import axios from '../plugins/ywca-api';

export const state = () => ({
  employment: {},
  volunteer: {}
});

export const actions = {
  async getOpportunities({
    commit
  }) {
    let res = await axios.get(`.json`);
    let {
      employmentOpportunities,
      volunteerOpportunities
    } = res.data;
    let employment = employmentOpportunities["en-US"];
    let volunteer = volunteerOpportunities["en-US"];
    let data = {
      employment,
      volunteer
    };
    commit('setOpportunities', data);
  }
};

export const mutations = {
  setOpportunities(state, {
    employment,
    volunteer
  }) {
    state.employment = employment;
    state.volunteer = volunteer;
  }
};
