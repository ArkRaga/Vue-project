<template>
  <h3>Sorry {{ location }} is not currently set up</h3>
  <buttonface :locations="locations" />
</template>

<script>
import Buttonface from "../Buttonface.vue";
export default {
  name: "Default",
  components: {
    Buttonface,
  },
  props: {
    location: String,
  },
  data() {
    return {
      locations: ["Town"],
    };
  },
};
</script>

<style></style>
