<template>
  <div v-show="active">
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
    };
  },
  methods: {
    fire(text) {
      this.text = text;
      this.active = true;
      setTimeout(this.deactivate, 3000);
    },
    deactivate() {
      console.log("Bingo");
      this.text = "";
      this.active = false;
    },
    test(text) {
      console.log("i am from notif: ", text);
    },
  },
  created() {
    eventSystem.registerEvent("testNotif", this.fire);
  },
};
</script>

<style></style>
