import { createRouter, createWebHistory } from 'vue-router'

import GuideComponent from '../components/GuideComponent.vue'
import DepartmentStructureComponent from '../components/DepartmentStructureComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Guide',
      path: '/',
      component: GuideComponent
    },
    {
      name: 'Biography',
      path: '/departments',
      component: DepartmentStructureComponent
    }
  ]
})

export default router
