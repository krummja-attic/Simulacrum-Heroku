
const state = () => ({
  darkMode: true,
  theme: 'dark',
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
  },

  setTheme: (context, value) => {
    context.commit('SET_THEME', value);
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
  },

  SET_THEME (state, value) {
    state.theme = value;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
