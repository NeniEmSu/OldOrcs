<template>
  <div class="mb-4">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
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
</template>

<script>
export default {
  data() {
    return {
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
      isValid: false,
      addLoading: false,
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
  },

  methods: {
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
          this.$emit('Call-Get-All-Jobs')
          // this.getAllJobs()
          this.addLoading = false
          this.$swal('Success', 'New Service Added', 'success')
        })
        .catch((err) => {
          this.addLoading = false
          this.$swal('Error', `Something Went wrong, \n Error: ${err}`, 'error')
        })
    },
  },
}
</script>

<style lang="scss" scoped></style>
