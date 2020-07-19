import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from 'axios'
import store from "./store/store";
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
//import vuetify from "./plugins/vuetify";


Vue.use(Vuetify)


router.beforeEach((to, from, next) => {
 console.log( "authenticated "  +store.getters.getauthenticated );
  if (to.name !== 'login' && !store.getters.getauthenticated) next({ name: 'login' })
  else next()
})

//Vue.use(Vuex);
Vue.prototype.$http = axios

Vue.config.productionTip = false;


new Vue({
  router,
  vuetify: new Vuetify(),
  store: store,
  render: h => h(App)
}).$mount("#app");

// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   store: store,  
//   template: '<App/>'
// })


