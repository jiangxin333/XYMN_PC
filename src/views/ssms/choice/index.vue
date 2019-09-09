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
					<div class="grid-content bg-purple bg-purple-box1">
						<span>选择日期:&nbsp;</span>
						<el-date-picker v-model="dataVal" type="daterange" range-separator="~" start-placeholder="开始日期" end-placeholder="结束日期">
						</el-date-picker>
					</div>
				</el-col>
				<el-col :span="8">
					<div class="grid-content bg-purple">
						<span>选择路线:&nbsp;</span>
						<el-dropdown @command="handleCommand">
							<p class="select-box">
								<span>全部</span>
								<span class="el-dropdown-link">
									<i class="el-icon-arrow-down el-icon--right"></i>
								</span>
							</p>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item command="a">重庆</el-dropdown-item>
								<el-dropdown-item command="b">北京</el-dropdown-item>
								<el-dropdown-item command="c">上海</el-dropdown-item>
								<el-dropdown-item command="d" disabled>广州</el-dropdown-item>
								<el-dropdown-item command="e" divided>深圳</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</div>
				</el-col>
			</el-row>
		</div>
		<div class="Content-box">
			<div class="centen-header">
				<el-checkbox class="sp-0" :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
				<span class="sp-1">商品名称</span>
				<span class="sp-2">规格</span>
				<span class="sp-3">库存量</span>
				<span class="sp-4">需求量</span>
			</div>
			<div style="margin: 15px 0;"></div>
			<el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
				<el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
			</el-checkbox-group>
		</div>
	</div>
</template>

<script>
	const cityOptions = ['上海', '北京', '广州', '深圳'];
	export default {
		name: "index",
		data() {
			return {
				dataVal: '',
				checkAll: false,
				checkedCities: cityOptions,
				cities: ['上海', '北京', '广州', '深圳'],
				isIndeterminate: true
			}
		},
		methods: {
			handleCommand(command) {
				this.$message('click on item ' + command);
			},
			handleCheckAllChange(val) {
				this.checkedCities = val ? cityOptions : [];
				this.isIndeterminate = false;
			},
			handleCheckedCitiesChange(value) {
				let checkedCount = value.length;
				this.checkAll = checkedCount === this.cities.length;
				this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
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

	.select-box {
		width: 270px;
		height: 40px;
		line-height: 40px;
		border: 1px solid #eee;
		border-radius: 4px;
		padding: 2px 10px;
		display: flex;
		justify-content: space-between;
		font-size: 12px;
		color: #eee;
	}

	.bg-purple {
		text-align: right;
	}

	.bg-purple-box1 {
		padding-top: 12px;
	}
	
	/* 主要内容区域 */
	.Content-box {
		margin-top: 20px;
		width: 100%;
		background: pink;
	}
	.centen-header {
		display: flex;
	}
	.centen-header .sp-0 {
		flex: 2;
	}
	.centen-header .sp-1 {
		flex: 3;
	}
	
	.centen-header .sp-2 {
		flex: 4;
	}
	.centen-header .sp-3 {
		flex: 6;
	}
	.centen-header .sp-4 {
		flex: ;
	}
</style>
