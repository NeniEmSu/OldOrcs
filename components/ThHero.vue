<template>
  <div id="hero">
    <div class="text-inner">
      <span class="start text-inner">
        Ми
      </span>

      <h1 class="text-inner">
        OLDORCS
      </h1>

      <span class="end text-inner">
        І ми створюємо
      </span>
    </div>
    <a
      class="scrolldown_container"
      data-scroll-to="services"
      @click="scrollTo"
    >
      <div
        class="scroll text-inner"
        data-scroll-to="services"
        @click="scrollTo"
      >
        Горни вниз
      </div>

      <div
        class="scrolldown text-inner"
        data-scroll-to="services"
        @click="scrollTo"
      >
        <div class="line" />
      </div>
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    scrollTo (e) {
      const scrollTo = e.target.dataset.scrollTo
      const target = document.getElementById(scrollTo)

      if (target) {
        target.scrollIntoView(true)

        this.$scrollTo(target, 300, { easing: 'ease-in-out' })

        // this.toggleNavbar()
      }
    }
  }

}
</script>

<style lang="scss" scoped>
a,
.scrolldown_container,
.scroll {
  cursor: pointer;
}
</style>
