/* eslint-disable */

<template>
  <div>
    Username:
    <input type="text" v-model="loginForm.username" placeholder="Enter your username" />
    <br />
    <br />Password:
    <input type="password" v-model="loginForm.password" placeholder="Password" />
    <br />
    <br />
    <button v-on:click="login">Login</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      responseResult: []
    }
  },
  methods: {
    login () {
      this.$axios
        .post('/login', {
          username: this.loginForm.username,
          password: this.loginForm.password
        })
        .then(successResponse => {
          if (successResponse.data.code === 200) {
            this.$router.replace({ path: '/index' })
          }
        })
        .catch(failResponse => {})
    }
  }
}
</script>
