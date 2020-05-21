import axios from 'axios';



const state = {
  routines: []
    
};

const getters = {
  allRoutines: (state) => state.routines
};

const actions = {
  async fetchRoutines( {commit}, accessToken ) {
    const response = await axios.get("http://localhost:3000/api/routines/" , {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    commit('setRoutines', response.data);
  }
};

const mutations = {
  setRoutines: (state, routines) => (state.routines = routines)
};

export default {
  state,
  getters,
  actions,
  mutations
};