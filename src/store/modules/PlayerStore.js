export default {
  state: {
    playerLocation: "Town",
    locations: ["Town", "Forrest", "Shop", "Hunt"],
  },
  getters: {
    getPlayerLocation: (state) => state.playerLocation,
  },
  mutations: {
    setPlayerLocation: (state, location) => {
      state.playerLocation = location;
    },
  },
  actions: {
    changePlayerLocation({ commit, state }, location) {
      if (state.locations.includes(location)) {
        commit("setPlayerLocation", location);
      } else {
        // console.log("No location for: ", location);
      }
    },
  },
};
