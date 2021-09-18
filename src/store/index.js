import Vue from 'vue'
import Vuex from 'vuex'

const url = 'https://icanhazdadjoke.com/'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    randomJoke: null,
    loading: true,
    listJokes: [],
    errorText: null
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
    getErrorText(state) {
      return state.errorText
    },
  },
  mutations: {
    setJoke (state, joke) {
      state.randomJoke = joke
    },

    addJoke (state, jokes) {
      let index = state.listJokes.findIndex(item =>item.id === jokes.id)
      let jokesStorage = localStorage.getItem('jokes')
      if(index === -1) {
        state.randomJoke.isAdded = true
        state.listJokes.push(jokes)
        localStorage.setItem('jokes', JSON.stringify(state.listJokes))
      }
    },
    setLocalStorage(state){
      let jokesStorage = localStorage.getItem('jokes')
      if(jokesStorage){
        state.listJokes = JSON.parse(jokesStorage)
      }
    },
    removeJoke(state, id) {
      let index = state.listJokes.findIndex((item,idx) => idx === id)
      state.listJokes.splice(index, 1)
      localStorage.setItem('jokes', JSON.stringify(state.listJokes))
    }
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
        state.errorText = e.message
      }finally {
        state.loading = false
      }
    },
    addJokesAction({commit, state}){
      commit('addJoke', state.randomJoke)
    },
    setLocalStorageAction({commit}){
      commit('setLocalStorage')
    },
    removeJokeAction({commit}, id){
      commit('removeJoke', id)
    }
  },

})
