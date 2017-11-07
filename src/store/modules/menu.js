const state = {
  collapsed: false,
  style: {},
};
const getters = {};

const mutations = {
  setMenu(state, payload = {}) {
    state = Object.assign(state, payload);
  }
};
const actions = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
