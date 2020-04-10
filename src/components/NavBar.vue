<template>
  <nav>
    <div class="nav-wrapper purple">
      <div class="container">
        <router-link to="/" class="brand-logo">Project Manager</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'nav-bar',
    props: {
      type: String
    }
  }
</script>
