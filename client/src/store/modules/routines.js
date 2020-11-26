import axios from 'axios';

const state = {
  routines: [],
  routine: {}, 
  accessToken: "",
  id: "",
};

const getters = {
  allRoutines: (state) => state.routines,
  singleRoutine: (state) => state.routine
};

const actions = {
  async fetchRoutines( {commit}, accessToken ) {
    const response = await axios.get("http://localhost:3000/api/routines/" , {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    commit('setRoutines', response.data);
  },
  async fetchSingleRoutine( {commit}, temp ) {
    const response = await axios.get("http://localhost:3000/api/routines/" + temp.id, {
      headers: {
        Authorization: `Bearer ${temp.accessToken}`
      }
    });
    commit('setSingleRoutine', response.data);
  },
  async setRoutine( { commit }, routine) {
    const response = await axios.post("http://localhost:3000/api/routines/", routine );
    commit('postRoutine', response.data)
  },
  async updateRoutine( {commit}, routine) {
    const response = await axios.patch("http://localhost:3000/api/routines/" + routine.id, routine ) 
    commit('patchRoutine', response.data)
  },
  async destroyRoutine( {commit}, routine ) {
    const response = await axios.delete("http://localhost:3000/api/routines/" + routine.id)
    commit('deleteRoutine', response.data)
  }  
};

const mutations = {
  setRoutines: (state, routines) => (state.routines = routines),
  setSingleRoutine: (state, routine) => (state.routine = routine),
  postRoutine: (state, routine) => state.routines.unshift(routine),
  patchRoutine: (state, routine) => (state.routine = routine)
};

export default {
  state,
  getters,
  actions,
  mutations
};