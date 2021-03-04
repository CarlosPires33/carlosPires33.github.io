import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Homepage from './components/Homepage'
import ListComments from './components/ListComments'
import EditComments from './components/EditComments'

const routes = [
  { path:'/', name:'homepage', component: Homepage },
  { path:'/comments', name:'list', component: ListComments },
  { path:'/comments/:id', name:'edit', component: EditComments },
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

router.afterEach(to => {
  if (to.name === "homepage") {
    document.querySelector("body").classList.add("background-page");
  } else {
    document.querySelector("body").classList.remove("background-page");
  }
});

export default router