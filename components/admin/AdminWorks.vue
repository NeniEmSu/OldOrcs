<template>
  <section class="mt-5 container">
    <div class="mb-4">
      <div class="row">
        <div class="col-md-12">
          <div v-if="addState" class="card">
            <div class="card-body">
              <div class="card-title mb-4">
                <h3>Add Work</h3>
              </div>
              <form enctype="multipart/form-data" @submit.prevent="addNewWork">
                <b-form-group label="Title:" label-for="title" class="col-12">
                  <b-form-input
                    id="title"
                    v-model="workDetails.title"
                    type="text"
                    required
                    placeholder="Enter title"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  label="Description:"
                  label-for="description"
                  class="col-12"
                >
                  <b-form-textarea
                    id="description"
                    v-model="workDetails.description"
                    multi-line
                    required
                    placeholder="Enter description"
                    rows="3"
                  ></b-form-textarea>
                </b-form-group>
                <b-form-group
                  label="Category:"
                  label-for="category"
                  class="col-12"
                >
                  <b-form-select
                    id="category"
                    v-model="workDetails.category"
                    :options="categoryOptions"
                  ></b-form-select>
                </b-form-group>
                <b-form-group
                  label="Subcategory:"
                  label-for="subCategory"
                  class="col-12"
                >
                  <b-form-select
                    id="subCategory"
                    v-model="workDetails.subCategory"
                    :options="subCategoryOptions"
                  ></b-form-select>
                </b-form-group>
                <b-form-group
                  label="Thumbnail:"
                  label-for="thumbnail"
                  class="col-12"
                >
                  <b-form-file
                    v-model="workDetails.thumbnail"
                    placeholder="Choose a file or drop it here..."
                    drop-placeholder="Drop file here..."
                  ></b-form-file>
                </b-form-group>

                <b-form-group
                  label="Images of the work:"
                  label-for="images"
                  class="col-12"
                >
                  <b-form-file v-model="workDetails.images" multiple>
                    <template slot="file-name" slot-scope="{ names }">
                      <b-badge variant="dark">{{ names[0] }}</b-badge>
                      <b-badge
                        v-if="names.length > 1"
                        variant="dark"
                        class="ml-1"
                      >
                        + {{ names.length - 1 }} More files
                      </b-badge>
                    </template>
                  </b-form-file>
                </b-form-group>
                <b-form-group class="col-12">
                  <span
                    v-if="addLoading"
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  <button v-else class="btn btn-primary" :disabled="isDisabled">
                    Submit
                  </button>
                </b-form-group>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
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
/* eslint-disable no-console */
export default {
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
      categoryOptions: [
        { value: null, text: 'Виберіть категорію, яка відповідає роботі.' },
        { value: 'branding', text: 'Брендинг' },
        { value: 'graphic-design', text: 'Графічний дизайн реклами' },
        { value: 'pofessional-printing', text: 'Професійний друк' },
        { value: 'operative-polygraphy', text: 'Оперативна поліграфія' },
        { value: 'smm-marketing', text: 'СММ Маркетинг' },
        { value: 'outdoor-advertising', text: 'Зовнішня реклама' },
        { value: 'object-photography', text: 'Об’єктна фотографія' },
      ],
      subCategoryOptions: [
        { value: null, text: 'Виберіть підкатегорію, яка відповідає роботі.' },
        { value: 'logos', text: 'Логотипи' },
        { value: 'models', text: 'Макети' },
        { value: 'icons', text: 'Іконки' },
        { value: 'colors', text: 'Кольори' },
        { value: 'trademarks', text: 'Торгова Марка' },
        { value: 'cargo', text: 'Товари' },
        { value: 'brand-beeches', text: 'Бренд-Буки' },
      ],
      workDetails: {
        title: '',
        description: '',
        thumbnail: null,
        images: null,
        category: null,
        subCategory: null,
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
        this.$swal('Error', 'Error Fetching Services', 'error')
      }
    },
    initForm() {
      this.addState = !this.addState
    },

    addNewWork() {
      const formData = new FormData()
      formData.append('title', this.workDetails.title)
      formData.append('description', this.workDetails.description)
      formData.append('category', this.workDetails.category)
      formData.append('subCategory', this.workDetails.subCategory)
      formData.append('thumbnail', this.workDetails.thumbnail)
      for (let index = 0; index < this.workDetails.images.length; index++) {
        formData.append('images', this.workDetails.images[index])
      }
      this.addLoading = true
      this.$axios
        .$post('/api/work', formData)
        .then((response) => {
          this.addLoading = false
          this.workDetails = {
            title: '',
            description: '',
            thumbnail: null,
            images: null,
            category: null,
            subCategory: null,
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
