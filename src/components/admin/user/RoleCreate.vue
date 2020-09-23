<template>
  <div style="text-align: left">
    <el-button class="add-button" type="success" @click="dialogFormVisible = true">Create Role</el-button>
    <el-dialog title="Create Role" :visible.sync="dialogFormVisible" @close="clear" width="25%">
      <el-form
        :model="roleForm"
        :rules="rules"
        label-position="left"
        label-width="0px"
        v-loading="loading"
      >
        <el-form-item prop="name">
          <el-input type="text" v-model="roleForm.name" auto-complete="off" placeholder="Name"></el-input>
        </el-form-item>
        <el-form-item style="width: 100%">
          <el-button
            type="primary"
            style="width: 40%;background: #505458;border: none"
            v-on:click="createRole"
          >Add</el-button>
        </el-form-item>
        <el-form-item prop="username">
          <el-tag>Initial Permissions: None</el-tag>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
