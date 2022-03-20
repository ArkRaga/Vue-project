<template>
  <div v-if="active" :class="type">
    <h1>{{ text }}</h1>
  </div>
</template>

<script>
import eventSystem from "../service/eventSystem";
export default {
  name: "Notif",
  data() {
    return {
      text: "",
      active: false,
      type: "green",
    };
  },
  methods: {
    greenNotif(text) {
      this.type = "green";
      this.activate(text);
    },
    redNotif(text) {
      this.type = "red";
      this.activate(text);
    },
    activate(text) {
      this.text = text;
      this.active = true;
      setTimeout(this.deactivate, 3000);
    },
    deactivate() {
      this.text = "";
      this.active = false;
    },
    test(text) {
      console.log("i am from notif: ", text);
    },
  },
  created() {
    eventSystem.registerEvent("greenNotif", this.greenNotif);
    eventSystem.registerEvent("redNotif", this.redNotif);
  },
};
</script>

<style scoped>
div {
  border-radius: 15px;
  padding: 3px;
  font-size: 8px;
  /* width: 50px; */
}
.red {
  background-color: #ff002b;
  color: white;
}
.green {
  background-color: #60ab85;
}
</style>
