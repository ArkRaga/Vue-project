<template>
	<div class="container">
		<div class="inv" v-for="itm in inventory" :key="itm.name">
			<h4>{{ itm.name }} x{{ itm.quantity }}</h4>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	name: "inventoryPanel",
	components: {},
	computed: {
		...mapGetters({
			inventory: "getPlayerInventory",
		}),
	},
	created() {
		// this.inventory = this.$store.getters.getPlayerInventory;
	},
};
</script>

<style scoped>
.inv {
	color: antiquewhite;
}
.container {
	padding: 2px;
}
</style>
