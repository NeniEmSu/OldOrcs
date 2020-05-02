<template>
  <div>
    <TheHeader />
    <nuxt />
    <TheFooter />
  </div>
</template>

<script>
import { gsap } from 'gsap'
import TheHeader from '~/components/TheHeader'
import TheFooter from '~/components/TheFooter'
const animationSpeed = 0.75
const animationTimingIn = 'Expo.easeIn'
const animationTimingOut = 'Expo.easeOut'

export default {
  components: {
    TheHeader,
    TheFooter,
  },
  mounted() {
    gsap
      .timeline({ paused: true })
      .fromTo(
        '#myHeader',
        animationSpeed,
        { y: '-100%', opacity: 0, ease: animationTimingIn },
        { y: '0%', opacity: 1, ease: animationTimingOut },
        '-=0.25'
      )
      .fromTo(
        '#hero',
        animationSpeed,
        { y: '120%', opacity: 0, ease: animationTimingIn },
        { y: '0%', opacity: 1, ease: animationTimingOut }
      )
      .fromTo(
        '.text-inner',
        animationSpeed,
        { y: '120%', opacity: 0, ease: animationTimingIn },
        { y: '0%', opacity: 1, ease: animationTimingOut },
        '-=0.15'
      )
      .fromTo(
        '.start',
        animationSpeed,
        { y: '50%', opacity: 0, ease: animationTimingIn },
        { y: '0%', opacity: 1, ease: animationTimingOut },
        '-=0.05'
      )
      .fromTo(
        '.end',
        animationSpeed,
        { y: '-50%', opacity: 0, ease: animationTimingIn },
        { y: '0%', opacity: 1, ease: animationTimingOut },
        '-=0.05'
      )
      .play()
  },
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  border: none;
  box-sizing: border-box;
}

html,
body {
  font-family: 'Montserrat', sans-serif;
  scroll-behavior: smooth;
  padding: 0;
  margin: 0;
  width: 100vw;

  overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(128, 128, 128);
  border-radius: 2.5px;
}

::-webkit-scrollbar-thumb {
  background: rgb(0, 133, 163);
  border-radius: 2.5px;
}

@font-face {
  font-family: 'Gobold CYR-LAT';
  font-style: normal;
  font-weight: normal;
  font-display: swap;
  src: url('~assets/fonts/GoboldCYR-LAT.otf') format('opentype');
}

h2 {
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 59px;

  color: #dc6d48;

  margin-bottom: 50px;

  @media (max-width: 500px) {
    font-size: 24px;
    line-height: 29px;

    margin-bottom: 25px;
  }
}

h3 {
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;

  @media (max-width: 500px) {
    font-size: 16px;
    line-height: 20px;
  }
}

h4 {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

  @media (max-width: 500px) {
    font-size: 14px;
    line-height: 17px;
  }
}

h5 {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  @media (max-width: 500px) {
    font-size: 12px;
    line-height: 120%;
  }
}

p {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;

  @media (max-width: 500px) {
    font-size: 12px;
    line-height: 120%;
  }
}

main {
  position: relative;
}

#bg {
  position: fixed;
  top: 1%;
  left: 0%;
  right: 0;
  width: 100%;
  height: 100%;
  background-image: url(~assets/img/dynamic-bg.svg);
  background-repeat: no-repeat;
  background-size: 141vw;
  background-position: 20px, 20px;
  z-index: -1;
}

.container,
.modal-xl {
  @media (max-width: 1520px) and (min-width: 1441px) {
    max-width: 1410px;
  }

  @media (max-width: 1440px) and (min-width: 1201px) {
    max-width: 1200px;
  }

  @media (max-width: 1200px) and (min-width: 961px) {
    max-width: 960px;
  }
}

.before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 1s ease-out;
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}
</style>
