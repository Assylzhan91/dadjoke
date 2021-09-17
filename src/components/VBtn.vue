<template>
	<div class="pt-4 m-3">
		<button
			class="btn btn-info"
			@click="addJokesAction">
			 {{ textIsAddedTheJokes }}
		</button>
	</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
export default {
  name: "VBtn",
	methods: {
    ...mapActions([
      'addJokesAction',
		]),
	},
	computed: {
    ...mapGetters([
      'getRandomJoke'
		]),

    textIsAddedTheJokes(){
      return this.getRandomJoke.isAdded
				? 'This joke is already added'
				: 'Add to Favorite'
		}
	}
}
</script>
<style scoped>
	.btn {
		position: absolute;
		right: 20px;
		top: 20px;
	}
	.btn.btn-info {
		font-size: 10px;
	}

</style>
