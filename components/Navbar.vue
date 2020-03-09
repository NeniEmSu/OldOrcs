<template>
  <nav class="navbar is-dark container">
    <div class="navbar-brand">
      <a
        class="navbar-item"
        href="/"
      >
        <img
          src="~/assets/img/oldorcsLogo.svg"
          alt="Andreas K. Hahn Logo"
        >
      </a>
      <div
        id="navbarBurger"
        class="navbar-burger burger"
        @click="toggleNavbar"
      >
        <span />
        <span />
        <span />
      </div>
    </div>

    <div
      id="navbarLinks"
      class="navbar-menu"
    >
      <!-- mobile nav -->
      <div class="navbar-end is-hidden-desktop">
        <a
          class="navbar-item blue2"
          data-scroll-to="clients"
          @click="scrollTo"
        >
          Partners
        </a>
        <a
          class="navbar-item blue3"
          data-scroll-to="expertise"
          @click="scrollTo"
        >
          Expertise
        </a>
        <a
          class="navbar-item blue4"
          data-scroll-to="contact"
          @click="scrollTo"
        >
          Contact
        </a>
      </div>
      <!-- desktop nav -->
      <div class="navbar-end is-hidden-touch">
        <a
          class="navbar-item"
          data-scroll-to="clients"
          @click="scrollTo"
        >
          Partners
        </a>
        <a
          class="navbar-item"
          data-scroll-to="expertise"
          @click="scrollTo"
        >
          Expertise
        </a>
        <a
          class="navbar-item"
          data-scroll-to="contact"
          @click="scrollTo"
        >
          Contact
        </a>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'Navbar',
  methods: {
    toggleNavbar () {
      document.getElementById('navbarLinks').classList.toggle('is-active')
      document.getElementById('navbarBurger').classList.toggle('is-active')
    },
    scrollTo (e) {
      const scrollTo = e.target.dataset.scrollTo
      const target = document.getElementById(scrollTo)

      if (target) {
        // target.scrollIntoView(true);

        this.$scrollTo(target, 750, { easing: 'ease' })

        this.toggleNavbar()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  box-shadow: initial;
}

// link default color
a {
  color: #daa520;
}

// link hover to primary color
a.navbar-item:hover {
  transition: color 0.25s;
  color: #daa520 !important;
  background-color: initial !important;
}

// fix navbar overlay reflows content
#navbarLinks.is-active {
  @media screen and (max-width: 1023px) {
    padding: 0;

    .navbar-end.is-hidden-desktop {
      z-index: 1;
      position: absolute;
      width: 100vw;

      a.navbar-item {
        height: 30vh; // 3 items so 30% height
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        box-shadow: inset 0px -6px 20px 0px rgba(0, 0, 0, 0.2);

        font-size: 3.5vh;
        &:hover {
          background-color: #000000 !important;
        }
      }
    }
  }
}
</style>
