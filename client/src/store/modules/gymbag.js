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
  }
}

const mutations = {
  mountGymBag: (state, gymbag) => (state.gymbag = gymbag),
  postGymBagItem: (state, gymbag) => state.gymbag.unshift(gymbag),
} 


export default {
  state,
  getters,
  actions,
  mutations
}