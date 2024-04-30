import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import confidentialityView from "@/views/Pages/ConfidentialityView.vue";
import MentionsLegales from "@/views/Pages/MentionsLegales.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

    //page not found
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import(/* webpackChunkName: "not-found" */ '../views/PageNotFound.vue')
    },
    {
      path: '/mentions-legales',
        name: 'mentions-legales',
        component: MentionsLegales
    },
    {
        path:'/politique-de-confidentialite',
        name:'politique-de-confidentialite',
        component: confidentialityView
    }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// si je click  sur la nave avec un # cela scroll vers la section correspondante
router.beforeEach((to, from, next) => {
    if (to.hash) {
        let el = document.getElementById(to.hash.slice(1))
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
            return
        }
    }
    next()
})

export default router
