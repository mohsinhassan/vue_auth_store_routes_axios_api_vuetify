import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginComponent from "../components/login.vue"
import SecureComponent from "../components/secure.vue"

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: {
                name: "login"
            }
        },
        {
            path: "/login",
            name: "login",
            component: LoginComponent
        },
        {
            path: "/secure",
            name: "secure",
            component: SecureComponent
        }
    ]
})