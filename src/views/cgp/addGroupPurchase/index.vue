<template>
  <el-form ref="form" :model="form" label-width="100px">
    <h2>基础信息</h2>
    <el-form-item label="团购名称">
      <el-input v-model="form.name" placeholder="创建团购名称(必填)"></el-input>
    </el-form-item>
    <el-form-item label="团购描述">
      <el-input type="textarea" v-model="form.describe" placeholder="创建团购名称(必填)"></el-input>
    </el-form-item>
    <h2>团购设置</h2>
    <el-form-item label="成团条件">
      <el-radio-group v-model="form.condition">
        <el-radio label="无条件"></el-radio>
        <el-radio label="按金额">
          <el-input v-model="form.price" size="mini" style="width: 100px;" placeholder="按金额"></el-input>
        </el-radio>
        <el-radio label="按人数">
          <el-input v-model="form.peoNum" size="mini" style="width: 100px;" placeholder="按人数"></el-input>
        </el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="活动海报">
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
        :on-success="handleAvatarSuccess"
        :limit="1">
        <i class="el-icon-plus avatar-uploader-icon"></i>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-upload>
      <div></div>
    </el-form-item>
    <el-form-item label="广告位图片">
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
        :on-success="handleAvatarSuccess"
        :limit="5">
        <i class="el-icon-plus avatar-uploader-icon"></i>
        <el-dialog :visible.sync="dialogVisible1">
          <img width="100%" :src="dialogImageUrl1" alt="">
        </el-dialog>
      </el-upload>
    </el-form-item>
    <el-form-item label="活动时间">
      <el-col :span="11">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="即时配送">
      <el-switch v-model="form.delivery"></el-switch>
    </el-form-item>
    <el-form-item label="活动性质">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
        <el-checkbox label="地推活动" name="type"></el-checkbox>
        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="特殊资源">
      <el-radio-group v-model="form.resource">
        <el-radio label="线上品牌商赞助"></el-radio>
        <el-radio label="线下场地免费"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="活动形式">
      <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        form: {
          name: '',
          describe: '',
          condition: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          price: '',
          peoNum: '',
          desc: '',
          imageUrl: '',
          bannerList:[]
        },
        dialogImageUrl: '',
        dialogVisible: false,
        dialogImageUrl1: '',
        dialogVisible1: false
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleAvatarSuccess(res, file) {
        this.form.imageUrl = URL.createObjectURL(file.raw);
      },
    }
  }
</script>

<style lang="scss" scoped>
  h2 {
    font-weight: normal;
    color: #999999;
  }

  .avatar-uploader {
    .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
    border: 1px dashed #d9d9d9;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
