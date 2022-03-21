import { set } from "vue";

export default {
	state: {
		inventory: {},
	},
	getters: {
		getPlayerInventory: (state) => state.inventory,
		hasItem: (state) => (item) => {
			if (state.inventory[item.name]) {
				return true;
			} else {
				return false;
			}
		},
		getItem: (state) => (item) => {
			if (!item) return;
			if (state.inventory[item.name]) {
				return state.inventory[item.name];
			} else {
				return false;
			}
		},
	},
	mutations: {
		placeIntoInventory: (state, item) => {
			state.inventory[item.name] = item;
		},
		addToItemQuantity: (state, item) => {
			let i = state.inventory[item.name];
			let newobj = {
				id: item.idm,
				name: item.name,
				quantity: i.quantity + item.quantity,
			};
			state.inventory[item.name] = newobj;
			console.log("Add to quantity: ", item, newobj.quantity);
		},
		removeFromItemQuantity(state, item) {
			state.inventory[item.name].quantity -= item.quantity;
		},
		removeFromInventory(state, item) {
			delete state.inventory[item.name];
		},
	},
	actions: {
		addItemToInventory({ commit, state }, item) {
			if (state.inventory[item.name]) {
				commit("addToItemQuantity", item);
			} else {
				commit("placeIntoInventory", item);
			}
			// console.log("Added item: ", item);
		},
		updateItemInInventory({ commit, state }, item) {
			if (state.inventory[item.name]) {
				if (state.inventory[item.name].quantity > item.quantity) {
					commit("removeFromItemQuantity", item);
				} else {
					commit("removeFromInventory", item);
				}
			}
		},
		deleteItemFromInventory({ commit, state }, item) {
			if (state.inventory[item.name]) {
				commit("removeFromInventory", item);
			}
		},
	},
};
