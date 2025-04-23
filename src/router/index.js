import { createRouter, createWebHistory } from 'vue-router'
// Import your page components
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Services from '../views/Services.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
<<<<<<< HEAD
import Admin from '../views/Admin.vue'
=======
import Admin from '../views/admin.vue'
>>>>>>> 1a75804fbc1771d85dc60c78fe8170e7d677f3df
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/products', name: 'Products', component: Products },
  { path: '/services', name: 'Services', component: Services },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
<<<<<<< HEAD
  { path: '/admin', name: 'Admin', component: Admin }
=======
  { path: '/admin', name: 'Admin', component: Admin },
>>>>>>> 1a75804fbc1771d85dc60c78fe8170e7d677f3df
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router