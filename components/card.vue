<template>
  <div class="card-wrapper">
    <h3 class="title">{{ item.title }}</h3>
    <div class="scard" @click="open = !open">
      <div class="img" :style="backgroundImage"></div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['item'],
  // props: ['item', 'active'],

  data: () => {
    return {
      open: false
    }
  },
  computed: {
    backgroundImage() {
      return {
        'background-image': 'url(' + require('../assets' + this.item.img) + ')'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card-wrapper {
  width: 100%;
  margin: auto 10px 30px 0;

  .title {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;

    text-align: center;

    color: #666666;

    margin: auto 0 30px 0;
  }
}
.scard {
  position: relative;
  width: 205px;
  height: 600px;
  overflow: hidden;
  transition: all 0.5s ease;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  .img {
    width: 100%;
    height: 600px;
    background-position: center;
    background-size: cover;
    @media screen and (max-width: 1200px) {
      height: 500px;
    }
    @media screen and (max-width: 600px) {
      height: 400px;
    }
  }
  @media screen and (max-width: 1400px) {
    height: 500px;
  }

  @media screen and (max-width: 600px) {
    height: 400px;
  }
}
</style>
