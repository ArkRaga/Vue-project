<template>
  <h1>Welcome to The Town</h1>
  <p>please choose a place to go</p>
  <button @click="clicky">Test</button>

  <div>
    <Buttonface :locations="locations" />
    <!-- <button @click="changeLocation('Forage')">Forage</button>
    <button @click="changeLocation('Hunt')">Hunt</button>
    <button @click="changeLocation('Shop')">Shop</button> -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Buttonface from "../Buttonface.vue";
export default {
  name: "Town",
  components: { Buttonface },
  data() {
    return {
      locations: ["Forrest", "Hunt", "Shop"],
    };
  },
  methods: {
    ...mapActions([]),
    ...mapGetters(["getPlayerInventory"]),
    clicky() {
      console.log("Inventory: ", this.getPlayerInventory());
    },
  },
};
</script>

<style scoped>
* {
  color: #576b61;
}
</style>
