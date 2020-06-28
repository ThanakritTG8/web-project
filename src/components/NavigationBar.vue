<template>
  <div id="navigation-bar">

    <nav class="navbar navbar-expand-lg fixed-top bg-primary">
      <router-link to="/">
        <nav-item class="nav-item" id="home">Home</nav-item>
      </router-link>  
    </nav>

  </div>
</template>

<script>
export default {
  name: 'NavigationBar'
    
};
</script>

<style scoped>

  nav {
    padding: 20px;
  }

  #home {
    color:white;
    padding: .3rem;
    font-size: 18px;
    font-family: "Lato", Arial, sans-serif;
  }

</style>