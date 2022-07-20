import { createRouter,createWebHashHistory } from "vue-router";
import Layout from '../pages/layout/index.vue'
import Login from '../pages/login/index.vue'
const router =  createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            component:Layout
        },
        {
            path:'/login',
            component:Login
        }
    ]
})
export default router