<template>
  <div id="services" v-scrollAnimation class="services">
    <h2>Послуги</h2>
    <CardList />
  </div>
</template>

<script>
import CardList from '~/components/cardList'
export default {
  components: {
    CardList,
  },
}
</script>

<style lang="scss">
.services {
  margin-bottom: 220px;

  @media screen and (max-width: 1599px) {
    margin-bottom: 100px;
  }

  @media (max-width: 500px) {
    margin-bottom: 50px;
  }
}
</style>
