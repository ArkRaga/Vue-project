<template>
	<h1>Crafting</h1>
	<div>
		<CraftingCard v-for="r in recipes" :key="r.title" :recipe="r" />
	</div>
	<div>
		<buttonface :locations="locations" />
	</div>
</template>

<script>
import Buttonface from "../Buttonface.vue";
import CraftingCard from "../Cards/CraftingCard.vue";
import * as craft from "../../data/crafting.json";
import eventSystem from "@/service/eventSystem";
export default {
	components: { Buttonface, CraftingCard },
	data() {
		return {
			recipes: [craft.craftAxe],
			locations: ["Town", "Shop", "Hunt", "Forrest", "Back"],
		};
	},
	created() {
		// this.recipes = [craft];
	},
};
</script>

<style scope></style>
