<template>
  <div id="services" v-scrollAnimation class="services">
    <h2>Послуги</h2>
    <CardList @click="open = !open" />
    <div id="card" :class="{ open: open }" class="modal-card">
      <img
        src="~/assets/img/modal-demo-img.jpg"
        class="modalImg"
        alt="modal-demo-img"
      />
      <div id="modal-content" class="modal-content">
        <h3>Брендинг</h3>
        <p>
          Це набір колірних, графічних, словесних, типографських, дизайнерських,
          постійних елементів (констант), що забезпечують візуальну і змістову
          єдність товарів (послуг) усієї вихідної від фірми інформації, її
          внутрішнього оформлення.
        </p>
        <p>
          Основними цілями фірмового стилю можна назвати ідентифікацію виробів і
          вказівку на зв'язок їх з фірмою, виділення цих товарів з загальної
          маси аналогічних товарів її конкурентів. Наявність фірмового стилю
          свідчить про впевненість його власника в позитивному враженні, яке він
          справляє на споживача.
        </p>

        <div class="call-to-action">
          <h4>
            Замовити дзвінок
          </h4>
          <input v-model="phone" type="tel" placeholder="+380" />

          <button @click="hideModal">
            Відправити
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardList from '~/components/cardList'
export default {
  components: {
    CardList
  },

  data() {
    return {
      open: false
    }
  }
}
</script>

<style lang="scss">
.services {
  margin-bottom: 220px;

  @media screen and (max-width: 1599px) {
    margin-bottom: 100px;
  }

  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 59px;

    color: #dc6d48;

    margin-bottom: 50px;
  }
}

.modal-card {
  position: absolute;
  z-index: 3;

  width: 100%;
  background: #ffffff;

  top: 15%;
  left: 10;

  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  display: none;

  &.open {
    display: flex;
  }

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
