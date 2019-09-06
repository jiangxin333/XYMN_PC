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
        :before-upload="beforeAvatarUpload"
        :limit="1">
        <i class="el-icon-plus avatar-uploader-icon"></i>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-upload>
      <div class="active_img_tip">只能上传一张团购海报图片，

        图片大小不超过3M

        图片推荐比例375*150像素

        仅支持.jpg、.png格式</div>
    </el-form-item>
    <el-form-item label="广告位图片">
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture"
        :on-preview="handlePictureCardPreview1"
        :on-remove="handleRemove1"
        :on-success="handleAvatarSuccess1"
        :before-upload="beforeAvatarUpload1"
        :limit="5">
        <i class="el-icon-plus avatar-uploader-icon"></i>
        <el-dialog :visible.sync="dialogVisible1">
          <img width="100%" :src="dialogImageUrl1" alt="">
        </el-dialog>
      </el-upload>
      <div class="active_img_tip">
        至多上传五张团购海报图片，
        图片大小不超过3M
        图片推荐比例375*150像素
        仅支持.jpg、.png格式
      </div>
      <div class="active_radio">
        <el-radio-group v-model="form.condition">
          <el-radio label="添加链接">
            <el-input v-model="form.peoNum" size="mini" placeholder="添加链接"></el-input>
          </el-radio>
          <el-radio label="无链接"></el-radio>
        </el-radio-group>
      </div>
    </el-form-item>
    <el-form-item label="消息推送">
      <el-radio-group v-model="form.condition">
        <el-radio label="开团后推送至合伙人"></el-radio>
        <el-radio label="不进行消息推送"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="参团情况">
      <el-radio-group v-model="form.condition">
        <el-radio label="显示用户实时参团下单情况"></el-radio>
        <el-radio label="不显示用户参团下单情况"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="参团金额">
      <el-input style="width: 200px;" v-model="form.joinPrice" placeholder="默认为0"></el-input>
    </el-form-item>
    <el-form-item label="团购时间">
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
    <el-form-item label="参团社区">
      <el-select v-model="form.communityList" filterable multiple placeholder="请选择">
        <el-option
          v-for="item in communityList"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <h2>团购商品</h2>
    <el-form-item label="添加团购商铺">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          label="名称"
          prop="name">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
          label="规格"
          prop="norms"
        >
        </el-table-column>
        <el-table-column
          prop="retailPrice"
          label="零售价"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="retailPrice"
          label="团购价"
          show-overflow-tooltip>
          <template slot-scope="scope">
            <el-input  v-model="scope.row.groupBuy" placeholder="请输入价格"></el-input>
          </template>
        </el-table-column>
        <el-table-column
          prop="retailPrice"
          label="更多"
          show-overflow-tooltip>
          <template slot-scope="scope">
            <el-button type="danger" size="small" >移除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-form-item>
    <el-form-item>
      <el-button>保存草稿</el-button>
      <el-button>预约发布</el-button>
      <el-button>立即发布</el-button>
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
          beginTime: '',
          endTime:'',
          type: [],
          price: '',
          joinPrice:'',
          peoNum: '',
          imageUrl: '',
          bannerList:[],
          communityList:[]
        },
        dialogImageUrl: '',
        dialogVisible: false,
        dialogImageUrl1: '',
        dialogVisible1: false,
        value1:'',
        value2:'',
        communityList: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        tableData: [{
          name: '[脆甜]鞍山大荔枝',
          norms:'1500g±50g/箱泡沫箱装',
          retailPrice:'￥78.00',
          groupBuy:'45.00'
        }, {
          name: '[脆甜]鞍山大荔枝',
          norms:'1500g±50g/箱泡沫箱装',
          retailPrice:'￥78.00',
          groupBuy:'45.00'
        }, {
          name: '[脆甜]鞍山大荔枝',
          norms:'1500g±50g/箱泡沫箱装',
          retailPrice:'￥78.00',
          groupBuy:'45.00'
        },],
      }
    },
    methods: {
      //提交
      onSubmit() {
        console.log('submit!');
      },
      //删除海报
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      //预览海报
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      //上传海报成功后回调
      handleAvatarSuccess(res, file) {
        this.form.imageUrl = URL.createObjectURL(file.raw);
      },
      //限制海报上传文件与文件大小
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg'||file.type === 'image/png';
        const isLt2M = file.size / 1024 / 1024 < 3;

        if (!isJPG) {
          this.$message.error('上传图片只能是 JPG 或 PNG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传图片大小不能超过 3MB!');
        }
        return isJPG && isLt2M;
      },
      //删除广告
      handleRemove1(file, fileList) {
        console.log(file, fileList);
      },
      //预览广告
      handlePictureCardPreview1(file) {
        this.dialogImageUrl1 = file.url;
        this.dialogVisible1 = true;
      },
      //上传广告成功后回调
      handleAvatarSuccess1(res, file) {
        this.form.bannerList.push(URL.createObjectURL(file.raw));
      },
      //限制上传广告格式与大小
      beforeAvatarUpload1(file) {
        const isJPG = file.type === 'image/jpeg'||file.type === 'image/png';
        const isLt2M = file.size / 1024 / 1024 < 3;

        if (!isJPG) {
          this.$message.error('上传图片只能是 JPG 或 PNG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传图片大小不能超过 3MB!');
        }
        return isJPG && isLt2M;
      },
      //获取起止时间
      dateChange(e){
        if (e!=null){
          this.form.beginTime=e[0];
          this.form.endTime=e[1];
        }
      },
      //添加商品时:全选改变
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
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
    width: 150px;
    height: 150px;
    line-height: 150px;
    text-align: center;
    border: 1px dashed #d9d9d9;
  }

  .avatar {
    width: 150px;
    height: 150px;
    display: block;
  }
  .active_img_tip{
    position: absolute;
    top: 0;
    left: 200px;
    width: 200px;
    line-height: 20px;
    color: #999999;
  }
  .active_radio{
    position: absolute;
    top: 100px;
    left: 200px;
    line-height: 20px;
    color: #999999;
  }
</style>
