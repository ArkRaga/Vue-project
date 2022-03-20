import { createStore } from "vuex";

import PlayerStore from "./modules/PlayerStore";
import Inventory from "./modules/Inventory";
export default createStore({
  modules: { PlayerStore, Inventory },
});
