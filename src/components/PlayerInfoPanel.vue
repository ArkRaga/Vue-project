<template>
	<div class="main">
		<div class="btn-container">
			<button @click="changeSelection('Player')">Player</button>
			<button @click="changeSelection('Inventory')">Inventory</button>
			<button @click="changeSelection('Quest')">Quest</button>
		</div>
		<div class="body">
			<h3>{{ selected }}</h3>
			<Inventory v-if="selected === 'Inventory'" />
		</div>
	</div>
</template>

<script>
import Inventory from "../components/infopanel/Inventory.vue";
export default {
	name: "InfoPanel",
	components: {
		Inventory,
	},
	data() {
		return {
			selected: "Player",
		};
	},
	methods: {
		changeSelection(sel) {
			this.selected = sel;
		},
	},
};
</script>

<style scoped>
.main {
	background-color: #27254d;
	height: 400px;
	padding: 10px;
	border-radius: 15px;
}
button {
	margin: 2px;
}
.btn-container {
	height: 10%;
}
.body {
	padding: 2px;
	background-color: #4b4883;
	border-radius: 10px;
	height: 80%;
}
h3 {
	color: white;
}
</style>
