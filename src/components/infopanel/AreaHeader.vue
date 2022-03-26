<template>
  <div>
    <div>
      <img :src="require(`@/assets/${imgSrc}`)" />
    </div>
    <div>
      <h1>{{ playerLocation }}</h1>
      <p>{{ des }}</p>
    </div>
  </div>
</template>

<script>
import Areas from "@/data/Area.json";
export default {
  props: {
    playerLocation: String,
  },
  data() {
    return {
      imgSrc: "",
      des: "",
    };
  },
  methods: {},
  created() {
    let a = Areas[this.playerLocation];
    this.imgSrc = `@/assets/background/${a.imgSrc}`;
    this.des = a.description;
  },
};
</script>

<style></style>
