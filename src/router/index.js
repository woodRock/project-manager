import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import ViewProject from '@/components/ViewProject'
import NewProject from '@/components/NewProject'
import EditProject from '@/components/EditProject'
import Blog from '@/components/blog/Blog'
import ViewBlog from '@/components/blog/ViewBlog'
import NewBlog from '@/components/blog/NewBlog'
import EditBlog from '@/components/blog/EditBlog'

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
    },{
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/view-blog/:blog_id',
      name: 'view-blog',
      component: ViewBlog
    },
    {
      path: '/new-blog',
      name: 'new-blog',
      component: NewBlog
    },
    {
      path: '/edit-blog/:blog_id',
      name: 'edit-blog',
      component: EditBlog
    },
  ]
})
