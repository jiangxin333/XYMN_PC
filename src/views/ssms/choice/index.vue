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
								<input type="text" style="outline: none;border: none;" placeholder="全部" v-model="CommandMsg">
								<span class="el-dropdown-link">
									<i class="el-icon-arrow-down el-icon--right"></i>
								</span>
							</p>
							<el-dropdown-menu slot="dropdown" style="width: 200px;">
								<el-dropdown-item command="重庆">重庆</el-dropdown-item>
								<el-dropdown-item command="北京">北京</el-dropdown-item>
								<el-dropdown-item command="上海">上海</el-dropdown-item>
								<el-dropdown-item command="广州">广州</el-dropdown-item>
								<el-dropdown-item command="深圳" divided>深圳</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</div>
				</el-col>
			</el-row>
		</div>
		<div class="Content-box">
			<div style="margin: 15px 0;"></div>
			<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
				<el-table-column type="selection" width="55">
				</el-table-column>
				<el-table-column label="商品名称">
					<template slot-scope="scope">{{ scope.row.product_name }}</template>
				</el-table-column>
				<el-table-column prop="specification" label="规格">
				</el-table-column>
				<el-table-column prop="stock" label="库存量" show-overflow-tooltip width="200">
				</el-table-column>
				<el-table-column prop="demand" label="需求量" show-overflow-tooltip width="200">
				</el-table-column>
			</el-table>
		</div>
		<!-- 底部分页器 -->
		<div class="footer-pagination">
			    <el-pagination
				  class="pagination1"
			      @size-change="changePage"
			      @current-change="dangqianPage"
			      :current-page="currentPage4"
			      :page-sizes="[10, 20, 30, 40]"
			      :page-size="100"
			      layout="total, sizes, prev, pager, next, jumper"
			      :total="100">
			    </el-pagination>
		</div>
	</div>
</template>

<script>
	export default {
		name: "index",
		data() {
			return {
				dataVal: '',
				checkAll: false,
				currentPage4: 4,
				isIndeterminate: true,
				CommandMsg: '',
				tableData: [{
					product_name: '【爱上烘焙】葡式蛋挞液',//产品名称
					specification: '907g/瓶',//规格
					stock: '1518',//库存量
					demand: '123'
				}, {
					product_name: '【爱上烘焙】葡式蛋挞液',//产品名称
					specification: '907g/瓶',//规格
					stock: '1518',//库存量
					demand: '123'
				}, {
					product_name: '【爱上烘焙】葡式蛋挞液',//产品名称
					specification: '907g/瓶',//规格
					stock: '1518',//库存量
					demand: '123'
				}, {
					product_name: '【爱上烘焙】葡式蛋挞液',//产品名称
					specification: '907g/瓶',//规格
					stock: '1518',//库存量
					demand: '123'
				}, {
					product_name: '【爱上烘焙】葡式蛋挞液',//产品名称
					specification: '907g/瓶',//规格
					stock: '1518',//库存量
					demand: '123'
				}, {
					product_name: '【爱上烘焙】葡式蛋挞液',//产品名称
					specification: '907g/瓶',//规格
					stock: '1518',//库存量
					demand: '123'
				}, {
					product_name: '【爱上烘焙】葡式蛋挞液',//产品名称
					specification: '907g/瓶',//规格
					stock: '1518',//库存量
					demand: '123'
				}],
				multipleSelection: []//选择的数据数组
			}
		},
		methods: {
			handleCommand(command) {
				this.CommandMsg = command;
			},
			handleCheckedCitiesChange(value) {
				let checkedCount = value.length;
				this.checkAll = checkedCount === this.cities.length;
				this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
			},
			toggleSelection(rows) {
				if (rows) {
					rows.forEach(row => {
						this.$refs.multipleTable.toggleRowSelection(row);
					});
				} else {
					this.$refs.multipleTable.clearSelection();
				}
			},
			handleSelectionChange(val) {
				this.multipleSelection = val;
				console.log('选项发生变化出发');
			},
			// 每条页数改变的时候触发
			changePage() {
				console.log('每条页数改变')
			},
			// 当前页改变时触发
			dangqianPage() {
			console.log('当前页改变')
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
	/* 底部分页器 */
	.footer-pagination {
		position: relative;
		top: 100px;
		left: 0;
		width: 100%;
		height: 100px;
	}
	.pagination1 {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
</style>
