<template>
  <el-upload
    class="img-upload"
    ref="upload"
    action="http://localhost:8098/api/covers"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    :on-success="handleSuccess"
    multiple
    :limit="1"
    :on-exceed="handleExceed"
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
        `More than one file is slected, you  have already selected  ${
          file.length
        }, totaled ${file.length + fileList.length} files`
      )
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`Are you sure to remove ${file.name}?`)
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
