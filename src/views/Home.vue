<template>
  <div :class="{'w-100': getErrorText}">
		<Loader v-if="getLoading"></Loader>
		<TheJoke v-else></TheJoke>
	</div>
</template>

<script>
import Loader from "../components/Loader";
import TheJoke from "../components/TheJoke";
import {mapGetters, mapActions} from "vuex";

export default {
  name: 'Home',
  components: {
    TheJoke,
    Loader,
  },
  computed: {
    ...mapGetters([
      'getLoading',
      'getErrorText',
    ])
  },
}
</script>
