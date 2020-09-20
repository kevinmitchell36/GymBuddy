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
    const response = await axios.post("http://localhost:3000/api/routines/", {
      name: routine.name,
      wtype: routine.wtype,
      categories: routine.categories,
      sets: routine.sets,
      reps: routine.reps,
      time: routine.time,
      notes: routine.notes,
      userId: routine.userId
    });
    console.group(response.data);
    commit('postRoutine', response.data)
  }
};

const mutations = {
  setRoutines: (state, routines) => (state.routines = routines),
  setSingleRoutine: (state, routine) => (state.routine = routine),
  postRoutine: (state, routine) => (state.routine = routine)
};

export default {
  state,
  getters,
  actions,
  mutations
};