import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const planA = ()=>import('../components/planA/planA')
const login = ()=>import('../components/Login/login')
const floorplan = ()=>import('../components/FloorPlan/floorplan')
const planB = ()=>import('../components/PlanB/planb')
const submit = ()=>import('../components/Submiting/submiting')

const routes=[
{
    path:'',
    redirect:'/login'
},
{
    path:'/login',
    component:login
},
{
    path:'/plana',
    component:planA,
},
{
    path:'/floorplan',
    component:floorplan
},
{
    path:'/planb',
    component:planB
},
{
    path:'/submit',
    component:submit
}

]

const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass:'active'
})

export default router