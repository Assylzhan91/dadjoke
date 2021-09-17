<template>
	<div class="alert alert-info">
		<VBtn></VBtn>
		<h1 class="text-danger" :class="{'green': getRandomJoke.isAdded}">The Joke</h1>
		<p>{{ getRandomJoke.joke }}</p>
		<p>{{ getRandomJoke.id }}</p>
		<button class="btn btn-primary" @click="randomJokeAction">Load another one</button>
		<div>
			<router-link to="/list">Go to list Jokes</router-link>
		</div>
	</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import VBtn from "./VBtn";
export default {
  name: "TheJoke",
	components: {
    VBtn
	},
  methods: {
    ...mapActions([
      'randomJokeAction'
    ])
  },
	computed: {
    ...mapGetters([
      'getRandomJoke',
      'getListJokes'
		])
	}
}
</script>

<style scoped>
.green {
	color: green !important;
}
</style>
