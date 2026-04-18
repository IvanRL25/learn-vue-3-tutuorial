import About from '@/views/About.vue'
import BlogPosts from '@/views/BlogPosts.vue'
import Home from '@/views/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

// create router instance
const router = createRouter({
  //create the history over the page and user interaction
  history: createWebHistory(),
  //define routes -> each maps to a component
  routes: [
    { path: '/', name:'home', component: Home },
    { path: '/blogPosts', name:'blogPosts', component: BlogPosts },
    { path: '/about', name: 'about', component: About}
  ]
})

//export router
export default router