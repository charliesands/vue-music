import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'
import Song from './models/Song.js'

Vue.use(Vuex)

let songApi = Axios.create({
  baseURL: 'https://itunes.apple.com/search?term=',
  timeout: 3000
})

let server = Axios.create({
  baseURL: '//localhost:3000',
  timeout: 3000
})

// 'https://itunes.apple.com/search?callback=?&entity=song&term='

export default new Vuex.Store({
  state: {
    song: {},
    songs: [],
    userSong: {},
    userSongs: []
  },
  mutations: {
    setList(state, data) {
      state.songs = data
    },
    setUserList(state, data) {
      state.userSongs = data
    },
    setUserSong(state, data) {
      state.userSong = data
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
    },
    getSongs({ commit, dispatch }) {
      server.get('/api/songs')
        .then(songs => {
          console.log(songs)
          commit('setUserList', songs.data)
        })
    },
    addSong({ commit, dispatch }, song) {
      server.post('/api/songs', song)
        .then(song => {
          console.log(song)
          dispatch('getSongs')
        })
    }

  }

})
