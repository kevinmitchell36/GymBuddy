import axios from 'axios';

const url = "http://localhost:3000/api/gymbag/"

const state = {
  gymbag: [],
  mockGymBag: [
    {
      id: 1,
      name: "Squats",
      sets: 3,
      reps: 15
    },
    {
      id: 2,
      name: "Press",
      sets: 3,
      reps: 10
    },
    {
      id: 3,
      name: "Rows",
      sets: 3,
      reps: 12
    }
  ]
};

const getters = {
  wholeBag: (state) => state.gymbag,
  getMockGymBag: (state) => state.mockGymBag
}

const actions = {
  async getGymBag( {commit} ) {
    const response = await axios.get(url);
    commit('mountGymBag', response.data)
  },

  async createGymBagItem( {commit}, routine ) {
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
  },

  async populateSets( {commit}, gymBagItem) {
    try {
      let sets = []
      for (let i = 0; i < gymBagItem.sets - 1; i++) {
        const response = await axios.post(url + "?set=true", gymBagItem)
        console.log(response.data)
        sets.push(response.data)
      }
      commit('multipleSets', sets)
    } catch(err) {
      console.log(err)
    }
  }
}

const mutations = {
  mountGymBag: (state, gymbag) => (state.gymbag = gymbag),
  postGymBagItem: (state, gymbag) => state.gymbag.unshift(gymbag),
  deleteGymBagItem: (state, index) => state.gymbag.splice(index, 1),
  multipleSets: (state, gymBagItem) => state.gymbag = state.gymbag.concat(...gymBagItem)
} 


export default {
  state,
  getters,
  actions,
  mutations
}