<template>
  <el-menu
    :default-active="'/index'"
    router
    mode="horizontal"
    background-color="white"
    text-color="#222"
    active-text-color="red"
    style="min-width: 1300px"
  >
    <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">{{ item.navItem }}</el-menu-item>
    <a href="#nowhere" style="color: #222;float: right;padding: 20px;">More</a>
    <i class="el-icon-menu" style="float:right;font-size: 45px;color: #222;padding-top: 8px"></i>
    <i
      class="el-icon-switch-button"
      v-on:click="logout"
      style="float:right;font-size: 40px;color: #222;padding: 10px"
    ></i>
    <span
      style="position: absolute;padding-top: 20px;right: 43%;font-size: 20px;font-weight: bold"
    >White Jotter - Your Mind Palace</span>
    <i
      class="el-icon-switch-button"
      v-on:click="logout"
      style="float:right;font-size: 40px;color: #222;padding: 10px"
    ></i>
  </el-menu>
</template>

<script>
export default {
  // working process;
  name: 'NavMenu',
  data () {
    return {
      navList: [
        { name: '/index', navItem: 'Index' },
        { name: '/jotter', navItem: 'Notebook' },
        { name: '/library', navItem: 'Library' },
        { name: '/admin', navItem: 'Menu' }
      ]
    }
  },
  methods: {
    logout () {
      var _this = this
      this.$axios.get('/logout').then((resp) => {
        if (resp.data.code === 200) {
          _this.$store.commit('logout')
          _this.$router.replace('/index')
        }
      }).catch(failResponse => {})

    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}

span {
  pointer-events: none;
}aster
.el-icon-switch-button {
  cursor: pointer;
  outline: 0;
}
</style>