<template>
  <section class="mt-5 container">
    <AddWorkForm v-if="addState" @Call-Get-All-Jobs="callGetJobs" />
    <div class="my-3">
      <button class="btn btn-info my-3" @click="initForm">
        {{ addState ? 'Cancel' : 'Add New Work' }}
      </button>
      <b-table
        striped
        hover
        responsive
        :fields="fields"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        sticky-header="600px"
        :items="items"
      >
        <template v-slot:thead-top="">
          <b-tr>
            <b-th colspan="1" variant="primary">Index</b-th>
            <b-th colspan="3" variant="secondary">
              Work Data
            </b-th>
            <b-th colspan="2" variant="success">
              Action
            </b-th>
          </b-tr>
        </template>
        <template v-slot:cell(description)="data">
          <p>{{ data.item.description }}</p>
        </template>
        <template v-slot:cell(edit)="data">
          <b-button
            class="ml-auto"
            variant="light"
            @click="editService(data.item._id)"
          >
            <b-icon
              icon="pencil-square"
              color="primary"
              variant="primary"
              font-scale="1.5"
            ></b-icon>
          </b-button>
        </template>
        <template v-slot:cell(delete)="data">
          <b-button
            class="ml-auto"
            variant="light"
            @click="deleteService(data.item._id)"
          >
            <b-icon
              icon="trash-fill"
              color="danger"
              variant="danger"
              font-scale="1.5"
            ></b-icon>
          </b-button>
        </template>
      </b-table>
    </div>
  </section>
</template>

<script>
import AddWorkForm from '~/components/admin/partials/AddWorkForm'

export default {
  components: {
    AddWorkForm,
  },
  layout: 'admin',
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
      sortBy: 'Total',
      sortDesc: true,
      fields: [
        { key: 'No', stickyColumn: true, isRowHeader: true, sortable: false },
        {
          key: 'title',
          sortable: false,
        },
        {
          key: 'description',
          sortable: false,
        },
        {
          key: 'createdAt',
          label: 'Created',
          sortable: true,
          formatter: (value) => {
            return this.$moment(value).format('LL HH:mm')
          },
        },
        {
          key: 'Edit',
          sortable: false,
        },
        {
          key: 'delete',
          sortable: false,
        },
      ],
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
      addState: false,
    }
  },

  computed: {
    isDisabled() {
      if (
        this.workDetails.title === '' ||
        this.workDetails.description === '' ||
        this.workDetails.thumbnail === null ||
        this.workDetails.category === null ||
        this.workDetails.subCategory === null ||
        this.workDetails.images === null
      ) {
        return !this.isValid
      }
      return this.isValid
    },

    items() {
      return this.allJobs.map((stat, index) => {
        return {
          No: index + 1,
          _id: stat._id,
          title: stat.title,
          description: stat.description,
          createdAt: stat.createdAt,
          edit: '',
          delete: '',
        }
      })
    },
  },
  created() {
    this.getAllJobs()
    this.addState = false
  },
  methods: {
    async getAllJobs() {
      this.jobLoading = true
      try {
        const data = await this.$axios.$get('/api/work')
        this.allJobs = data
        this.jobLoading = false
      } catch (err) {
        this.jobLoading = false
        this.$swal('Error', 'Error Fetching Services', 'error')
      }
    },

    callGetJobs() {
      this.getAllJobs()
    },

    initForm() {
      this.addState = !this.addState
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
            .$delete(`/api/work/${id}`)
            .then((response) => {
              this.getAllJobs()
              this.$swal({
                text: "Poof! You've sucessfully deleted that work request!",
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
          this.$swal('Your work request is safe!')
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
