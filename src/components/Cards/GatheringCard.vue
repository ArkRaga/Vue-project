<template>
  <div class="card">
    <div class="top">
      <div class="imgHolder">
        <img v-if="imgName" :src="require(`@/assets/${imgName}`)" alt="" />
      </div>
      <h3>{{ gather.title }}</h3>
    </div>
    <div>Description</div>
    <div class="btn-holder">
      <button @click="doClick" :class="active ? 'active' : 'non-active'">
        collect
      </button>
    </div>
  </div>
</template>

<script>
import eventSystem from "@/service/eventSystem.js";
import { mapActions } from "vuex";
import items from "@/data/items.json";
export default {
  props: {
    gather: Object,
  },
  data() {
    return {
      imgName: false,
      active: false,
      redNotifMsg: "",
      greenNotifMsg: "",
    };
  },
  emits: ["btn-click"],
  methods: {
    ...mapActions(["addItemToInventory"]),
    doClick() {
      if (!this.active) {
        eventSystem.invokeEvent("redNotif", this.redNotifMsg);
        return;
      }
      this.addItemToInventory(items[this.gather.itemName]);
      eventSystem.invokeEvent("greenNotif", this.greenNotifMsg);
    },
  },
  created() {
    if (this.gather.imgName) {
      this.imgName = this.gather.imgName;
    }
    if (this.gather.required) {
      console.log("gather required");
      if (!this.$store.getters.hasItem(items[this.gather.required])) {
        console.log(
          "Has item :",
          this.$store.getters.hasItem(this.gather.required)
        );
        this.redNotifMsg = `you need ${this.gather.required}`;
        return;
      }
    }
    this.active = true;
    this.greenNotifMsg = `you picked up ${this.gather.title}`;
  },
};
</script>

<style scoped>
.card {
  color: #e0e0e0;
  background-color: #293e51;
  border-radius: 10px;
  /* width: 100px; */
  text-align: center;
  cursor: pointer;
  transition: 0.2s all;
  user-select: none;
  margin: 5px;
  /* padding: 3px; */
}
img {
  user-select: none;
  pointer-events: none;
}
.imgHolder {
  height: 48px;
  border-radius: 10px;
  border: 1px solid #45758a;
}
.top {
  top: 0;
  color: #ecb365;
  font-size: 25px;
  display: flex;
  align-items: center;
  flex-direction: row;
}
/* .btn-holder {
  background-color: #45758a;
  color: #ecb365;
} */
.btn-holder button {
  border: none;
  background-color: #45758a;
  color: #ecb365;
  border-radius: 5px;
  padding: 5px;
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
