import Vuex from 'vuex';
import Vue from 'vue';
import routines from './modules/routines';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    routines
  }
});