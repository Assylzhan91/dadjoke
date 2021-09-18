<template>
	<div>
		<router-link to="/">Back to page</router-link>
		<ul class="list-group" v-if="getListJokes.length">
			<li class="list-group-item" v-for="({joke, id}, idx) of getListJokes">
				<p>{{ joke }}</p>
				<VBtn
					colorType="danger"
					@handler="removeJokeAction(idx)"
				>Delete</VBtn>
			</li>
		</ul>
		<p v-else>
			<span> Jokes List is empty, please, back to page</span>
		</p>
	</div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex';
import VBtn from '../components/VBtn';
export default {
  components: {
    VBtn
	},
	created(){
    this.setLocalStorageAction()
	},
  computed: {
    ...mapGetters([
      'getListJokes'
    ])
  },
	methods: {
    ...mapActions([
			'setLocalStorageAction',
			'removeJokeAction',
		])
	}
}
</script>
