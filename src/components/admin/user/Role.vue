<template>
  <div>
    <el-dialog title="Change Role Information" :visible.sync="dialogFormVisible">
      <el-form v-model="selectedRole" style="text-align: left" ref="dataForm">
        <el-form-item label="User Name" label-width="120px" prop="username">
          <el-input v-model="selectedRole.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Role Description" label-width="120px" prop="name">
          <el-input v-model="selectedRole.nameZh" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Permissions" label-width="120px" prop="perms">
          <el-checkbox-group v-model="selectedPermsIds">
            <el-checkbox v-for="(perm,i) in perms" :key="i" :label="perm.id">{{perm.desc_}}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="Menus" label-width="120px" prop="menus">
          <el-tree
            :data="menus"
            :props="props"
            show-checkbox
            :default-checked-keys="selectedMenusIds"
            node-key="id"
            ref="tree"
          ></el-tree>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="onSubmit(selectedRole)">OK</el-button>
      </div>
    </el-dialog>
    <el-row style="margin: 18px 0px 0px 18px ">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/admin/dashboard' }">Dashboard</el-breadcrumb-item>
        <el-breadcrumb-item>Users</el-breadcrumb-item>
        <el-breadcrumb-item>Roles</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <role-create @onSubmit="listRoles()"></role-create>
    <el-card style="margin: 18px 2%;width: 95%">
      <el-table :data="roles" stripe style="width: 100%" :max-height="tableHeight">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="id" label="id" width="100"></el-table-column>
        <el-table-column prop="name" label="Name" fit></el-table-column>
        <el-table-column label="Status" width="100">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.enabled"
              active-color="#13ce66"
              inactive-color="#ff4949"
              @change="(value) => commitStatusChange(value, scope.row)"
            ></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="Actions" width="120">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="editRole(scope.row)">Edit</el-button>
            <el-button type="text" size="small">Remove</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="margin: 20px 0 20px 0;float: left">
        <el-button>Remove Selection</el-button>
        <el-button>Bulk Delete</el-button>
      </div>
    </el-card>
  </div>
</template>
