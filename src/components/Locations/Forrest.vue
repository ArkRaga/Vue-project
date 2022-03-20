<template>
  <div>
    <h1>The Forrest</h1>
    <div>
      <Card @btn-click="gatherSticks" title="Sticks" imgName="stick_48.png" />
    </div>
  </div>
</template>

<script>
import Card from "../Card.vue";
import eventSystem from "../../service/eventSystem";
export default {
  name: "Forrest",
  components: {
    Card,
  },
  methods: {
    gatherSticks() {
      //   console.log("you picked up a stick");
      eventSystem.invokeEvent("testNotif", "Stick Gatherd");
    },
  },
};
</script>

<style></style>
