import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'

Vue.use(Vuex)

let songApi = Axios.create({
  baseURL: 'https://itunes.apple.com/search?term=',
  timeout: 3000
})

// 'https://itunes.apple.com/search?callback=?&entity=song&term='

export default new Vuex.Store({
  state: {
    song: {},
    songs: []
  },
  mutations: {
    setList(state, data) {
      state.songs = data
    }
  },
  actions: {
    listSongs({ commit, dispatch }, artist) {
      songApi.get('/' + artist)
        .then(songs => {
          console.log(songs.data.results)
          commit('setList', songs.data.results)
          router.push({ name: 'home' })
        })
    }

  }
})
