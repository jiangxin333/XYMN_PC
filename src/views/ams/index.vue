<template>
  <section>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="全部订单" name="first">
            <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
              <div class="toolbar_box_left">
                <el-form :inline="true" :model="filters1">
                  <el-form-item label="选择日期">
                    <div class="block">
                      <el-date-picker
                        v-model="value1"
                        type="datetimerange"
                        range-separator="到"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        @change="dateChange"
                      >
                      </el-date-picker>
                    </div>
                  </el-form-item>
                  <el-form-item>
                    <el-input v-model="filters1.name" placeholder="按订单号搜索"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" >搜索</el-button>
                  </el-form-item>
                </el-form>
              </div>
              <div class="toolbar_box_right">
                <el-button type="primary">订单导出</el-button>
              </div>
            </el-col>
        <div class="order_list">
          <div class="order_list_box">
            <div class="order_list_box_top">
              <div class="order_list_box_top_left">
                <div>订单号:T1909040007994977</div>
                <span>日期:2019-09-04 11:42:00</span>
              </div>
              <div class="order_list_box_top_right">
                <div>申请日期: <span>2019-09-04 18:20:00</span> </div>
              </div>
            </div>
            <div class="order_list_box_middle">
              <div class="order_list_box_middle_left">
                <div class="user_box">
                  <img src="../../assets/images/userHead.jpeg" alt="">
                </div>
              </div>
              <div class="order_list_box_middle_right"></div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="待退款" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="退款中" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="已退款" name="fourth">定时任务补偿</el-tab-pane>
      <el-tab-pane label="已驳回" name="fifth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </section>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        activeName: 'first',
        filters1:{
          name:""
        },
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        value1:''
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      //获取起止时间
      dateChange(e){
        if (e!=null){
          this.form.beginTime=e[0];
          this.form.endTime=e[1];
        }
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
  .order_list{
    box-sizing: border-box;
    clear: both;
    .order_list_box{
      border-top: 1px solid gainsboro;
      border-bottom: 1px solid gainsboro;
      .order_list_box_top{
        display: table;
        width: 100%;
        padding: 10px 0;
        font-size: 14px;
        .order_list_box_top_left{
          float: left;
          div{
            float: left;
          }
          span{
            float: left;
            margin-left:80px;
          }
        }
        .order_list_box_top_right{
          float: right;
          span{
            color: #FF9933;
          }
        }
      }
      .order_list_box_middle{
        display: table;
        width: 100%;
        padding: 10px 20px;
        font-size: 14px;
        border-top: 1px solid gainsboro;
        .order_list_box_middle_left{
          float: left;
          .user_box{
            img{
              width: 30px;
              height: 30px;
              -webkit-border-radius: 50%;
              -moz-border-radius: 50%;
              border-radius: 50%;
            }
          }
        }
      }
    }
  }
</style>
