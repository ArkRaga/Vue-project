export default {
  state: {
    inventory: [{ id: 1, name: "test_item" }],
  },
  getters: {
    getPlayerInventory: (state) => state.inventory,
  },
  mutations: {
    placeIntoInventory: (state, item) => {
      state.inventory.push(item);
    },
    addToItemQuantity(state, item) {
      let i = state.inventory.find((itm) => itm.id === item.id);
      i.quantity += item.quantity;
    },
    removeFromItemQuantity(state, item) {
      let i = state.inventory.find((itm) => itm.id === item.id);
      i.quantity -= item.quantity;
    },
    removeFromInventory(state, item) {
      state.inventory = state.inventory.filter((itm) => itm.id !== item.id);
    },
  },
  actions: {
    addItemToInventory({ commit, state }, item) {
      if (state.inventory.find((itm) => itm.id === item.id)) {
        commit("addToItemQuantity", item);
      } else {
        commit("placeIntoInventory", item);
      }
    },
    updateItemInInventory({ commit, state }, item) {
      let i = state.inventory.find((itm) => itm.id === item.id);
      if (i) {
        if (i.quantity > 1) {
          commit("removeFromItemQuantity", item);
        } else {
          commit("removeFromInventory", item);
        }
      }
    },
    deleteItemFromInventory({ commit, state }, item) {
      if (state.inventory.find((itm) => itm.id === item.id)) {
        commit("removeFromInventory", item);
      }
    },
  },
};
