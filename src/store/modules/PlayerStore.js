export default {
  state: {
    playerLocation: "Town",
    locations: ["Town", "Forrest", "Shop", "Hunt", "Lake", "Crafting"],
    prevLocation: "Town",
  },
  getters: {
    getPlayerLocation: (state) => state.playerLocation,
  },
  mutations: {
    setPlayerLocation: (state, location) => {
      state.prevLocation = state.playerLocation;
      state.playerLocation = location;
    },
  },
  actions: {
    changePlayerLocation({ commit, state }, location) {
      if (location === "back") {
        commit("setPlayerLocation", state.prevLocation);
        return;
      }
      if (state.locations.includes(location)) {
        commit("setPlayerLocation", location);
      } else {
        console.log("No location for: ", location);
      }
    },
  },
};
