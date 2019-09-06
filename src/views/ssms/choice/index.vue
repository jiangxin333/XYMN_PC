<template>
  <!-- 备货管理 -->
  <div class="choice-box">
    <div class="header-title">
      <span>备货管理</span>
      <div class="btn">
        <el-button type="primary">按社区导出</el-button>
        <el-button type="primary">按社区导入</el-button>
      </div>
    </div>
    <!-- 选择时间选择路线 -->
    <div class="Choice-timer">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">&nbsp;</div>
        </el-col>
        <el-col :span="10">
          <div class="grid-content bg-purple">
            <span>选择日期:</span>
            <el-date-picker v-model="dataVal" type="daterange" range-separator="~" start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <span>选择路线:</span>
            <p class="drop-down"><span>全部</span><i class="el-icon-arrow-down"></i></p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        dataVal: ''
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  * {
    padding: 0;
    margin: 0;
  }
  .choice-box {
    padding: 0 20px;
  }

  .header-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .btn .el-button {
    height: 30px;
    line-height: 5px;
    padding: 5px;
  }

  .Choice-timer {
    margin-top: 30px;
  }

  .header-title>span {
    font-size: 14px;
  }

  .grid-content {
    display: flex;
    align-items: center;
  }

  .drop-down {
    border: 1px solid #dcdfe6;
    width: 60%;
    height: 38px;
    line-height: 38px;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    padding: 0 5px;
    color: #606266;
    border-radius: 4px;
  }
  .el-icon-arrow-down {
    margin-top: 12px;
    color: #606266;
  }
</style>
