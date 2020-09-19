import axios from 'axios';

const state = {
  routines: [],
  routine: {}, 
  accessToken: "",
  id: "",
  name: '',
  wtype: '',
  categories: [],
  sets: null,
  reps: null,
  time: null,
  notes: '',
  userId: ''  
};

const getters = {
  allRoutines: (state) => state.routines,
  singleRoutine: (state) => state.routine
};

const setters = {
  addRoutine: (state) => state.routine
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
  async writeRoutine( { commit }, name, wtype, categories, sets, reps, time, notes, userId) {
    let response = await axios.post("http://localhost:3000/api/routines/", {
      name,
      wtype,
      categories,
      sets,
      reps,
      time,
      notes,
      userId
    });
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
  setters,
  actions,
  mutations
};