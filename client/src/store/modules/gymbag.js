import axios from 'axios';

const state = {
  gymbag: []
};

const getters = {
  wholeBag: (state) => state.gymbag
}

const actions = {
  async getGymBag( {commit} ) {
  const response = await axios.get("http://localhost:3000/api/gymbag/");
  console.log(response)
  commit('mountGymBag', response.data)

  }
}

const mutations = {
  mountGymBag: (state, gymbag) => (state.gymbag = gymbag)
} 


export default {
  state,
  getters,
  actions,
  mutations
}