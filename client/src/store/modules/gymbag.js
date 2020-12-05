import axios from 'axios';

const url = "http://localhost:3000/api/gymbag/"

const state = {
  gymbag: []
};

const getters = {
  wholeBag: (state) => state.gymbag
}

const actions = {
  async getGymBag( {commit} ) {
    const response = await axios.get(url);
    console.log(response)
    commit('mountGymBag', response.data)
  },

  async createGymBagItem( {commit}, routine ) {
    console.log(url)
    console.log(routine)
    try {
      const response = await axios.post(url, routine)
      commit('postGymBagItem', response.data)
    } catch(err) {
      console.log(err)
    }
  },
  async destroyGymBagItem( {commit}, id) {
    let deletedIndex = null
    try { 
      await axios.delete(`${url}${id}`)
      for (let index in state.gymbag) {
        if(id === state.gymbag[index]._id) {
          deletedIndex = index
          break
        }
      }
    } catch(err) {
      console.log(err)
    }
    if (deletedIndex === null) {
      // send message
    } else {
    commit('deleteGymBagItem', deletedIndex)
    }
  }
}

const mutations = {
  mountGymBag: (state, gymbag) => (state.gymbag = gymbag),
  postGymBagItem: (state, gymbag) => state.gymbag.unshift(gymbag),
  deleteGymBagItem: (state, index) => state.gymbag.splice(index, 1)
} 


export default {
  state,
  getters,
  actions,
  mutations
}