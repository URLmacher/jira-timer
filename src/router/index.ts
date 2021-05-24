import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Tasks from '../views/Tasks.vue';
import Logs from '../views/Logs.vue';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Tasks',
    component: Tasks
  },
  {
    path: '/',
    name: 'Logs',
    component: Logs
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
