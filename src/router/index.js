import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import ViewProject from '@/components/ViewProject'
import NewProject from '@/components/NewProject'
import EditProject from '@/components/EditProject'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/view/:project_id',
      name: 'view-project',
      component: ViewProject
    },
    {
      path: '/edit/:project_id',
      name: 'edit-project',
      component: EditProject
    },{
      path: '/new',
      name: 'new-project',
      component: NewProject
    }
  ]
})
