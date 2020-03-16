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
    <img
      src="~/assets/img/thumnail.jpg"
      alt="img1"
    >
    <div class="text">
      <div class="close">
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 2.94594L47.0541 0L25 22.0541L2.94594 0L0 2.94594L22.0541 25L0 47.0541L2.94594 50L25 27.9459L47.0541 50L50 47.0541L27.9459 25L50 2.94594Z"
            fill="#666666"
          />
        </svg>
      </div>

      <div class="content">
        <h2>Заголовок</h2>
        <p>Це набір колірних, графічних, словесних, типографських, дизайнерських, постійних елементів (констант), що забезпечують візуальну і змістову єдність товарів (послуг) усієї вихідної від фірми інформації, її внутрішнього оформлення.</p>
      </div>
    </div>
    <img
      src="~/assets/img/cycler1.jpg"
      alt="cycler1"
    >
    <img
      src="~/assets/img/cycler2.jpg"
      alt="cycler2"
    >
    <nuxt-link
      v-scroll-to="{
        el: '#services',
        offset: -220
      }"
      class="scrolldown_container"
      to="#services"
      @click="scrollTo"
    >
      <div
        class="scroll text-inner"
        data-scroll-to="services"
        @click="scrollTo"
      >
        {{ $t('scroll') }}
      </div>

      <div
        class="scrolldown text-inner"
        data-scroll-to="services"
        @click="scrollTo"
      >
        <div class="line" />
      </div>
    </nuxt-link>
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
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.layout {
  box-sizing: border-box;
  background: #ffffff;
  /* Plate Shadow */

  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  width: auto;

  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 5px;
  width: auto;
}

img {
}

.text {
  display: flex;
  flex-direction: row;
  justify-content: center;

  align-items: center;

  .content {
    padding: 50px;
    h2 {
      font-style: normal;
      font-weight: bold;
      font-size: 48px;
      line-height: 59px;

      color: #5998bb;

      margin-bottom: 10px;
    }
    p {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 120%;
      /* or 19px */

      color: #666666;
    }
  }
  .close {
    position: absolute;
    right: 30px;
    top: 30px;
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
