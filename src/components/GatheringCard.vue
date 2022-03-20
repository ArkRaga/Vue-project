<template>
  <div @click="doClick" :class="active ? 'active' : 'non-active'">
    <h3>{{ title }}</h3>
    <img :src="require(`@/assets/${imgName}`)" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    imgName: String,
    active: false,
  },
  emits: ["btn-click"],
  methods: {
    doClick() {
      if (!this.active) {
        return;
      }
      this.$emit("btn-click");
    },
  },
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
  transition: 1s all;
  user-select: none;
  margin: 5px;
}
img {
  user-select: none;
  pointer-events: none;
}
.non-active:hover {
  background-color: #4d1e26;
}
.active:hover {
  background-color: #3c6b54;
}
.active:active {
  transform: scaleX(1.85) scaleY(0.75);
}
</style>
