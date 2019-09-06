<template>
  <section>
    <!--工具条-->
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <div class="toolbar_box_right">
        <el-form :inline="true" :model="filters1">
          <el-form-item>
            <el-input v-model="filters1.name" placeholder="按订单号搜索"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">搜索</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="toolbar_box_left">
        <h3>团购名称:西域美农226期社群购买</h3>
        <h3>社区:XA7号线亿润领城</h3>
        <div>
          <span>自提地址：陕西省西安市莲湖区XA7号线亿润领城 - 大庆西路81号亿润领城小区亿润菜鸟驿站</span>
        </div>
      </div>
    </el-col>
    <!--开团详情-->
    <el-table
      :data="tableData"
      style="width: 100%"
      :default-sort="{prop: 'date', order: 'descending'}"
    >
      <el-table-column min-width="100" prop="orderNumber" label="订单号"></el-table-column>
      <el-table-column min-width="100" prop="customer" label="客户"></el-table-column>
      <el-table-column min-width="100" prop="addressee" label="收件人"></el-table-column>
      <el-table-column min-width="100" prop="phone" label="联系方式"></el-table-column>
      <el-table-column min-width="100" prop="goodsNum" label="货物数量"></el-table-column>
      <el-table-column min-width="100" prop="totalAmount" label="合计金额"></el-table-column>
      <el-table-column min-width="100" prop="paymentStatus" label="支付方式"></el-table-column>
      <el-table-column min-width="100" prop="time" label="时间"></el-table-column>
      <el-table-column
        label="更多" width="300">
        <template slot-scope="scope">
          <el-button size="small">详情</el-button>
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
    <div class="deep">
      <el-button type="primary" size="small" @click="goBack">返回</el-button>
    </div>
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
          orderNumber: 'T1909030007963021',
          customer:'大自然',
          addressee: '王爱珍',
          phone:'15209245296',
          goodsNum:'3',
          totalAmount:'¥12345.67',
          paymentStatus:'已支付',
          time:'2019-09-02 13:18:34'
        }, {
          orderNumber: 'T1909030007963002',
          customer:'大自然',
          addressee: '王爱珍',
          phone:'15209245296',
          goodsNum:'3',
          totalAmount:'¥12345.67',
          paymentStatus:'已支付',
          time:'2019-09-02 13:18:34'
        },{
          orderNumber: 'T1909030007963001',
          customer:'大自然',
          addressee: '王爱珍',
          phone:'15209245296',
          goodsNum:'3',
          totalAmount:'¥12345.67',
          paymentStatus:'已支付',
          time:'2019-09-02 13:18:34'
        },],
        value: '',
        tableHeader: [{
          prop: 'orderNumber',
          label: '订单号'
        }, {
          prop: 'customer',
          label: '客户'
        }, {
          prop: 'addressee',
          label: '收件人'
        }, {
          prop: 'phone',
          label: '联系方式'
        }, {
          prop: 'goodsNum',
          label: '货物数量'
        },{
          prop: 'totalAmount',
          label: '合计金额'
        },{
          prop: 'paymentStatus',
          label: '支付方式'
        },{
          prop: 'time',
          label: '时间'
        },]
      }
    },
    methods: {
      //页面跳转
      toPages(path){
        this.$router.push(path)
      },
      //返回上一页
      goBack(){
        this.$router.go(-1)
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
    div{
      clear: both;
    }
  }
</style>
