import Vue from "vue";
import Router from "vue-router";
import Project from "@/components/projects/Project";
import ViewProject from "@/components/projects/ViewProject";
import NewProject from "@/components/projects/NewProject";
import EditProject from "@/components/projects/EditProject";
import Blog from "@/components/blog/Blog";
import ViewBlog from "@/components/blog/ViewBlog";
import NewBlog from "@/components/blog/NewBlog";
import EditBlog from "@/components/blog/EditBlog";
import Home from "@/components/Home";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/projects",
      name: "project",
      component: Project
    },
    {
      path: "/project/view/:project_id",
      name: "view-project",
      component: ViewProject
    },
    {
      path: "/project/edit/:project_id",
      name: "edit-project",
      component: EditProject
    },
    {
      path: "/projects/new",
      name: "new-project",
      component: NewProject
    },
    {
      path: "/blog",
      name: "blog",
      component: Blog
    },
    {
      path: "/blog/view/:blog_id",
      name: "view-blog",
      component: ViewBlog
    },
    {
      path: "/blog/new",
      name: "new-blog",
      component: NewBlog
    },
    {
      path: "/blog/edit/:blog_id",
      name: "edit-blog",
      component: EditBlog
    }
  ]
});
