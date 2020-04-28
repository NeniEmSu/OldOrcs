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
    TheFooter
  },
  mounted() {
    gsap
      .timeline({ paused: true })
      .fromTo(
        '#hero',
        animationSpeed,
        { y: '120%', opacity: 0, ease: animationTimingIn },
        { y: '0%', opacity: 1, ease: animationTimingOut }
      )
      .fromTo(
        '#myHeader',
        animationSpeed,
        { y: '-100%', opacity: 0, ease: animationTimingIn },
        { y: '0%', opacity: 1, ease: animationTimingOut },
        '-=0.25'
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
      .fromTo(
        '.img-container',
        animationSpeed,
        { y: -50, opacity: 0, ease: animationTimingIn },
        { y: 0, opacity: 1, ease: animationTimingOut },
        '-=1'
      )
      .play()
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  border: none;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  padding: 0;
  margin: 0;
  width: 100vw;
  overflow-x: hidden;
}

body {
  font-family: 'Montserrat', sans-serif;

  overflow-x: hidden;
  width: 100vw;
}

::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(128, 128, 128);
  border-radius: 2.5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(0, 133, 163);
  border-radius: 2.5px;
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
