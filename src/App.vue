<template>
  <div id="app">
    <div>
      <b-button v-b-toggle.sidebar-variant>
        <i class="fas fa-bars" id="sidebar_btn"></i>
      </b-button>
      <b-sidebar id="sidebar-variant" title bg-variant="dark" text-variant="light" shadow>
        <p class="title">Detect Word Sense</p>
        <router-link to="/" class="navbar">
          <div class="navlink">
            <i class="fas fa-desktop" id="icon"></i>
            <span>Dashboard</span>
          </div>
        </router-link>
        <router-link to="/comment" class="navbar">
          <div class="navlink">
            <i class="fas fa-table" id="icon"></i>
            <span>Comment</span>
          </div>
        </router-link>
        <router-link to="/common" class="navbar">
          <div class="navlink">
            <i class="fas fa-comments" id="icon"></i>
            <span>CommonWord</span>
          </div>
        </router-link>
      </b-sidebar>
    </div>

    <section>
      <router-view />
    </section>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: "Karla", sans-serif;
  margin: 10px;
}
#home {
  font-weight: 20px;
  font-size: 35px;
}
.title {
  margin-left: 20px;
  font-size: 25px;
  margin-bottom: 50px;
}
section {
  margin: 30px;
}
.navbar {
  width: 100%;
  height: 80px;
  color: #fff;
  font-size: 17px;
}
.navbar:hover {
  background: rgb(88, 255, 163);
}
.navlink {
  margin-left: 20px;
}
#icon {
  margin-right: 20px;
}

</style>
