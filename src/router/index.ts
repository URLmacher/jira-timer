import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Tasks from '../views/Tasks.vue';
import Task from '../views/Task.vue';
import Logs from '../views/Logs.vue';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Tasks',
    component: Tasks
  },
  {
    path: '/task/:id',
    name: 'Task',
    component: Task
  },
  {
    path: '/logs',
    name: 'Logs',
    component: Logs
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
