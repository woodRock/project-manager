<template>
  <nav>
    <div class="nav-wrapper purple">
      <ul>
        <li>
          <router-link to="/" class="">Portfolio-dev</router-link>
        </li>
        <li>
          <router-link to="/projects" class="">Projects</router-link>
        </li>
        <li>
          <router-link to="/blog" class="">Blog</router-link>
        </li>
        <li class="secondary-content">
          <a @click="login">
            <i class="material-icons">person</i>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import auth from "../auth";

export default {
  name: "nav-bar",
  props: {
    type: String
  },
  methods: {
    login() {
      auth.login();
    }
  }
};
</script>
