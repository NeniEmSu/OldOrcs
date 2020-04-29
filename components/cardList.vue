<template>
  <section class="card-list-section">
    <i
      class="fas fa-arrow-circle-left fa-2x previous display-xl-none"
      @click="previous()"
    ></i>

    <div class="card-list">
      <div class="ul" :style="listLength">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="li"
          :style="listPosition"
        >
          <!-- <Card :item="card" :active="index == currentIndex" /> -->
          <Card :item="card" />
        </div>
      </div>
    </div>
    <i
      class="fas fa-arrow-circle-right fa-2x next display-xl-none"
      @click="next()"
    ></i>
  </section>
</template>

<script>
import Card from './card'
export default {
  components: {
    Card,
  },
  data: () => {
    return {
      touch: {
        startX: 0,
        endX: 0,
      },
    }
  },
  computed: {
    cards() {
      return this.$store.getters.cards
    },
    currentIndex() {
      return this.$store.getters.currentIndex
    },
    listLength() {
      return { width: this.cards.length * 100 + '%' }
    },
    listPosition() {
      return { transform: 'translateX(-' + this.currentIndex * 100 + '%)' }
    },
  },
  mounted() {
    this.$el.addEventListener('touchstart', (event) => this.touchstart(event))
    this.$el.addEventListener('touchmove', (event) => this.touchmove(event))
    this.$el.addEventListener('touchend', () => this.touchend())

    this.$el.addEventListener(
      'mousedown',
      (event) => this.dragStart(event),
      false
    )
    this.$el.addEventListener('mouseup', () => this.dragEnd(), false)
    this.$el.addEventListener('mousemove', (event) => this.drag(event), false)
  },
  methods: {
    touchstart(event) {
      this.touch.startX = event.touches[0].clientX
      this.touch.endX = 0
    },
    dragStart(event) {
      this.touch.startX = event.clientX
      this.touch.endX = 0
    },
    touchmove(event) {
      this.touch.endX = event.touches[0].clientX
    },
    drag(event) {
      this.touch.endX = event.clientX
    },
    touchend() {
      if (
        !this.touch.endX ||
        Math.abs(this.touch.endX - this.touch.startX) < 10
      )
        return

      if (this.touch.endX < this.touch.startX) this.$store.commit('nextIndex')
      else this.$store.commit('prevIndex')
    },
    dragEnd() {
      if (
        !this.touch.endX ||
        Math.abs(this.touch.endX - this.touch.startX) < 20
      )
        return

      if (this.touch.endX < this.touch.startX) this.$store.commit('nextIndex')
      else this.$store.commit('prevIndex')
    },
    next() {
      this.$store.commit('nextIndex')
    },
    previous() {
      this.$store.commit('prevIndex')
    },
  },
}
</script>

<style lang="scss" scoped>
.card-list-section {
  margin: 0;
  position: relative;

  .previous,
  .next {
    position: absolute;
    z-index: 2;

    top: 50%;

    width: auto;
    height: auto;

    cursor: pointer;

    color: rgba(220, 109, 72, 0.8);
    transition: all 500ms ease-in-out;

    &:hover {
      color: rgba(220, 109, 72, 1);
    }
    @media screen and (max-width: 1450px) {
      display: block;
    }
  }

  .previous {
    left: -35px;
    @media screen and (max-width: 600px) {
      left: -15px;
    }
  }

  .next {
    right: -35px;
    @media screen and (max-width: 600px) {
      right: -15px;
    }
  }
}
.card-list {
  margin: 0;
  position: relative;

  overflow-x: hidden;

  .ul {
    display: flex;
    padding: 0;
    position: relative;
  }
  .li {
    padding: 0;
    transition: all 500ms ease;
  }
}

@media screen and (min-width: 1520.9px) {
  .display-xl-none {
    display: none;
  }
}
</style>
