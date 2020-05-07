<i18n>
{
  "uk": {
    "scroll": "Горни вниз"
  },
  "ru": {
    "scroll": "горны вниз"
  }
}
</i18n>

<template>
  <div class="layout">
    <div class="text">
      <div class="close">
        <svg
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          @click="hideModal"
        >
          <path
            d="M50 2.94594L47.0541 0L25 22.0541L2.94594 0L0 2.94594L22.0541 25L0 47.0541L2.94594 50L25 27.9459L47.0541 50L50 47.0541L27.9459 25L50 2.94594Z"
            fill="#666666"
          />
        </svg>
      </div>

      <div class="content">
        <h2>Заголовок</h2>
        <p>
          Це набір колірних, графічних, словесних, типографських, дизайнерських,
          постійних елементів (констант), що забезпечують візуальну і змістову
          єдність товарів (послуг) усієї вихідної від фірми інформації, її
          внутрішнього оформлення.
        </p>
      </div>
    </div>
    <div class="img img-1">
      <img loading="lazy" src="~/assets/img/thumnail.jpg" alt="img1" />
    </div>

    <div class="img">
      <img src="~/assets/img/cycler1.jpg" alt="cycler1" />
    </div>
    <div class="img">
      <img src="~/assets/img/cycler2.jpg" alt="cycler2" />
    </div>

    <nuxt-link class="scrolldown_container" to="#services">
      <div class="scroll text-inner" data-scroll-to="services">
        {{ $t('scroll') }}
      </div>

      <div class="scrolldown text-inner" data-scroll-to="services">
        <div class="line" />
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import { gsap } from 'gsap'

const animationSpeed = 0.75
const animationTimingIn = 'Expo.easeIn'
const animationTimingOut = 'Expo.easeOut'

export default {
  methods: {
    hideModal() {
      gsap
        .timeline({ paused: true })
        .fromTo(
          '.overlay-page',
          animationSpeed - 0.5,
          { opacity: 1, display: 'block', ease: animationTimingOut },
          { opacity: 0, display: 'none', ease: animationTimingIn }
        )
        .play()
    },
  },
}
</script>

<style lang="scss" scoped>
.layout {
  box-sizing: border-box;
  background: #ffffff;

  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  width: auto;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5px;
  width: auto;

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
}

img,
text {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.img-1 {
  grid-column: 1/2;
  grid-row: 1;

  @media (max-width: 900px) {
    grid-column: initial;
    grid-row: initial;
  }
}

.text {
  grid-column: 2;
  display: flex;
  flex-direction: row;
  justify-content: center;

  align-items: center;
  @media (max-width: 900px) {
    grid-column: initial;
    grid-row: initial;
  }

  .content {
    padding: 50px;

    @media (max-width: 900px) {
      padding: 100px 25px;
    }
    h2 {
      color: #5998bb;

      margin-bottom: 10px;
    }
    p {
      color: #666666;
    }
  }
  .close {
    position: absolute;
    right: 30px;
    top: 30px;

    svg {
      cursor: pointer;

      width: 50px;
      height: 50px;
      @media (max-width: 900px) {
        width: 30px;
        height: 30px;
      }
    }
  }
}

.scroll {
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;

  color: #ffffff;

  position: absolute;
  bottom: 135px;
  left: 88%;
  right: 0;
  margin: 0 auto;
  overflow: hidden;

  transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  -webkit-transform: translate(90deg);

  @media screen and (max-width: 1400px) {
    font-size: 20px;
    line-height: 24px;
  }

  @media screen and (max-width: 600px) {
    width: 100px;
    font-size: 14px;
    bottom: 100px;
    left: 75%;
  }
}

.scrolldown {
  width: 5px;
  height: 60px;
  position: absolute;
  bottom: 15px;
  left: 87.4%;
  right: 0;
  margin: 0 auto;
  overflow: hidden;

  @media screen and (max-width: 600px) {
    width: 3px;
    left: 74.5%;
  }
}

.line {
  width: 100%;
  height: 100%;
  display: block;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 50%,
    rgba(255, 255, 255, 0) 50%
  );
  background-position: 0 -60px;
  background-size: 100% 200%;
  animation: scrolldown 2200ms cubic-bezier(0.76, 0, 0.3, 1) forwards infinite;
  -webkit-animation: scrolldown 2200ms cubic-bezier(0.76, 0, 0.3, 1) forwards
    infinite;
}

@keyframes scrolldown {
  0% {
    background-position: 0 -60px;
  }

  75% {
    background-position: 0 0;
  }

  100% {
    background-position: 0 60px;
  }
}
</style>
