import { createRouter, createWebHistory } from 'vue-router';
import CategoryList from '../../components/CategoryList.vue'; 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: CategoryList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
