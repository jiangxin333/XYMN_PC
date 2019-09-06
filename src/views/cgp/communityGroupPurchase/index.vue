<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="进行中/发布中" name="first">
      <!--工具条-->
      <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
        <div class="toolbar_box">
        <el-form :inline="true" :model="filters1">
          <el-form-item>
            <el-input v-model="filters1.name" placeholder="按团购名搜索"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" >搜索</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="toPages('/cgp/addGroupPurchase')">创建团购</el-button>
          </el-form-item>
        </el-form>
        </div>
      </el-col>
      <!--开团详情-->
      <el-table
        :data="tableData"
        style="width: 100%"
        :default-sort = "{prop: 'date', order: 'descending'}"
      >
        <el-table-column
          prop="title"
          label="团购名称"
          min-width="180"
          sortable>
        </el-table-column>
        <el-table-column
          prop="byDate"
          label="起止日期"
          min-width="180"
          sortable>
        </el-table-column>
        <el-table-column
          prop="groupPurchaseType"
          label="团购类型"
          sortable>
        </el-table-column>
        <el-table-column
          prop="participatedCommunity"
          label="已参团社区"
          sortable>
        </el-table-column>
        <el-table-column
          label="更多" min-width="180">
          <template slot-scope="scope">
            <el-button size="small" >编辑</el-button>
            <el-button size="small" @click="toPages('/cgp/particulars')">开团详情</el-button>
            <el-button size="small" type="danger" >结束活动
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
    </el-tab-pane>
    <el-tab-pane label="草稿" name="second">
      <!--工具条-->
      <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
        <el-form :inline="true" :model="filters1">
          <el-form-item>
            <el-input v-model="filters1.name" placeholder="按团购名搜索"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" >搜索</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="toPages('/cgp/addGroupPurchase')">创建团购</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <!--开团详情-->
      <el-table
        :data="tableData"
        style="width: 100%"
        :default-sort = "{prop: 'date', order: 'descending'}"
      >
        <el-table-column
          prop="title"
          label="团购名称"
          min-width="180"
          sortable>
        </el-table-column>
        <el-table-column
          prop="byDate"
          label="起止日期"
          min-width="180"
          sortable>
        </el-table-column>
        <el-table-column
          prop="groupPurchaseType"
          label="团购类型"
          sortable>
        </el-table-column>
        <el-table-column
          prop="participatedCommunity"
          label="已参团社区"
          sortable>
        </el-table-column>
        <el-table-column
          label="更多" min-width="180">
          <template slot-scope="scope">
            <el-button size="small" >编辑</el-button>
            <el-button size="small" >删除</el-button>
            <el-button size="small" >预览</el-button>
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
    </el-tab-pane>
    <el-tab-pane label="预约发布" name="third">
      <!--工具条-->
      <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
        <el-form :inline="true" :model="filters1">
          <el-form-item>
            <el-input v-model="filters1.name" placeholder="按团购名搜索"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" >搜索</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="toPages('/cgp/addGroupPurchase')">创建团购</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <!--开团详情-->
      <el-table
        :data="tableData"
        style="width: 100%"
        :default-sort = "{prop: 'date', order: 'descending'}"
      >
        <el-table-column
          prop="title"
          label="团购名称"
          min-width="180"
          sortable>
        </el-table-column>
        <el-table-column
          prop="byDate"
          label="起止日期"
          min-width="180"
          sortable>
        </el-table-column>
        <el-table-column
          prop="groupPurchaseType"
          label="团购类型"
          sortable>
        </el-table-column>
        <el-table-column
          prop="participatedCommunity"
          label="已参团社区"
          sortable>
        </el-table-column>
        <el-table-column
          label="更多" min-width="180">
          <template slot-scope="scope">
            <el-button size="small" >编辑</el-button>
            <el-button size="small" >取消发布</el-button>
            <el-button size="small" >预览</el-button>
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
    </el-tab-pane>
    <el-tab-pane label="已结束" name="fourth">
      <!--工具条-->
      <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
        <el-form :inline="true" :model="filters1">
          <el-form-item>
            <el-input v-model="filters1.name" placeholder="按团购名搜索"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="toPages('/cgp/addGroupPurchase')">搜索</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" >创建团购</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <!--开团详情-->
      <el-table
        :data="tableData"
        style="width: 100%"
        :default-sort = "{prop: 'date', order: 'descending'}"
      >
        <el-table-column
          prop="title"
          label="团购名称"
          min-width="180"
          sortable>
        </el-table-column>
        <el-table-column
          prop="byDate"
          label="起止日期"
          min-width="180"
          sortable>
        </el-table-column>
        <el-table-column
          prop="groupPurchaseType"
          label="团购类型"
          sortable>
        </el-table-column>
        <el-table-column
          prop="participatedCommunity"
          label="已参团社区"
          sortable>
        </el-table-column>
        <el-table-column
          label="更多" min-width="180">
          <template slot-scope="scope">
            <el-button size="small">再次开团</el-button>
            <el-button size="small" @click="toPages('/cgp/particulars')">开团详情</el-button>
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
    </el-tab-pane>
  </el-tabs>
</template>

<script>
    export default {
        name: "index",
      data(){
          return{
            activeName: 'first',
            filters1:{
              name:""
            },
            pageNum:1,
            pageSize:10,
            total:3,
            tableData:[{
              title:'西域美农229期社群购',
              byDate:'2019-08-31 到 2019-09-01',
              groupPurchaseType:'自提团',
              participatedCommunity:'666个',
            },{
              title:'西域美农228期社群购',
              byDate:'2019-08-30 到 2019-08-31',
              groupPurchaseType:'自提团',
              participatedCommunity:'666个',
            },{
              title:'西域美农227期社群购',
              byDate:'2019-08-29 到 2019-08-30',
              groupPurchaseType:'自提团',
              participatedCommunity:'666个',
            }]
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
      }
    }
</script>

<style lang="scss" scoped>

</style>
