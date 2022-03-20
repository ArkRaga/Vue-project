<template>
  <div @click="$emit('btn-click')">
    <h3>{{ title }}</h3>
    <img :src="require(`@/assets/${imgName}`)" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    imgName: String,
  },
  emits: ["btn-click"],
  created() {},
};
</script>

<style scoped>
div {
  background-color: #60ab85;
  border-radius: 25px;
  width: 100px;
  text-align: center;
  cursor: pointer;
}

div:hover {
  background-color: #3c6b54;
}
</style>
