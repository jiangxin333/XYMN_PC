<template>
  <div class="addCard" :style="addCardStyle">
    <div class="header-search">
      <el-input size="mini" placeholder="按商品名称搜索" suffix-icon="el-icon-search" v-model="searchMsg"></el-input>
      <span class="search-text" @click="search">搜索</span>
    </div>
    <div class="content-box">
      <div class="title-el-row">
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="2">
            <div class="grid-content bg-purple"></div>
          </el-col>
          <el-col :span="7">
            <div class="grid-content bg-purple">商品名称</div>
          </el-col>
          <el-col :span="7">
            <div class="grid-content bg-purple-light">规格</div>
          </el-col>
          <el-col :span="7">
            <div class="grid-content bg-purple"></div>商品分类
          </el-col>
        </el-row>
      </div>
      <el-row v-for="(item,index) in commodityLsit" :key="index" type="flex" class="row-bg" justify="space-around">
        <el-col :span="2">
          <div class="grid-content bg-purple">
            <el-checkbox></el-checkbox>
          </div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content bg-purple-light">{{item.name}}</div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content bg-purple">{{item.Specifications}}</div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content bg-purple">{{item.type}}</div>
        </el-col>
      </el-row>
    </div>
    <div class="pagination">
      <el-pagination background :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="prev, pager, next, sizes, jumper" :total="250">
      </el-pagination>
      <div style="text-align: center;">
        <el-button>返回</el-button>
        <el-button type="primary">添加</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        addCardStyle: {
          height: window.innerHeight - 100 + 'px'
        },
        searchMsg: '',
        //商品列表数据
        commodityLsit: [{
            name: '【嘎嘣脆爽】大荔冬枣',
            Specifications: '1500g±50g/箱泡沫箱装',
            type: '商品分类1'
          },
          {
            name: '【嘎嘣脆爽】大荔冬枣',
            Specifications: '1500g±50g/箱泡沫箱装',
            type: '-'
          },
          {
            name: '【嘎嘣脆爽】大荔冬枣',
            Specifications: '1500g±50g/箱泡沫箱装',
            type: '-'
          },
        ]
      }
    },
    methods: {
      search() {
        console.log(132);
      }
    }
  }
</script>

<style scoped>
  .addCard {
    overflow: hidden;
    padding: relative;
  }

  .header-search {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .el-input {
    width: 350px;
  }

  .search-text {
    width: 50px;
    color: #169bd5;
    margin-left: 10px;
  }

  .content-box {
    margin-top: 10px;
  }

  .el-row {
    text-align: center;
    padding: 10px 0;
    border-bottom: 1px solid #d7d7d7;
  }

  .title-el-row {
    background-color: #d7d7d7;
    border-radius: 4px;
  }

  .pagination {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
  }

  .el-button {
    margin: 15px 100px;
    height: 30px;
    line-height: 5px;
  }
</style>
