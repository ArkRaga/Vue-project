<template>
  <div @click="doClick" :class="active ? 'active' : 'non-active'">
    <h3>{{ recipe.item.name }}</h3>
    <img v-if="imgName" :src="require(`@/assets/${imgName}`)" alt="" />
    <h5>{{ recipe.mat1.name }} x{{ recipe.mat1.quantity }}</h5>
    <h5>{{ recipe.mat2.name }} x{{ recipe.mat2.quantity }}</h5>
  </div>
</template>
<script>
import eventSystem from "@/service/eventSystem";
import { mapActions } from "vuex";
import items from "@/data/items.json";
export default {
  props: {
    recipe: Object,
  },
  data() {
    return {
      active: false,
      imgName: false,
    };
  },
  emits: ["btn-click"],
  methods: {
    ...mapActions(["updateItemInInventory", "addItemToInventory"]),
    doClick() {
      if (
        !this.checkMat(this.recipe.mat1) &&
        !this.checkMat(this.recipe.mat2)
      ) {
        this.active = false;
      } else {
        this.active = true;
      }
      if (!this.active) {
        eventSystem.invokeEvent("redNotif", "you need the Materials");
        return;
      }
      this.craftItem();
    },
    checkMat(mat) {
      let i = this.$store.getters.getItem(mat);
      if (!i) return false;
      if (i.quantity < mat.quantity) return false;
      return true;
    },
    craftItem() {
      this.updateItemInInventory(this.recipe.mat1);
      this.updateItemInInventory(this.recipe.mat2);
      this.addItemToInventory(this.recipe.item);
      eventSystem.invokeEvent("greenNotif", "Created Axe!");
      console.log(this.$store.getters.getPlayerInventory);
    },
  },
  created() {
    // console.log("CraftingCard: ", this.recipe);
    // console.log(items[this.recipe.item.name].imgName);
    if (items[this.recipe.item.name].imgName) {
      this.imgName = items[this.recipe.item.name].imgName;
    }
    // console.log(this.$store.getters.getItem(this.recipe.mat1));
    if (this.checkMat(this.recipe.mat1) && this.checkMat(this.recipe.mat2)) {
      this.active = true;
    }
  },
};
</script>
<style scoped>
div {
  background-color: #60ab85;
  border-radius: 25px;
  width: 100px;
  text-align: center;
  cursor: pointer;
  transition: 0.2s all;
  user-select: none;
  margin: 5px;
  padding: 1px;
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
  transform: scaleX(1.08) scaleY(0.85);
}
</style>
