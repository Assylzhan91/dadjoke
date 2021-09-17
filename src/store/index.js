import Vue from 'vue'
import Vuex from 'vuex'

const url = 'https://icanhazdadjoke.com/'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    randomJoke: null,
    loading: true,
    listJokes: []
  },
  getters: {
    getRandomJoke(state){
      state.randomJoke = {...state.randomJoke, isAdded: false}
      return state.randomJoke
    },
    getLoading(state){
      return state.loading
    },
    getListJokes(state) {
      return state.listJokes
    },
  },
  mutations: {
    setJoke (state, joke) {
      state.randomJoke = joke
   },

    addJoke (state, jokes) {
      let index = state.listJokes.findIndex(item =>item.id === jokes.id)
      if(index === -1) {
        state.randomJoke.isAdded = true
        state.listJokes.push(jokes)
      }
    },

  },
  actions: {
    async randomJokeAction ({commit, state}){
      try {
        if(!state.loading){
          state.loading = true
        }
        let res = await fetch(url, {
          headers: {
            Accept: "application/json"
          }
        })
        let json = await res.json()
        commit('setJoke', json)
      }catch (e) {

      }finally {
        state.loading = false
      }
    },
    addJokesAction({commit, state}){
      commit('addJoke', state.randomJoke)
    }
  },

})
