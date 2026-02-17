import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ChatMsgAnimation from '../views/ChatMsgAnimation.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/chat-message-animation',
    name: 'ChatMsgAnimation',
    component: ChatMsgAnimation
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
