<template>
  <div>
    <b-navbar>
        <b-navbar-nav>
          <b-nav-item :to="{name: 'homepage'}">MEVN</b-nav-item>
          <b-nav-item :to="{name: 'list'}">ALL COMMENTS</b-nav-item>
        </b-navbar-nav>
    </b-navbar>
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
.navbar-light .navbar-nav .nav-link {
  color: #456d86;
  font-weight: 900;
}
</style>
