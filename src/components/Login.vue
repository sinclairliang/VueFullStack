<template>
  <div>
      Username: <input type="text" v-model="loginForm.username" placeholder="Username"/>
      <br><br>
      Password: <input type="password" v-model="loginForm.password" placeholder="Password"/>
      <br><br>
      <button v-on:click="login">Login</button>
      <span>{{responseResult}}</span>
  </div>
</template>

<script>
import qs from 'qs'

export default {
  name: 'Login',
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
        .post('/login', qs.stringify({
          username: this.loginForm.username,
          password: this.loginForm.password
        }))
        .then(successResponse => {
          console.log(successResponse)
          if (successResponse.data.code === 200) {
            this.$router.replace({path: '/index'})
          } else {
            this.responseResult = successResponse.data.code
          }
        })
        .catch(failResponse => {
        })
    }
  }
}
</script>
