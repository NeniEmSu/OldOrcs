<template>
  <div>
    <TheHero />
    <main class="container">
      <div id="bg" />
      <section
        id="services"
        class="services "
      >
        <h2>
          Послуги
        </h2>

        <div class="services_blocks">
          <div
            id="card"
            class="modal-card"
          >
            <img
              src="~/assets/img/modal-demo-img.jpg"
              class="modalImg"
              alt="modal-demo-img"
            >
            <div
              id="modal-content"
              class="modal-content"
            >
              <h3>Брендинг</h3>
              <p>
                Це набір колірних, графічних, словесних, типографських, дизайнерських, постійних елементів (констант), що забезпечують візуальну і змістову єдність товарів (послуг) усієї вихідної від фірми інформації, її внутрішнього оформлення.
              </p>
              <p>
                Основними цілями фірмового стилю можна назвати ідентифікацію виробів і вказівку на зв'язок їх з фірмою, виділення цих товарів з загальної маси аналогічних товарів її конкурентів. Наявність фірмового стилю свідчить про впевненість його власника в позитивному враженні, яке він справляє на споживача.
              </p>

              <div class="call-to-action">
                <h4>
                  Замовити дзвінок
                </h4>
                <input
                  type="text"
                  placeholder="+380"
                >

                <button @click="hideModal">
                  Відправити
                </button>
              </div>
            </div>
          </div>
          <ul>
            <li @click="showModal">
              <h4>
                Брендинг
              </h4><img
                src="~/assets/img/branding.jpg"
                alt="Брендинг"
              >
            </li>
            <li>
              <h4>Графічний дизайн</h4>
              <img
                src="~/assets/img/graphic-design.jpg"
                alt="Графічний дизайн"
              >
            </li>
            <li>
              <h4>Професійний друк</h4>
              <img
                src="~/assets/img/pofessional-printing.jpg"
                alt="Професійний друк"
              >
            </li>
            <li>
              <h4>Оперативна поліграфія</h4>
              <img
                src="~/assets/img/operative-polygraphy.jpg"
                alt="Оперативна поліграфія"
              >
            </li>
            <li>
              <h4>СММ Маркетинг</h4>
              <img
                src="~/assets/img/smm-marketing.jpg"
                alt="СММ Маркетинг"
              >
            </li>
            <li>
              <h4>Зовнішня реклама</h4>
              <img
                src="~/assets/img/outdoor-advertising.jpg"
                alt="Зовнішня реклама"
              >
            </li>
            <li>
              <h4>Об’єктна фотографія</h4>
              <img
                src="~/assets/img/object-photography.jpg"
                alt="Об’єктна фотографія"
              >
            </li>
          </ul>
        </div>
      </section>

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
import TheHero from '~/components/ThHero'
const animationSpeed = 0.75
const animationTimingIn = 'Expo.easeIn'
const animationTimingOut = 'Expo.easeOut'

export default {
  components: {
    TheHero
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
// .slide-up-leave-to{

// }

#services {
  position: relative;
}
.services_blocks {
  position: relative;
}
.modal-card {
  position: absolute;
  z-index: 1;
  // height: 600px;
  width: 100%;
  background: #ffffff;

  top: 15%;
  left: 10;

  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  visibility: hidden;

  .modal-content {
    padding: 120px 50px;

    h3 {
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;

      color: #666666;

      margin-bottom: 30px;
    }

    p {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 120%;

      color: #666666;

      margin-bottom: 30px;
    }

    h4 {
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;

      color: #666666;

      margin-bottom: 30px;
    }

    input {
      border: none;
      border-bottom: 1px solid #666666;
      outline: none;

      margin-right: 50px;
      padding: 12px 0px;

      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 120%;
      /* or 19px */

      color: rgba(102, 102, 102, 0.5);
    }

    button {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 120%;

      text-transform: uppercase;

      color: #ffffff;
      background-color: #5998bb;
      border: none;

      padding: 12px 15px;
    }
  }
}
.work-group {
  position: relative;
}
.overlay-page {
  position: absolute;
  z-index: 3;
  display: none;
}
</style>
