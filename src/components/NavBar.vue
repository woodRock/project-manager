<template>
  <nav>
    <div class="nav-wrapper purple">
      <ul>
        <li><router-link to="/" class="brand-logo">Projects</router-link></li>
        <li><router-link :to="{ name: 'blog', params: {} }" class="brand-logo">Blog</router-link></li>
      </ul>
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
