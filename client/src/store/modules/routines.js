import axios from 'axios';

const state = {
  routines: [],
  routine: {}, 
  errors: []
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
  async setRoutine( { commit }, routine) {
    const response = await axios.post("http://localhost:3000/api/routines/", routine )
    console.log(response)
    commit('postRoutine', response.data)
  },
  async updateRoutine( {commit}, routine) {
    const response = await axios.patch("http://localhost:3000/api/routines/" + routine.id, routine ) 
    commit('patchRoutine', response.data)
  },
  async destroyRoutine( {commit}, routine ) {
    const response = await axios.delete("http://localhost:3000/api/routines/" + routine._id)
    try {
      if (response.data.ok) {
        let deletedIndex = null
        for (let index in state.routines ) {
          if (state.routines[index]._id === routine._id) {
            deletedIndex = index
            break
          }
        }
        if (deletedIndex !== null) {
          commit('deleteRoutine', deletedIndex)
        }
      } else {
        // send error message
      }
    } catch(err) {
      console.log(err)
    }
  }  
};

const mutations = {
  setRoutines: (state, routines) => (state.routines = routines),
  setSingleRoutine: (state, routine) => (state.routine = routine),
  postRoutine: (state, routine) => state.routines.unshift(routine),
  patchRoutine: (state, routine) => (state.routine = routine),
  deleteRoutine: (state, index) => state.routines.splice(index, 1)
};

export default {
  state,
  getters,
  actions,
  mutations
};