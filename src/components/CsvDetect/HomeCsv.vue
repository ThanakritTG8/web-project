<template>
  <div id="home-csv">
  <input type="checkbox" id="check" />
    <nav class="navbar navbar-expand-lg fixed-top">
      <label for="check">
        <i class="fas fa-bars" id="sidebar_btn"></i>
      </label>
      <router-link to="/">
        <nav-item class="nav-item" id="home">Detect Word Sense</nav-item>
      </router-link>
    </nav>
    <div class="sidebar">
      <a @click="home">
        <i class="fas fa-desktop"></i>
        <span>Dashboard</span>
      </a>
      <a @click="comment">
        <i class="fas fa-cogs"></i>
        <span>Components</span>
      </a>
      <a @click="common">
        <i class="fas fa-table"></i>
        <span>Tables</span>
      </a>
    </div>
    <section>
      <csv-body v-if="enter" />
      <comment-page v-if="to" />
      <common-word-page v-if="direct" />
    </section>
  </div>
</template>

<script>
import CsvBody from "@/components/CsvDetect/CsvBody";
import CommonWordPage from "@/components/CsvDetect/CommonWordPage";
import CommentPage from "@/components/CsvDetect/CommentPage";
import NavigationBar from "@/components/NavigationBar";

export default {
  name: "home-csv",
  components: {
    CsvBody,
    CommonWordPage,
    CommentPage,
    NavigationBar
  },
  data() {
    return {
      enter: true,
      to: false,
      direct: false
    };
  },
  methods: {
    home() {
      this.enter = true;
      this.to = false;
      this.direct = false;
    },
    comment() {
      this.enter = false;
      this.to = true;
      this.direct = false;
    },
    common() {
      this.enter = false;
      this.to = false;
      this.direct = true;
    }
  }
};
</script>

<style scoped>
nav {
  padding: 20px;
}

#home {
  color: white;
  padding: 0.3rem;
  font-size: 25px;
  font-family: "Lato", Arial, sans-serif;
  font-weight: 900;
  font-family: "Karla", sans-serif;
}

nav {
  background: #17215a;
}

section {
  padding: 100px 45px;
  margin-left: 230px;
  background-position: center;
  background-size: cover;
  height: 100vh;
  transition: 0.5s;
}
#check:checked ~ section {
  margin-left: 60px;
}
.sidebar {
  background: #2f323a;
  margin-top: 70px;
  padding-top: 50px;
  position: fixed;
  left: 0;
  width: 250px;
  height: 100%;
  transition: 0.5s;
  transition-property: left;
}

.sidebar .profile_image {
  width: 100px;
  height: 100px;
  border-radius: 100px;
  margin-bottom: 10px;
}

.sidebar h4 {
  color: #ccc;
  margin-top: 0;
  margin-bottom: 20px;
}

.sidebar a {
  color: #fff;
  display: block;
  width: 100%;
  line-height: 60px;
  text-decoration: none;
  padding-left: 40px;
  box-sizing: border-box;
  transition: 0.5s;
  transition-property: background;
}

.sidebar a:hover {
  background: #15cca4;
}

.sidebar i {
  padding-right: 10px;
}

label #sidebar_btn{
  z-index: 1;
  color: #fff;
  position: fixed;
  cursor: pointer;
  left: 300px;
  font-size: 20px;
  margin: -7px 0;
  transition: 0.5s;
  transition-property: color;
}

label #sidebar_btn:hover {
  color: #19d3a4;
}

#check:checked ~ .sidebar {
  left: -190px;
}

#check:checked ~ .sidebar a span {
  display: none;
}

#check:checked ~ .sidebar a {
  font-size: 20px;
  margin-left: 170px;
  width: 80px;
}
#check {
  display: none;
}
</style>