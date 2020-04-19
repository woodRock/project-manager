<template>
  <nav>
    <div class="nav-wrapper purple">
      <div class="container">
        <router-link to="/" class="brand-logo">Project Manager</router-link>
      </div>
      <div class="secondary-content">
        <button @click="login"><i class="material-icons">person</i></button>
      </div>
    </div>
  </nav>
</template>

<script>
  import auth from './auth'
  export default {
    name: 'nav-bar',
    props: {
      type: String
    },
    methods: {
      login() {
        auth.login()
      }
    }
  }
</script>
