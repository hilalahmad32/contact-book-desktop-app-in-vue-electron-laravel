import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import CreateContact from '../views/CreateContact.vue'
import UpdateContact from '../views/UpdateContact.vue'
const routes = [
  {
    path: "/",
    name: 'home',
    component: Home
  },
  {
    path: "/login",
    name: 'loginComp',
    component: Login
  },
  {
    path: "/signup",
    name: 'signUpComp',
    component: SignUp
  },
  {
    path: "/create",
    name: 'createComp',
    component: CreateContact
  },
  {
    path: "/update",
    name: 'updateComp',
    component: UpdateContact
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
