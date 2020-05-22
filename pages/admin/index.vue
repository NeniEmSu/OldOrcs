<template>
  <section class="mt-5 container">
    <h1>Admin Dashboard</h1>
    <div class="mb-4">
      <div class="row">
        <div class="col-md-12">
          <div v-if="addState" class="card">
            <div class="card-body">
              <div class="card-title mb-4">
                <h4>Add Service</h4>
              </div>
              <form @submit.prevent="addNewService">
                <div class="form-group">
                  <label for="title">Title</label>
                  <input
                    v-model="serviceDetails.title"
                    type="text"
                    placeholder="Title..."
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label for="phone">Phone</label>
                  <input
                    v-model="serviceDetails.phone"
                    type="tel"
                    placeholder="Phone Number..."
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <span
                    v-if="addLoading"
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span
                  ><button
                    v-else
                    class="btn btn-primary"
                    :disabled="isDisabled"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="card bg-light p-1 showdow-sm">
            <div class="card-title">
              <!-- <button class="btn btn-info m-3" @click="initForm">
                {{ addState ? 'Cancel' : 'Add New Service' }}
              </button> -->
              <h4>Запитані послуги</h4>
            </div>
            <div class="card-body">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Service</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Job Description</th>
                    <th scope="col">Status</th>
                    <th scope="col">Created</th>
                    <th scope="col">At</th>
                    <th scope="col">Action</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <div
                  v-if="serviceLoading"
                  class="spinner-border"
                  style="width: 3rem; height: 3rem;"
                  role="status"
                ></div>
                <tbody v-else>
                  <tr v-for="(service, index) in allServices" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ service.name }}</td>
                    <td>{{ service.title }}</td>
                    <td>{{ service.phone }}</td>
                    <td>{{ service.description }}</td>
                    <td>{{ service.status }}</td>
                    <td>
                      {{ $moment(service.createdAt).format('DD/MM') }}
                    </td>
                    <td>
                      {{ $moment(service.createdAt).format('HH:mm') }}
                    </td>

                    <td>
                      <b-button
                        class="ml-auto"
                        variant="light"
                        @click="editService(service._id)"
                      >
                        <b-icon
                          icon="pencil-square"
                          color="danger"
                          variant="primary"
                          font-scale="1.5"
                        ></b-icon>
                      </b-button>
                    </td>
                    <td>
                      <b-button
                        class="ml-auto"
                        variant="light"
                        @click="deleteService(service._id)"
                      >
                        <b-icon
                          icon="trash-fill"
                          color="danger"
                          variant="danger"
                          font-scale="1.5"
                        ></b-icon>
                      </b-button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AdminWorks />
  </section>
</template>

<script>
import AdminWorks from '~/components/admin/AdminWorks'
/* eslint-disable no-console */
export default {
  layout: 'admin',
  middleware: ['auth'],
  components: {
    AdminWorks,
  },
  filters: {
    truncate(text, length, suffix) {
      if (text.length > length) {
        return text.substring(0, length) + suffix
      } else {
        return text
      }
    },
  },
  data() {
    return {
      serviceDetails: {
        name: '',
        title: '',
        phone: '',
        description: '',
        status: false,
      },
      allServices: [
        {
          createdAt: '2020-04-29T06:54:14.492Z',
          phone: '+380932589266',
          title: 'Оперативна поліграфія',
          updated: '2020-04-29T06:54:14.492Z',
          __v: 0,
          _id: '5ea92620873bcd54bc17b7f2',
        },
      ],
      serviceLoading: false,
      isValid: false,
      addLoading: false,
      addState: false,
    }
  },

  computed: {
    isDisabled() {
      if (
        this.serviceDetails.name === '' ||
        this.serviceDetails.title === '' ||
        this.serviceDetails.phone === '' ||
        this.serviceDetails.description === '' ||
        this.serviceDetails.artist === ''
      ) {
        return !this.isValid
      }
      return this.isValid
    },
  },
  created() {
    this.getAllServices()
  },
  methods: {
    async getAllServices() {
      this.serviceLoading = true
      try {
        const data = await this.$axios.$get('/api/service')
        console.log(data)
        this.allServices = data
        this.serviceLoading = false
      } catch (err) {
        this.serviceLoading = false
        this.$swal('Error', 'Error Fetching Services', 'error')
      }
    },
    initForm() {
      this.addState = !this.addState
    },

    addNewService() {
      const formData = new FormData()
      formData.append('title', this.serviceDetails.title)
      formData.append('name', this.serviceDetails.name)
      formData.append('phone', this.serviceDetails.phone)
      formData.append('description', this.serviceDetails.description)
      formData.append('status', this.serviceDetails.status)
      this.addLoading = true
      this.$axios
        .$post('/api/service', formData)
        .then((response) => {
          this.addLoading = false
          this.serviceDetails = {
            name: '',
            title: '',
            phone: '',
            description: '',
            status: false,
          }
          this.getAllServices()
          this.$swal('Success', 'New Service Added', 'success')
        })
        .catch((err) => {
          this.addLoading = false
          this.$swal('Error', `Something Went wrong, \n Error: ${err}`, 'error')
        })
    },
    deleteService(id) {
      this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!',
      }).then((willDelete) => {
        if (willDelete.value) {
          this.$axios
            .$delete(`'/api/service/'${id}`)
            .then((response) => {
              this.getAllServices()
              this.$swal({
                text: "Poof! You've sucessfully deleted that service request!",
                icon: 'success',
              })
            })
            .catch((err) => {
              this.$swal(
                'Error',
                `Somethimg went wrong, Error: ${err}`,
                'error'
              )
            })
        } else {
          this.$swal('Your service request is safe!')
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}

.btn {
  &:disabled {
    cursor: not-allowed;
  }
}
</style>
