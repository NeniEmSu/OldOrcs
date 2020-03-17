<template>
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
</template>

<script>
import { gsap } from 'gsap'
const animationSpeed = 0.75
const animationTimingIn = 'Expo.easeIn'
const animationTimingOut = 'Expo.easeOut'

export default {
  data () {
    return {

    }
  },

  methods: {
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
#services {
  position: relative;
}

.services_blocks {
  position: relative;
}

.services {
  margin-bottom: 250px;
}

.services h2 {
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 59px;

  color: #DC6D48;

  margin-bottom: 50px;
}

.services_blocks ul {
  display: flex;
  text-align: center;
}

.services_blocks ul li {
  list-style: none;
  margin: auto 10px;
}

.services_blocks ul li h4 {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  text-align: center;

  color: #666666;

  margin-bottom: 30px;
}

.services_blocks ul li img {
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
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
</style>
