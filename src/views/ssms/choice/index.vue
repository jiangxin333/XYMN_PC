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
            <span>选择日期</span>
           <el-date-picker
                 v-model="dataVal"
                 type="daterange"
                 range-separator="~"
                 start-placeholder="开始日期"
                 end-placeholder="结束日期">
               </el-date-picker>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <span>选择路线</span>
           <el-dropdown @command="handleCommand">
             <span class="el-dropdown-link">
               <i class="el-icon-arrow-down el-icon--right"></i>
             </span>
             <el-dropdown-menu slot="dropdown">
               <el-dropdown-item command="a">黄金糕</el-dropdown-item>
               <el-dropdown-item command="b">狮子头</el-dropdown-item>
               <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
               <el-dropdown-item command="d" disabled>双皮奶</el-dropdown-item>
               <el-dropdown-item command="e" divided>蚵仔煎</el-dropdown-item>
             </el-dropdown-menu>
           </el-dropdown>
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
    methods:{
       handleCommand(command) {
              this.$message('click on item ' + command);
            }
    }
  }
</script>

<style scoped>
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
  }

  .header-title>span {
    font-size: 14px;
  }
</style>
