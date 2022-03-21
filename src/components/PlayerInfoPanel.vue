<template>
	<div class="main">
		<div class="btn-container">
			<button @click="changeSelection('Player')">Player</button>
			<button @click="changeSelection('Inventory')">Inventory</button>
			<button @click="changeSelection('Quest')">Quest</button>
		</div>
		<div class="body">{{ selected }}</div>
	</div>
</template>

<script>
export default {
	name: "InfoPanel",
	components: {},
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
	background-color: #4b4883;
	border-radius: 10px;
	height: 80%;
}
</style>
