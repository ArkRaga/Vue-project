<template>
	<div @click="doClick" :class="active ? 'active' : 'non-active'">
		<h3>{{ gather.title }}</h3>
		<img v-if="imgName" :src="require(`@/assets/${imgName}`)" alt="" />
	</div>
</template>

<script>
import eventSystem from "@/service/eventSystem.js";
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
		doClick() {
			if (!this.active) {
				if (this.notifAlert) {
					eventSystem.invokeEvent("redNotif", this.redNotifMsg);
				}
				return;
			}
		},
	},
	created() {
		if (this.gather.imgName) {
			this.imgName = this.gather.imgName;
		}
		if (this.gather.required) {
			this.redNotifMsg = `you need ${this.gather.required}`;
		} else {
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
