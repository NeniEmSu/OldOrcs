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
  mounted () {
    // gsap.from(split.chars, { duration: 0.1, visibility: 'hidden', stagger: 0.1 })
    gsap.timeline({ paused: true })
      .fromTo(
        '#hero',
        animationSpeed,
        { y: 1500, opacity: 0, ease: animationTimingIn },
        { y: 0, opacity: 1, ease: animationTimingOut }
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
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  padding: 0;
  margin: 0;
}

body {
  font-family: "Montserrat", sans-serif;

  overflow-x: hidden;
}
</style>
