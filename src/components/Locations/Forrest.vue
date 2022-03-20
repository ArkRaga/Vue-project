<template>
  <div>
    <h1>The Forrest</h1>
    <div class="card-holder">
      <Card
        @btn-click="gatherSticks"
        title="Sticks"
        imgName="stick_48.png"
        active="true"
      />
      <Card
        @btn-click="gatherTree"
        title="Tree"
        imgName="tree1_48.png"
        :active="hasAxe"
      />
    </div>
    <div>
      <buttonface :locations="locations" />
    </div>
  </div>
</template>

<script>
import Card from "../GatheringCard.vue";
import Buttonface from "../Buttonface.vue";
import eventSystem from "../../service/eventSystem";
import { mapGetters, mapActions } from "vuex";
import * as items from "../../data/items.json";
export default {
  name: "Forrest",
  components: {
    Card,
    Buttonface,
  },
  data() {
    return {
      locations: ["back", "Lake"],
      hasAxe: false,
    };
  },
  methods: {
    ...mapActions(["addItemToInventory"]),
    gatherSticks() {
      console.log("sticks ");
      let i = items.Stick;
      i.quantity = 1;
      this.addItemToInventory(i);
      eventSystem.invokeEvent("testNotif", "Stick Gatherd");
    },
    gatherTree() {
      //   console.log("you picked up a stick");
      eventSystem.invokeEvent("testNotif", "Log Gatherd");
    },
  },
  created() {
    // console.log(items.Axe.id);
    this.hasAxe = this.$store.getters.hasItem(items.Axe.id);
  },
  computed: {
    // hasAxe: this.$store.getters.hasItem(items.Axe.id),
  },
};
</script>

<style scoped>
.card-holder {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
