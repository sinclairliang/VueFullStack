<template>
  <el-upload
    class="img-upload"
    ref="upload"
    action="http://localhost:8098/api/covers"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :file-list="fileList"
  >
    <el-button size="small" type="primary">Upload</el-button>
    <div slot="tip" class="el-upload__tip">jpg/png files, 500 Kib max</div>
  </el-upload>
</template>

<script>
export default {
  name: 'ImgUpload',
  data () {
    return {
      fileList: [],
      url: ''
    }
  },
  methods: {
    handleRemove (file, fileList) {},
    handlePreview (file) {},
    handleExceed (file, fileList) {
      this.$message.warning(
        `The limit is 1, you selected ${
          file.length
        } files this time, add up to ${file.length + fileList.length} totally`
      )
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`Cancel the transfert of ${file.name} ?`)
    },
    handleSeccess (response) {
      this.url = response
      this.$emit('onUpload')
      this.$message.warning('Uploaded')
    },
    clear () {
      this.$refs.upload.clearFiles()
    }
  }
}
</script>
