
const state = () => ({
  darkMode: true,
  fontScale: 5,
});

const getters = {}

const actions = {
  increaseFontScale: (context) => {
    context.commit('INCREASE_FONT_SCALE');
  },

  decreaseFontScale: (context) => {
    context.commit('DECREASE_FONT_SCALE');
  },

  setDarkTheme: (context) => {
    context.commit('SET_DARK_THEME');
  },

  setLightTheme: (context) => {
    context.commit('SET_LIGHT_THEME');
  }
}

const mutations = {
  INCREASE_FONT_SCALE (state) {
    state.fontScale <= 10 ? state.fontScale++ : 10;
  },

  DECREASE_FONT_SCALE (state) {
    state.fontScale >= 0 ? state.fontScale-- : 0;
  },

  SET_DARK_THEME (state) {
    state.darkMode = true;
  },

  SET_LIGHT_THEME (state) {
    state.darkMode = false;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
