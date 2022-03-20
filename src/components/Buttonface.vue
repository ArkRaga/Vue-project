<template>
  <div>
    <button @click="changeLocation(l)" v-for="l in locations" :key="l">
      {{ l }}
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Buttonface",
  props: {
    locations: Array,
  },
  methods: {
    ...mapActions(["changePlayerLocation"]),
    changeLocation(place) {
      this.changePlayerLocation(place);
      // console.log(`Selected Location: ${place}`);
    },
  },
};
</script>

<style scope>
div {
  margin: 5px;
}
</style>
