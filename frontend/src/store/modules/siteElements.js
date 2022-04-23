
const state = () => ({
  activeButton: "",
  buttonData: {
    "home": {
      left: 0,
      width: 0
    },
    "blog": {
      left: 0,
      width: 0
    },
    "projects": {
      left: 0,
      width: 0
    },
    "about": {
      left: 0,
      width: 0
    },
  }
});

const getters = {
  activeButtonData (state) {
    return state.buttonData[state.activeButton];
  },
  buttonData (state) {
    return state.buttonData;
  }
}

const actions = {
  updateButtonData ({ commit }, payload) {
    commit('UPDATE_BUTTON_DATA', payload);
  },
  setActiveButton({ commit }, buttonName) {
    commit('SET_ACTIVE_BUTTON', buttonName);
  }
}

const mutations = {
  UPDATE_BUTTON_DATA (state, payload) {
    state.activeButton = payload.name;
    state.buttonData[payload.name] = payload.data;
  },

  SET_ACTIVE_BUTTON (state, buttonName) {
    state.activeButton = buttonName;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
