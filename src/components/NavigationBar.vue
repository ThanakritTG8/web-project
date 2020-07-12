<template>
  <div id="navigation-bar">
    <nav class="navbar navbar-expand-lg fixed-top">
      <router-link to="/">
        <nav-item class="nav-item" id="home">Detect Word Sense</nav-item>
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
    font-size: 25px;
    font-family: "Lato", Arial, sans-serif;
    font-weight: 900;
    font-family: 'Karla', sans-serif;
    
  }
  
  nav{
    background: #17215a;
  }

</style>