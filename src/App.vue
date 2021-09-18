<template>
  <div id="app" class="container">
		<router-view></router-view>
	</div>
</template>
<script>
import {mapActions} from 'vuex';

export  default {
	methods: {
    ...mapActions([
      'randomJokeAction'
		])
	},
  created() {
    this.randomJokeAction()
  }
}
</script>
<style>
body,
html {
	height: 100vh;
	font-family: "Font Awesome 5 Free";
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
