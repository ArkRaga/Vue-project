<template>
	<div class="home">
		<div>
			<PlayerInfoPanel />
		</div>
		<div class="main">
			<Town v-if="playerLocation === 'Town'" />
			<Forrest v-else-if="playerLocation === 'Forrest'" />
			<CraftingLocation v-else-if="playerLocation === 'Crafting'" />
			<DefaultLocation v-else :location="playerLocation" />
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import Town from "../components/Locations/Town.vue";
import Forrest from "../components/Locations/Forrest.vue";
import CraftingLocation from "../components/Locations/CraftingLocation.vue";
import DefaultLocation from "../components/Locations/DefaultLocation.vue";
import Notif from "../components/Notifs.vue";
import PlayerInfoPanel from "../components/PlayerInfoPanel.vue";
import { mapGetters } from "vuex";

export default {
	name: "HomeView",
	props: {},
	components: {
		PlayerInfoPanel,
		Notif,
		DefaultLocation,
		Town,
		Forrest,
		CraftingLocation,
	},
	// data() {
	//   return {
	//     player_location: "",
	//   };
	// },
	computed: {
		...mapGetters({
			playerLocation: "getPlayerLocation",
		}),
	},
	mounted() {
		this.playerLocation = this.$store.getters.getPlayerLocation;
	},
};
</script>

<style scoped>
.home {
	padding: 25px;
	display: flex;
	flex-direction: row;
}
.main {
	background-color: #27254d;
	border-radius: 10px;
	height: 600px;
	padding: 25px;
}
p {
	color: white;
}
</style>
