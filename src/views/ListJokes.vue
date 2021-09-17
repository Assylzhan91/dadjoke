<template>
	<div>
		<router-link to="/">Back to page</router-link>
		<ul class="list-group" v-if="getListJokes.length">
			<li class="list-group-item" v-for="{joke, id} of getListJokes">
				<p>{{ joke }}</p>
			</li>
		</ul>
		<p v-else>
			<span> Jokes List is empty, please, back to page</span>
		</p>
	</div>
</template>
<script>
import {mapGetters} from 'vuex';

export  default {
  computed: {
    ...mapGetters([
      'getListJokes'
    ])
  },
}
</script>
