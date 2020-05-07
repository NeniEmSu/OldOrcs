<template>
  <section class="mt-5">
    <div class="container mb-4">
      <div class="row">
        <div class="col-md-12">
          <div v-if="addState" class="card">
            <div class="card-body">
              <div class="card-title mb-4">
                <h4>Add Work</h4>
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
              <button class="btn btn-info m-3" @click="initForm">
                {{ addState ? 'Cancel' : 'Add New Work' }}
              </button>
            </div>
            <div class="card-body">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Job Description</th>
                    <th scope="col">Created</th>
                    <th scope="col">At</th>
                    <th scope="col">Action</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <div
                  v-if="jobLoading"
                  class="spinner-border"
                  style="width: 3rem; height: 3rem;"
                  role="status"
                ></div>
                <tbody v-else>
                  <tr v-for="(job, index) in allJobs" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ job.title }}</td>

                    <td>{{ job.description }}</td>
                    <td>
                      {{ $moment(job.createdAt).format('DD/MM/YY') }}
                    </td>
                    <td>
                      {{ $moment(job.createdAt).format('HH:mm') }}
                    </td>
                    <td>{{ job.phone }}</td>
                    <td>
                      <button
                        class="btn btn-info"
                        @click="editService(job._id)"
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        class="btn btn-danger"
                        @click="deleteService(job._id)"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
/* eslint-disable no-console */
export default {
  layout: 'admin',
  data() {
    return {
      serviceDetails: {
        name: '',
        title: '',
        phone: '',
        description: '',
        status: false,
      },
      allJobs: [
        {
          images: [
            {
              destination: 'server/images',

              encoding: '7bit',
              fieldname: 'images',
              filename: '2020-05-04T12-51-46.262Zcycler1.jpg',
              mimetype: 'image/jpeg',
              originalname: 'cycler1.jpg',
              path: 'server\\images\\2020-05-04T12-51-46.262Zcycler1.jpg',
              size: 517273,
            },
          ],
          thumbnail: [
            {
              destination: 'server/thumbnails',
              encoding: '7bit',
              fieldname: 'thumbnail',
              filename: '2020-05-04T12-51-46.256Zaitchat.jpg',
              mimetype: 'image/jpeg',
              originalname: 'aitchat.jpg',
              path: 'server\\thumbnails\\2020-05-04T12-51-46.256Zaitchat.jpg',
              size: 34531,
            },
          ],

          title: 'Заголовок',
          updatedAt: '2020-05-04T12:51:46.687Z',
          __v: 0,
          _id: '5eb00fe23fd24318d097ac5d',
        },
      ],
      jobLoading: false,
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
    this.getAllJobs()
  },
  methods: {
    async getAllJobs() {
      this.jobLoading = true
      try {
        const data = await this.$axios.$get('/api/work')
        console.log(data)
        this.allJobs = data
        this.jobLoading = false
      } catch (err) {
        this.jobLoading = false
        this.$swal('Error', 'Error Fetting Services', 'error')
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
          this.getAllJobs()
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
        text: 'Once deleted, you will not be able to recover this Service!',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          this.$axios
            .$delete(`'/api/service/'${id}`)
            .then((response) => {
              this.getAllJobs()
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
</style>
