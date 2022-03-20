<template>
  <div>
    <button
      class="btn-face"
      @click="changeLocation(l)"
      v-for="l in locations"
      :key="l"
    >
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
.btn-face {
  background-color: #49477a;
  color: #c7c7c7;
  margin: 2px;
  font-size: 15px;
  border-radius: 5px;
  border: none;
  padding: 5px 8px;
  cursor: pointer;
}
.btn-face:hover {
  background-color: #7572be;
  color: #000000;
}
div {
  margin: 10px;
}
</style>
