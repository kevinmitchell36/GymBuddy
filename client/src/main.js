import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VModal from 'vue-js-modal'
import VueCarousel from 'vue-carousel'
// import VueH5Swiper from 'vue-h5-swiper'


// Import the Auth0 configuration
import { domain, clientId, audience } from "../auth_config.json";

// Import the plugin here
import { Auth0Plugin } from "./auth";

// Install the authentication plugin here
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  audience,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
      );
    }
  });
  
  Vue.use(VModal, {
    dymanicDefaults: {
      height: 'auto',
      draggable: true
    }  
  })
  

Vue.use(VueCarousel)

// Vue.use(VueH5Swiper)  

  
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')