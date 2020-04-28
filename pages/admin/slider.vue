<template>
  <div id="services" class="services">
    <h2>Послуги</h2>
    <CardList />
  </div>
</template>

<script>
import CardList from '~/components/cardList'
export default {
  layout: 'admin',
  components: {
    CardList
  }
}
</script>

<style lang="scss">
h2 {
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 59px;

  color: #dc6d48;

  margin-bottom: 50px;
}
</style>
