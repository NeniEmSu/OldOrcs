<template>
  <div class="card-wrapper" @click="$bvModal.show(item.title)">
    <h3 class="title">{{ item.title }}</h3>
    <div class="scard">
      <div class="img" :style="backgroundImage"></div>
    </div>

    <b-modal
      :id="item.title"
      hide-backdrop
      hide-footer
      hide-header
      size="xl"
      centered
      body-class="p-0 m-0 modal-box-shadow"
    >
      <template v-slot:default="{ hide }">
        <div class="d-block d-sm-flex">
          <div class="close">
            <svg
              width="35"
              height="35"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              @click="hide"
            >
              <path
                d="M50 2.94594L47.0541 0L25 22.0541L2.94594 0L0 2.94594L22.0541 25L0 47.0541L2.94594 50L25 27.9459L47.0541 50L50 47.0541L27.9459 25L50 2.94594Z"
                fill="#666666"
              />
            </svg>
          </div>
          <b-img-lazy
            :src="require(`~/assets/img/${item.thumbnail}`)"
            class="modalImg"
            :alt="item.title"
          />
          <div id="modal-content" class="modall-content">
            <h3>{{ item.title }}</h3>
            <div v-for="(text, index) in item.description" :key="index">
              <p>{{ text }}</p>
            </div>
            <div class="call-to-action">
              <h4>
                Замовити дзвінок
              </h4>
              <form method="post" @submit.prevent="sendNumber">
                <input v-model="serviceNeded.title" type="hidden" />
                <input
                  v-model="serviceNeded.phone"
                  type="tel"
                  placeholder="+380"
                />
                <span
                  v-if="sendLoading"
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                <button v-else :disabled="isDisabled">
                  Відправити
                </button>
              </form>
            </div>
          </div>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: { item: { type: Object, required: true } },

  data() {
    return {
      serviceNeded: {
        phone: '',
        title: this.item.title,
      },
      sendLoading: false,
      isValid: false,
    }
  },
  computed: {
    backgroundImage() {
      return {
        'background-image': 'url(' + require('../assets' + this.item.img) + ')',
      }
    },
    isDisabled() {
      if (this.serviceNeded.title === '' || this.serviceNeded.phone === '') {
        return !this.isValid
      }
      return this.isValid
    },
  },

  methods: {
    sendNumber() {
      const formData = new FormData()
      formData.append('title', this.serviceNeded.title)
      formData.append('phone', this.serviceNeded.phone)
      this.sendLoading = true
      this.$axios
        .$post('/api/service', formData)
        .then((response) => {
          this.sendLoading = false
          this.serviceNeded = {
            title: this.item.title,
            phone: '',
          }
          this.$swal(
            'Success',
            `Request for ${response.data.title} to call ${response.data.phone} was sent successfully, expect a call from our director shortly`,
            'success'
          )
          this.$bvModal.hide(this.item.title)
        })
        .catch((error) => {
          this.sendLoading = false

          this.$swal('Error', `Something Went wrong, Error: ${error}`, 'error')
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.card-wrapper {
  width: 100%;
  margin: auto 10px 30px 0;
  cursor: pointer;

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

.modal-box-shadow {
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
}

.close {
  position: absolute;
  top: 50px;
  right: 50px;

  svg {
    cursor: pointer;
  }
}

.modalImg {
  max-width: 600px;
  width: 100%;
  max-height: 600px;
  height: 100%;
  object-fit: cover;

  @media screen and (max-width: 1440px) {
    max-width: 550px;

    max-height: 550px;
  }

  @media screen and (min-width: 575px) and (max-width: 1200px) {
    display: none;
  }

  @media screen and (max-width: 575px) {
    height: 225px;
  }
}

.modall-content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 830;
  width: 100%;
  margin: auto;
  padding: 50px 50px;
  h2 {
    color: #666666;

    margin-bottom: 30px;
  }
  h3 {
    color: #666666;

    margin-bottom: 30px;
  }

  p {
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

    color: rgba(102, 102, 102, 0.5);
    margin-bottom: 20px;
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

    &:disabled {
      background-color: rgba(89, 152, 187, 0.7);
      cursor: not-allowed;
    }
  }
}
</style>
