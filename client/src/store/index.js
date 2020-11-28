import Vuex from 'vuex';
import Vue from 'vue';
import routines from './modules/routines';
import gymbag from './modules/gymbag'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    routines,
    gymbag
  }
});