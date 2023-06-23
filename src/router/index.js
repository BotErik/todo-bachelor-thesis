import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Info',
      component: () => import('../views/info-page.vue'),
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('../views/main-application.vue'),
      children: [{
        path: 'todo-list',
        component: () => import('../views/todo-list-page.vue'),
      },
      {
        path: 'description',
        component: () => import('../views/description-page.vue'),
      }]
    },
    {
      path: '/anim-home',
      name: 'Animation Home',
      component: () => import('../views/anim-main-application.vue'),
      children: [{
        path: 'anim-todo-list',
        component: () => import('../views/anim-todo-list-page.vue'),
      },
      {
        path: 'anim-description',
        component: () => import('../views/anim-description-page.vue'),
      }]
    }
  ],
});

export default router;