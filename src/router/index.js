import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/room/:id',
      name: 'room',
      component: () => import('../views/RoomView.vue'),

    },
    {
      path: '/:pathMatch(.*)*', name: '404', component: () => import('../views/NotFound.vue'),
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
