<template>
  <div v-if="active">
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

<style scoped>
div {
  background-color: #60ab85;
  border-radius: 15px;
  padding: 3px;
  font-size: 8px;
  /* width: 50px; */
}
</style>
