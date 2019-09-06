<template>
  <!-- 新增商品 -->
  <div class="new-product">
    <div class="type-1">
      <span>封面图片：</span>
      <div class="el-upload-box">
          +
        <p>上传图片</p>
      </div>
      <span>上传1张商品团购列表页图片，图片大小不超过1M图片推荐比例750*420像素仅支持.jpg、.png格式 </span>
    </div>
    <!-- 分割线 -->
    <div class="common type-2">
      <p>商品名称:</p>
      <el-input placeholder="创建活动名称（必填）" size="mini" v-model="input1"> </el-input>
    </div>
    <div class="common type-3">
      <p>商品名称:</p>
      <el-input placeholder="添加商品规格" size="mini" v-model="input2"></el-input>
    </div>
    <div class="common type-4">
      <p>佣金比例:</p>
      <el-input size="mini" v-model="input3"></el-input>
    </div>
    <div class="common type-5">
      <p>团购价格:</p>
      <el-input size="mini" v-model="input3"></el-input>
    </div>
    <div class="common type-6">
      <p>零售价格:</p>
      <el-input size="mini" v-model="input3"></el-input>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input1: '',
        input2: '',
        input3: ''
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  .type-1 {
    padding: 1px;
  }
  .el-upload-box {
    display: inline-block;
    width: 80px;
    height: 80px;
    border: 1px dashed #dfdfdf;
    line-height: 50px;
    text-align: center;
  }
.el-upload-box p {
  display: inline-block;
  font-size: 10px;
}
.type-1 span {
  display: inline-block;
  width: 100px;
  font-size: 10px;
  margin-top: 40px;

}

/* 分割线 */

.type-2 .el-input {
  width: 340px;
}
.type-3 .el-input {
  width: 340px;
}
.type-4 .el-input {
  width: 90px;
}

.common {
  display: flex;
  align-items: center;
}
.common p {
  width: 100px;
  font-size: #272727;
  font-size: 14px;
}
</style>
