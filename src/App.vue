<template>
  <div id="app">
    <div>
      <nav id="nav" class="navbar navbar-expand-sm text-white">
        <a class="title navbar-brand" href="/">Detect Word Sense</a>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <b-button v-b-toggle.sidebar-variant class="btn">
              <i class="fas fa-bars" id="sidebar_btn"></i>
            </b-button>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      <b-sidebar id="sidebar-variant" title bg-variant="dark" text-variant="light" shadow>
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
}
#home {
  font-weight: 20px;
  font-size: 35px;
}
.title {
  color: #fff;
  font-size: 30px;
  margin-left: 20px;
}
section {
  margin: 30px;
}
#nav {
  background: rgb(70, 72, 129);
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
.btn {
  background: none;
}
</style>
