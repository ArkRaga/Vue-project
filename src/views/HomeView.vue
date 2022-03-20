<template>
  <div class="home">
    <h1>Hello :)</h1>
    <Town v-if="playerLocation === 'Town'" />
    <Forrest v-else-if="playerLocation === 'Forrest'" />
    <DefaultLocation v-else :location="playerLocation" />
  </div>
</template>

<script>
// @ is an alias to /src
import Town from "../components/Locations/Town.vue";
import Forrest from "../components/Locations/Forrest.vue";
import DefaultLocation from "../components/Locations/DefaultLocation.vue";
import Notif from "../components/Notifs.vue";
import { mapGetters } from "vuex";

export default {
  name: "HomeView",
  props: {},
  components: { Notif, DefaultLocation, Town, Forrest },
  // data() {
  //   return {
  //     player_location: "",
  //   };
  // },
  computed: {
    ...mapGetters({
      playerLocation: "getPlayerLocation",
    }),
  },
  mounted() {
    this.playerLocation = this.$store.getters.getPlayerLocation;
  },
};
</script>

<style scoped>
.home {
  padding: 25px;
}
p {
  color: white;
}
</style>
