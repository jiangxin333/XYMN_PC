<template>
  <section>
    <!--工具条-->
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <div class="toolbar_box_right">
        <el-form :inline="true" :model="filters1">
          <el-form-item>
            <el-input v-model="filters1.name" placeholder="按社区名称搜索"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">搜索</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">统计销量</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="toolbar_box_left">
        <h3>已成团订单总数/总金额：12846/¥665688.75</h3>
        <h3>已参团社区：666个</h3>
        <div>
          <span>未成团订单总数/总金额：0/¥0.00</span>
        </div>
      </div>
    </el-col>
    <!--开团详情-->
    <el-table
      :data="tableData"
      style="width: 100%"
      :default-sort="{prop: 'date', order: 'descending'}"
    >
      <el-table-column min-width="100" label="社区名称" prop="title"></el-table-column>
      <el-table-column min-width="100" label="合伙人" prop="name"></el-table-column>
      <el-table-column min-width="100" label="已成团订单数/金额" prop="alreadyRegiment"></el-table-column>
      <el-table-column min-width="100" label="未成团订单数/金额" prop="notRegiment"></el-table-column>
      <el-table-column min-width="100"
                       v-for="(item,index) in tableHeader"
                       :render-header="(h) => renderHeaderA(h,index - 4,item.prop)"
                       v-if="index == 4"
                       :key="index"
                       :prop="item.prop"
                       align="center"
                       :lable="item.label"
                       class-name="condition_header"
      ></el-table-column>
      <el-table-column
        label="更多" width="300">
        <template slot-scope="scope">
          <el-button size="small">链接</el-button>
          <el-button size="small" @click="toPages('/ams/detailedOrder')">团购订单明细</el-button>
          <el-button size="small" type="danger">结束活动
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      style="margin-top: 20px;"
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      layout="total,sizes,prev,pager,next,jumper"
      :page-size="pageSize"
      :page-sizes="[5,10,15]"
      :current-page.sync="pageNum"
      :total="tableData.length">
    </el-pagination>
  </section>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        activeName: 'first',
        filters1: {
          name: ""
        },
        pageNum: 1,
        pageSize: 10,
        total: 3,
        tableData: [{
          title: '融尚中央住区',
          name:'森森',
          alreadyRegiment: '88个/12345.78元',
          notRegiment:'0个',
          condition:'无',
        }, {
          title: 'XA恒大城阳光馨苑',
          name:'马红梅',
          alreadyRegiment: '88个/12345.78元',
          notRegiment:'0个',
          condition:'无',
        },{
          title: '边防学院北门快递点',
          name:'梁燕',
          alreadyRegiment: '88个/12345.78元',
          notRegiment:'0个',
          condition:'188.88元成团',
        },{
          title:'XA7号线亿润领城',
          name:'王欢',
          alreadyRegiment: '88个/12345.78元',
          notRegiment:'0个',
          condition:'10人成团',
        }],
        options: [{
          value: 'all',
          label: '全部'
        }, {
          value: 'nothing',
          label: '无条件'
        }, {
          value: 'price',
          label: '按金额'
        }, {
          value: 'peoNom',
          label: '按人数'
        },],
        value: '',
        tableHeader: [{
          prop: 'title',
          label: '社区名称'
        }, {
          prop: 'name',
          label: '合伙人'
        }, {
          prop: 'alreadyRegiment',
          label: '已成团订单数/金额'
        }, {
          prop: 'notRegiment',
          label: '未成团订单数/金额'
        }, {
          prop: 'condition',
          label: '条件'
        },],
        chooseHead: {
          condition: '',
        },
        startStatus: ['条件']
      }
    },
    methods: {
      //页面跳转
      toPages(path){
        this.$router.push(path)
      },
      //tabs选项卡切换触发时间
      handleClick(tab, event) {
        console.log(tab, event);
      },
      //调整分页每页展示数量
      handleSizeChange(val) {
        this.pageNum = 1;
        this.pageSize = val;
      },
      //切换分页
      handleCurrentChange(val) {
        this.pageNum = val;
      },
      //自定义下拉框表头
      renderHeaderA (h, index, prop) {
        let filters = [];
        switch (index) {
          case 0:
            filters = [{
              value: '',
              text: '条件'
            },{
              value: 'all',
              text: '全部'
            }, {
              value: 'nothing',
              text: '无条件'
            }, {
              value: 'price',
              text: '按金额'
            }, {
              value: 'peoNom',
              text: '按人数'
            },];
            break;
          default:
            break
        }
        return h('div', [
          h('el-select', {
            on: {
              input: (value) => {
                this.chooseHead[prop] = value
              }
            },
            props: {
              value: this.chooseHead[prop] || this.startStatus[index]
            }}, [
            filters.map(item => {
              return h('el-option', {
                props: {
                  value: item.value,
                  label: item.text
                }
              })
            })])
        ])
      },
    }
  }
</script>

<style lang="scss" scoped>
  .toolbar_box_right{
    float: right;
  }
  .toolbar_box_left{
    float: left;
    h3{
      float: left;
    }
    h3:nth-child(2){
      margin-left: 100px;
    }
  }
  .condition_header{
    .cell{
      div{
        .el-select{
          border: 1px solid black;
          .el-input--suffix{
            .el-input__inner{
              border: none;
            }
          }
          .el-table th div{
            line-height: 0;
          }
        }
      }
    }
  }
</style>
