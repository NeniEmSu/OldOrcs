<template>
  <section id="works" v-scrollAnimation class="works">
    <h2>
      Наші роботи
    </h2>

    <section class="categories">
      <div class="category works-branding">
        <h3>Брендинг</h3>
      </div>
      <div class="category Works-graphic-design">
        <h3>Графічний дизайн реклами</h3>
      </div>
      <div class="category works-pofessional-printing">
        <h3>Професійний друк</h3>
      </div>
      <div class="category works-operative-polygraphy">
        <h3>Оперативна поліграфія</h3>
      </div>
      <div class="category works-smm-marketing">
        <h3>СММ Маркетинг</h3>
      </div>
      <div class="category works-outdoor-advertising">
        <h3>Зовнішня реклама</h3>
      </div>
      <div class="category works-object-photography">
        <h3>Об’єктна фотографія</h3>
      </div>
    </section>

    <div class="sub_categories">
      <div class="sub_category">
        <h4 data-text="Логотипи">
          Логотипи
        </h4>
      </div>
      <div class="sub_category">
        <h4 class="active" data-text="Макети">
          Макети
        </h4>
      </div>
      <div class="sub_category">
        <h4 data-text="Іконки">
          Іконки
        </h4>
      </div>
      <div class="sub_category">
        <h4 data-text="Кольори">
          Кольори
        </h4>
      </div>
      <div class="sub_category">
        <h4 data-text="Торговамарка">
          Торговамарка
        </h4>
      </div>
      <div class="sub_category">
        <h4 data-text="Товари">
          Товари
        </h4>
      </div>
      <div class="sub_category">
        <h4 data-text="Бренд-Буки">
          Бренд-Буки
        </h4>
      </div>
    </div>
    <section id="work-group" class="work-group">
      <div class="overlay-page">
        <nuxt-child />
      </div>

      <transition-group
        name="slide-up"
        mode="out-in"
        class="works_block"
        tag="div"
        appear
      >
        <img
          v-for="(work, index) in showWorks"
          :key="work.image + index"
          v-scroll-to="{
            el: '#work-group',
            offset: -200
          }"
          class="block"
          :src="require(`~/assets/img/${work.image}`)"
          alt="we-are"
          @click="showOverlaPge"
        />
      </transition-group>
      <transition name="fade" mode="out-in">
        <div v-if="loading" class="loader" />

        <p v-else class="show_more" @click="updateDisplay()">
          Показати ще
          <svg
            width="16"
            height="21"
            viewBox="0 0 16 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.29289 20.7071C7.68342 21.0976 8.31658 21.0976 8.70711 20.7071L15.0711 14.3431C15.4616 13.9526 15.4616 13.3195 15.0711 12.9289C14.6805 12.5384 14.0474 12.5384 13.6569 12.9289L8 18.5858L2.34315 12.9289C1.95262 12.5384 1.31946 12.5384 0.928932 12.9289C0.538407 13.3195 0.538407 13.9526 0.928932 14.3431L7.29289 20.7071ZM7 -4.37114e-08L7 20L9 20L9 4.37114e-08L7 -4.37114e-08Z"
              fill="#5998BB"
            />
          </svg>
        </p>
      </transition>
    </section>
  </section>
</template>

<script>
import { gsap } from 'gsap'

const animationSpeed = 0.75
const animationTimingIn = 'Expo.easeIn'
const animationTimingOut = 'Expo.easeOut'
export default {
  data() {
    return {
      displaying: 16,
      loading: false,
      works: [
        {
          image: 'we-are.jpg'
        },
        {
          image: 'tura.jpg'
        },
        {
          image: 'nokkaido.jpg'
        },
        {
          image: 'urwahn-bike.jpg'
        },
        {
          image: 'aitchat.jpg'
        },
        {
          image: 'chat.jpg'
        },
        {
          image: 'bloc.jpg'
        },
        {
          image: 'moko.jpg'
        },
        {
          image: 'symbol.jpg'
        },
        {
          image: 'hello.jpg'
        },
        {
          image: 'cats.jpg'
        },
        {
          image: 'lidiya.jpg'
        },
        {
          image: 'we-are.jpg'
        },
        {
          image: 'tura.jpg'
        },
        {
          image: 'nokkaido.jpg'
        },
        {
          image: 'colorfull.jpg'
        },
        {
          image: 'we-are.jpg'
        },
        {
          image: 'tura.jpg'
        },
        {
          image: 'nokkaido.jpg'
        },
        {
          image: 'urwahn-bike.jpg'
        },
        {
          image: 'aitchat.jpg'
        },
        {
          image: 'chat.jpg'
        },
        {
          image: 'bloc.jpg'
        },
        {
          image: 'moko.jpg'
        },
        {
          image: 'symbol.jpg'
        },
        {
          image: 'hello.jpg'
        },
        {
          image: 'cats.jpg'
        },
        {
          image: 'lidiya.jpg'
        },
        {
          image: 'we-are.jpg'
        },
        {
          image: 'tura.jpg'
        },
        {
          image: 'nokkaido.jpg'
        },
        {
          image: 'colorfull.jpg'
        }
      ]
    }
  },

  computed: {
    showWorks() {
      return this.works.slice(0, this.displaying)
    }
  },

  methods: {
    updateDisplay() {
      this.loading = true
      const self = this
      setTimeout(() => {
        self.loading = false
      }, 3000)
      setTimeout(() => {
        self.displaying = self.displaying += 4
      }, 3500)
    },

    showOverlaPge() {
      gsap
        .timeline({ paused: true })
        .fromTo(
          '.overlay-page',
          animationSpeed,
          { display: 'none', opacity: 0, ease: animationTimingIn },
          { display: 'block', opacity: 1, ease: animationTimingOut }
        )
        .play()
    },

    hideModal() {
      gsap
        .timeline({ paused: true })
        .fromTo(
          '.overlay-page',
          animationSpeed,
          { opacity: 1, display: 'block', ease: animationTimingOut },
          { opacity: 0, display: 'none', ease: animationTimingIn }
        )
        .play()
    }
  }
}
</script>

<style lang="scss" scoped>
.slide-up-enter {
  transform: translateY(10px);
  opacity: 0;
}
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 200ms ease;
}

.slide-up-move {
  transition: all 0.8s ease-in;
}
.work-group {
  position: relative;
}
.works {
  /* width: 100%; */
  margin-bottom: 40px;
}

.works h2 {
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 59px;

  color: #dc6d48;

  margin-bottom: 50px;
}

.works .categories {
  display: flex;
  text-align: center;

  @media screen and (max-width: 1599px) {
    justify-content: flex-start;
  }
}

.works .categories .category {
  max-width: 205px;
  min-width: 205px;
  width: 100%;
  height: 100px;

  background-position: center;
  background-size: cover;

  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;

  align-items: center;
  margin: 0 10px 5px 0;

  border-radius: 1px;
}

.works .categories .category h3 {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

  text-align: center;

  color: #ffffff;
}

.works .categories .category.works-branding {
  background-image: url(~assets/img/works-branding.jpg);
}

.works .categories .category.Works-graphic-design {
  background-image: url(~assets/img/Works-graphic-design.jpg);
}

.works .categories .category.works-object-photography {
  background-image: url(~assets/img/works-object-photography.jpg);
}

.works .categories .category.works-operative-polygraphy {
  background-image: url(~assets/img/works-operative-polygraphy.jpg);
}

.works .categories .category.works-outdoor-advertising {
  background-image: url(~assets/img/works-outdoor-advertising.jpg);
}

.works .categories .category.works-pofessional-printing {
  background-image: url(~assets/img/works-pofessional-printing.jpg);
}

.works .categories .category.works-smm-marketing {
  background-image: url(~assets/img/works-smm-marketing.jpg);
}

.works .sub_categories {
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  justify-content: space-between;
  text-align: center;

  margin-top: 90px;

  @media screen and (max-width: 1599px) {
  }
}

.works .sub_categories .sub_category h4 {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #666666;
  margin-bottom: 30px;
  cursor: pointer;
  transition: all 300ms linear;
  -webkit-transition: all 300ms linear;
  -moz-transition: all 300ms linear;
  -ms-transition: all 300ms linear;
  -o-transition: all 300ms linear;
}

.works .sub_categories .sub_category h4::before {
  display: block;
  content: attr(data-text);
  font-weight: 600;
  font-size: 24px;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}

.works .sub_categories .sub_category h4:hover,
.works .sub_categories .sub_category h4.active {
  content: '';
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #0084a1;
}

.works_block {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 10px;
  margin-bottom: 40px;

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(3, auto);
  }

  @media screen and (max-width: 425px) {
    grid-template-columns: repeat(2, auto);
  }
}

.works_block img {
  width: 100%;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);

  cursor: pointer;
}

.show_more {
  display: flex;
  justify-content: center;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  text-align: center;

  color: #5998bb;
  cursor: pointer;
}

.show_more svg {
  margin-left: 10px;
}

.overlay-page {
  position: absolute;
  z-index: 3;
  display: none;
}

.loader {
  border: 6px solid #f3f3f3;
  border-top: 6px solid #3498db;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1500ms linear infinite;
  margin: auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1000ms;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
