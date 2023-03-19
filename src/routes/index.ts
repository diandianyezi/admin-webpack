import { createRouter, createWebHistory } from 'vue-router';
import Index from '@/pages/index.vue';
import React from '@/pages/react.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/react',
      component: React
    }
  ]
})
export default router