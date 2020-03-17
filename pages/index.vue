<template>
  <div>
    <TheHero />
    <main class="container">
      <div id="bg" />
      <TheServices />

      <section
        id="works"
        class="works "
      >
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
            <h4
              class="active"
              data-text="Макети"
            >
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
        <section class="work-group">
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
              key="1"
              class="block"
              src="~/assets/img/we-are.jpg"
              alt="we-are"
            >
            <img
              key="2"
              class="block"
              src="~/assets/img/tura.jpg"
              alt="tura"
            >
            <img
              key="3"
              class="block"
              src="~/assets/img/nokkaido.jpg"
              alt="nokkaido"
            >
            <img
              key="4"
              class="block"
              src="~/assets/img/urwahn-bike.jpg"
              alt="urwahn-bike"
            >
            <img
              key="5"
              class="block"
              src="~/assets/img/aitchat.jpg"
              alt="aitchat"
            >
            <img
              key="6"
              class="block"
              src="~/assets/img/chat.jpg"
              alt="chat"
            >
            <img
              key="7"
              class="block"
              src="~/assets/img/bloc.jpg"
              alt="bloc"
            >
            <img
              key="8"
              class="block"
              src="~/assets/img/moko.jpg"
              alt="moko"
            >
            <img
              key="9"
              class="block"
              src="~/assets/img/symbol.jpg"
              alt="symbol"
            >
            <img
              key="10"
              class="block"
              src="~/assets/img/hello.jpg"
              alt="hello"
            >
            <img
              key="11"
              class="block"
              src="~/assets/img/cats.jpg"
              alt="cats"
            >
            <img
              key="12"
              class="block"
              src="~/assets/img/lidiya.jpg"
              alt="lidiya"
            >
          </transition-group>

          <p class="show_more">
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
        </section>
      </section>
    </main>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import TheHero from '~/components/TheHero'
import TheServices from '~/components/TheServices'
const animationSpeed = 0.75
const animationTimingIn = 'Expo.easeIn'
const animationTimingOut = 'Expo.easeOut'

export default {
  components: {
    TheHero,
    TheServices
  },

  data () {
    return {

    }
  },

  mounted () {
    window.addEventListener('scroll', this.moveBackground)

    gsap.timeline({ paused: true })
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

  beforeDestroy () {
    window.removeEventListener('scroll', this.moveBackground)
  },

  methods: {
    moveBackground (e) {
      const bgPattern = document.getElementById('bg')

      bgPattern.style.backgroundPosition = 1020 - window.pageYOffset + 'px'
    },

    showModal () {
      gsap.timeline({ paused: true })
        .fromTo(
          '#card',
          animationSpeed - 0.5,
          { display: 'none', x: 0, visibility: 'hidden', opacity: 0, ease: animationTimingIn },
          { display: 'flex', x: 100, visibility: 'visible', opacity: 1, ease: animationTimingOut }
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

    hideModal () {
      gsap.timeline({ paused: true })
        .staggerFromTo(
          '#modal-content',
          animationSpeed,
          { opacity: 1, y: 0, ease: animationTimingOut },
          { opacity: 0, y: 10, ease: animationTimingIn }
        ).fromTo(
          '.modalImg',
          animationSpeed,
          { opacity: 1, scaleY: 1, ease: animationTimingOut },
          { opacity: 0, scaleY: 0, ease: animationTimingIn },
          '+=0.25'
        ).fromTo(
          '#card',
          animationSpeed,
          { display: 'flex', visibility: 'visible', opacity: 1, ease: animationTimingOut },
          { display: 'none', visibility: 'hidden', opacity: 0, ease: animationTimingIn }
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

  color: #DC6D48;

  margin-bottom: 50px;
}

.works .categories {
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;
  grid-gap: 5px;
}

.works .categories .category {
  max-width: 210px;
  min-width: 210px;
  width: 100%;
  height: 100px;

  background-position: center;
  background-size: cover;

  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;

  align-items: center;
  margin-left: auto;
  margin-right: auto;

  border-radius: 1px;

  margin-bottom: 90px;

}

.works .categories .category h3 {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

  text-align: center;

  color: #FFFFFF;
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
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;
  grid-gap: 10px;
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
  content: "";
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #0084A1;
}

.works_block {
  position: relative;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 5px;
  margin-bottom: 40px;
}

.works_block img {
  width: 100%;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
}

.show_more {
  display: flex;
  justify-content: center;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  text-align: center;

  color: #5998BB;
}

.show_more svg {
  margin-left: 10px;
}

.overlay-page {
  position: absolute;
  z-index: 3;
  display: none;
}
</style>
