//you need to import both vue and vuex, as both are used here
import Vue from "vue";
import Vuex from "vuex";
//then you use Vuex
Vue.use(Vuex);
 
export default new Vuex.Store({
    state: {
        user: {},
        authenticated : false
      },
      getters: {
        getuser: state => {
          return state.user
        },
        getauthenticated: state => {
          return state.authenticated
        }
      },
      mutations: {
        storeuser(state,data){
            state.user = data;
        },
        authenticated(state,data){
          state.authenticated = data.isauthenticated;
          if(data[0].token != undefined){
            state.token = data[0].token;
          }
          state.authenticated = data[0].isauthenticated;          
        }
      },
      actions: {
        saveuser({ commit }, data) {
          commit('storeuser', data);
        },
        authenticated({ commit }, data) {
          commit('authenticated', data);
        },
      },
});