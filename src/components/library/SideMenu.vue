<template>
  <el-menu class="categories" default-active="0" @select="handleSelect" active-text-color="red">
    <el-menu-item index="0">
      <i class="el-icon-menu"></i>
      <span slot="title">All</span>
    </el-menu-item>
    <el-menu-item index="1">
      <i class="el-icon-menu"></i>
      <span slot="title">Literature</span>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">Popular</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-menu"></i>
      <span slot="title">Culture</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-menu"></i>
      <span slot="title">Lifestyle</span>
    </el-menu-item>
    <el-menu-item index="5">
      <i class="el-icon-menu"></i>
      <span slot="title">Humanities</span>
    </el-menu-item>
    <el-menu-item index="6">
      <i class="el-icon-menu"></i>
      <span slot="title">Technology</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'SideMenu',
  data () {
    return {
      cid: ''
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      this.cid = key
      this.$emit('indexSelect')
    }
  }
}
</script>

<style scoped>
.categories {
  position: fixed;
  margin-left: 50%;
  left: -600px;
  top: 100px;
  width: 150px;
}
</style>
