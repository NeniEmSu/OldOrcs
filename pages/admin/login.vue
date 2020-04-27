<template>
  <div class="container my-5">
    <form @submit.prevent="performLogin()">
      <div class="form-group">
        <label for="username">Username</label>
        <input
          id="username"
          v-model="username"
          type="text"
          class="form-control"
          name="username"
          aria-describedby="username"
          placeholder="Username"
          required
          autofocus
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          type="password"
          class="form-control"
          name="password"
          placeholder="Password"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
/* eslint-disable no-console */
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async performLogin() {
      try {
        const response = await this.$auth.loginWith('local', {
          data: {
            username: this.username,
            password: this.password
          }
        })
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
