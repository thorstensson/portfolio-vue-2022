<template>
  <div id="app">
    <div id="wrapper">
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <nav class="navbar is-spaced is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <router-link class="" to="/">
            <p class="navbar-item name-title epsilon-color " href="#">
              Thomas Thorstensson
            </p>
          </router-link>

          <a role="button" id="navbarBurger" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
            data-target="navbarBasicExample" :class="{ 'is-active': showNav }" @click="showNav = !showNav">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showNav }">
          <div class="navbar-start"></div>

          <div class="navbar-end">
            <router-link to="/" exact class="navbar-item">Home</router-link>
            <router-link to="/about" class="navbar-item">About</router-link>
            <router-link to="/projects" class="navbar-item">Projects</router-link>
            <router-link to="/contact" class="navbar-item">Contact</router-link>
          </div>
        </div>
      </nav>

      <transition mode="out-in" enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut">
        <router-view></router-view>
      </transition>

    </div>

    <footer class="footer" data-aos="fade-in" data-aos-anchor-placement="top-bottom">

      <div class="content has-text-right">

        <span class="icon">
          <a href="https://linkedin.com/in/thomasthorstensson" target="_blank"><i class="fab fa-linkedin fa-lg"></i></a>
        </span>
        <span class="icon">
          <a href="https://dribbble.com/ThomasThorstensson" target="_blank"><i
              class="fas fa-basketball-ball fa-lg"></i></a>
        </span>
        <span class="icon">
          <a href="https://github.com/thorstensson" target="_blank"><i class="fab fa-github fa-lg"></i></a>
        </span>
        <span class="icon">
          <a href="https://thomasthorstensson.photography" target="_blank"><i class="fab fa-wordpress fa-lg"></i></a>
        </span><br />
        <span class="is-size-8">made with Vue</span><br />
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      showNav: false,
    };
  },

  mounted() {
    const links = document.querySelectorAll(".navbar-item");

    var vm = this;
    links.forEach((link) => {
      link.addEventListener("click", function (e) {

        vm.showNav = false;

        console.log("CLOSE")
      });
    });
  },

  created() {
    window.addEventListener("resize", this.listenToResize);
    this.listenToResize();
  },

  methods: {
    listenToResize() {

      let vh = window.innerHeight * 0.01;
      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    },
  },
};


</script>

<style>
@import "app.css";
</style>



