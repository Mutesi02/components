// // import { createApp } from 'vue'
// // // import './style.css'
// // import 'bootstrap/dist/css/bootstrap.css'
// // import 'bootstrap/dist/js/bootstrap.js'
// // import App from './App.vue'
// // import FoodItems from './components/FoodItems.vue'
// // import AnimalCollection from './components/AnimalCollection.vue'


// // const app = createApp(App)
// // app.component("food-items", FoodItems);
// // app.component("animal-collection", AnimalCollection)


// // createApp(App).mount('#app')

// import { createApp } from 'vue'
// import { createRouter, createWebHistory } from 'vue-router'

// import App from './App.vue'
// import FoodItems from './components/FoodItems.vue'
// import AnimalCollection from './components/AnimalCollection.vue'


// const router = createRouter({
//     history: createWebHistory(),
//     routes: [
//         { path: '/animals', component: AnimalCollection },
//         { path: '/food', component: FoodItems },
//     ]
// });

// const app = createApp(App)

// app.use(router);

// app.mount('#app')

import { createApp } from 'vue'
// import './style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import App from './App.vue'
// 👇 Import your router
import router from './router'
const app = createApp(App)
// 👇 Tell Vue to use the router
app.use(router)
app.mount('#app')