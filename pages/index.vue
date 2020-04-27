<template>
  <div>
    <TheHero />
    <main class="container">
      <div id="bg" />
      <TheServices />
      <TheWorks />
    </main>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import TheHero from '~/components/TheHero'
import TheServices from '~/components/TheServices'
import TheWorks from '~/components/TheWorks'
const animationSpeed = 0.75
const animationTimingIn = 'Expo.easeIn'
const animationTimingOut = 'Expo.easeOut'

export default {
  components: {
    TheHero,
    TheServices,
    TheWorks
  },

  data() {
    return {}
  },

  mounted() {
    window.addEventListener('scroll', this.moveBackground)

    gsap
      .timeline({ paused: true })
      .fromTo(
        '.works_block',
        animationSpeed,
        { y: 150, opacity: 1, ease: animationTimingIn },
        { y: 0, opacity: 1, ease: animationTimingOut }
      )
      .staggerFromTo(
        '.block',
        animationSpeed + 2,
        { opacity: 0, y: 10, ease: animationTimingIn },
        { opacity: 1, y: 0, ease: animationTimingOut },
        0.05
      )
      .play()
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.moveBackground)
  },

  methods: {
    moveBackground(e) {
      const bgPattern = document.getElementById('bg')

      bgPattern.style.backgroundPosition = 1020 - window.pageYOffset + 'px'
    },

    showModal() {
      gsap
        .timeline({ paused: true })
        .fromTo(
          '#card',
          animationSpeed - 0.5,
          {
            display: 'none',
            x: 0,
            visibility: 'hidden',
            opacity: 0,
            ease: animationTimingIn
          },
          {
            display: 'flex',
            x: 100,
            visibility: 'visible',
            opacity: 1,
            ease: animationTimingOut
          }
        )
        .fromTo(
          '.modalImg',
          animationSpeed,
          { opacity: 0, scaleY: 0, ease: animationTimingIn },
          { opacity: 1, scaleY: 1, ease: animationTimingOut }
        )
        .staggerFromTo(
          '#modal-content',
          animationSpeed + 2,
          { opacity: 0, y: 10, ease: animationTimingIn },
          { opacity: 1, y: 0, ease: animationTimingOut },
          0.25
        )
        .play()
    },

    hideModal() {
      gsap
        .timeline({ paused: true })
        .staggerFromTo(
          '#modal-content',
          animationSpeed,
          { opacity: 1, y: 0, ease: animationTimingOut },
          { opacity: 0, y: 10, ease: animationTimingIn }
        )
        .fromTo(
          '.modalImg',
          animationSpeed,
          { opacity: 1, scaleY: 1, ease: animationTimingOut },
          { opacity: 0, scaleY: 0, ease: animationTimingIn },
          '+=0.25'
        )
        .fromTo(
          '#card',
          animationSpeed,
          {
            display: 'flex',
            visibility: 'visible',
            opacity: 1,
            ease: animationTimingOut
          },
          {
            display: 'none',
            visibility: 'hidden',
            opacity: 0,
            ease: animationTimingIn
          }
        )
        .play()
    }
  }
}
</script>

<style lang="scss" scoped></style>
