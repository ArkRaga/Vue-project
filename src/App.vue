<template>
  <Notifs class="notif" />
  <router-view />
</template>

<script>
import Notifs from "./components/Notifs.vue";
export default {
  name: "App",
  components: {
    Notifs,
  },
};
</script>

<style>
html {
  background-color: #020b14;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #020b14;
  /* border: 2px solid #2c3e50; */
  border-radius: 25px;
}
.notif {
  position: fixed;
}
</style>
