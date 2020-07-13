<template>
  <div id="home-csv">
    <input type="checkbox" id="check" />
    <nav class="navbar navbar-expand-lg fixed-top">
      <label for="check">
        <i class="fas fa-bars" id="sidebar_btn"></i>
      </label>
      <a href="/">
        <nav-item class="nav-item" id="home">Detect Word Sense</nav-item>
      </a>
    </nav>

    <div class="sidebar">
      <a id class="btn text-left" @click="home" role="button">
        <i class="fas fa-desktop"></i>
        <span>Dashboard</span>
      </a>
      <a id class="btn text-left" @click="comment" role="button">
        <i class="fas fa-table"></i>
        <span>Comment</span>
      </a>
      <a id class="btn text-left" @click="common" role="button">
        <i class="fas fa-comments"></i>
        <span>Common Word</span>
      </a>
    </div>
    <section>
      <csv-body v-if="homepage" />
      <comment-page v-if="commentpage" />
      <common-word-page v-if="commonword" />
    </section>
  </div>
</template>

<script>
import CsvBody from "@/components/CsvDetect/CsvBody";
import CommonWordPage from "@/components/CsvDetect/CommonWordPage";
import CommentPage from "@/components/CsvDetect/CommentPage";

export default {
  name: "home-csv",
  components: {
    CsvBody,
    CommonWordPage,
    CommentPage
  },
  data() {
    return {
      homepage: true,
      commentpage: false,
      commonword: false
    };
  },
  methods: {
    home() {
      this.homepage = true;
      this.commentpage = false;
      this.commonword = false;
    },
    comment() {
      this.homepage = false;
      this.commentpage = true;
      this.commonword = false;
    },
    common() {
      this.homepage = false;
      this.commentpage = false;
      this.commonword = true;
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

#home:hover {
  color: aqua;
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

.sidebar a {
  color: #fff;
  width: 100%;
  line-height: 60px;
  padding-left: 30px;
}

.sidebar a:hover {
  background: #15cca4;
}


.sidebar i {
  padding-right: 10px;
}

label #sidebar_btn {
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
  margin-left: 177px;
  width: 80px;
}

#check {
  display: none;
}
</style>