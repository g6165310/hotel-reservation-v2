import { createRouter, createWebHistory } from 'vue-router';
import Layout from '../views/LayoutView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../views/HomeView.vue'),
        },
        {
          path: '/:pathMatch(.*)*', name: '404', component: () => import('../views/NotFound.vue'),
        },
      ],
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});

export default router;
