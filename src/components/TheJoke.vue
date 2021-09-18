<template>
	<div class="alert alert-info" :class="{'alert-margin': !getErrorText}">
		<div v-if="!getErrorText">
			<VBtn
				colorType="primary"
				@handler="addJokesAction"
				class="add-joke"
			>
				{{ isAddedText }}
			</VBtn>
			<h1 class="text-danger" :class="{'green': getRandomJoke.isAdded}">The Joke</h1>
			<p>{{ getRandomJoke.joke }}</p>
			<p>{{ getRandomJoke.id }}</p>
			<VBtn @handler="randomJokeAction">
				Load another one
			</VBtn>
			<div>
				<router-link to="/list">Go to list Jokes</router-link>
			</div>
		</div>
		<div v-else>
			<h1>{{ getErrorText }}</h1>
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
      'randomJokeAction',
			'addJokesAction'
    ])
  },
	computed: {
    ...mapGetters([
      'getRandomJoke',
      'getErrorText',
		]),
		isAddedText(){
      return this.getRandomJoke.isAdded
        ? 'This joke is already added'
        : 'Add to Favorite'
		}
	}
}
</script>

<style>
	.alert-margin {
		padding-top: 3rem !important;
	}

	.add-joke {
		position: absolute;
		right: 20px;
		top: 20px;
		font-size: 10px;
	}

	.add-joke .btn{
		font-size: 10px;
	}

	.text-danger.green {
		color: green !important;
	}

</style>
