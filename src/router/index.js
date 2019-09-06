import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
export const constantRouterMap = [
  {path: '/login', component: () => import('@/views/login/index'), hidden: true},
  {path: '/404', component: () => import('@/views/404'), hidden: true},
  {
    path: '',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'home',
      component: () => import('@/views/home/index'),
      meta: {title: '首页', icon: 'home'}
    }]
  },
  {
    path: '/cgp',
    component: Layout,
    redirect: '/cgp/communityGroupPurchase',
    name: 'cgp',
    meta: {title: '社区团购', icon: 'home'},
    children: [{
      path: 'communityGroupPurchase',
      name: 'communityGroupPurchase',
      component: () => import('@/views/cgp/communityGroupPurchase/index'),
      meta: {title: '社区团购', icon: 'product-list'}
    },{
      path: 'addGroupPurchase',
      name: 'addGroupPurchase',
      component: () => import('@/views/cgp/addGroupPurchase/index'),
      meta: {title: '创建团购', icon: 'product-list'}
    }]
  },
  {
    path: '/pms',
    component: Layout,
    redirect: '/pms/product',
    name: 'pms',
    meta: {title: '商品管理', icon: 'product'},
    children: [{
      path: 'product',
      name: 'product',
      component: () => import('@/views/pms/product/index'),
      meta: {title: '新增商品', icon: 'product-list'}
    },
      {
        path: 'addProduct',
        name: 'addProduct',
        component: () => import('@/views/pms/product/add'),
        meta: {title: '添加商品', icon: 'product-list'}
      },
      {
        path: 'updateProduct',
        name: 'updateProduct',
        component: () => import('@/views/pms/product/update'),
        meta: {title: '修改商品', icon: 'product-list'},
        hidden: true
      },
      {
        path: 'productRecycle',
        name: 'productRecycle',
        component: () => import('@/views/pms/product/index'),
        meta: {title: '商品回收站', icon: 'product-list'},
        hidden: true
      },
      {
        path: 'productComment',
        name: 'productComment',
        component: () => import('@/views/pms/product/index'),
        meta: {title: '商品评价', icon: 'product-list'},
        hidden: true
      },
      {
        path: 'productCate',
        name: 'productCate',
        component: () => import('@/views/pms/productCate/index'),
        meta: {title: '商品分类', icon: 'product-list'}
      },
      {
        path: 'addProductCate',
        name: 'addProductCate',
        component: () => import('@/views/pms/productCate/add'),
        meta: {title: '添加商品分类'},
        hidden: true
      },
      {
        path: 'updateProductCate',
        name: 'updateProductCate',
        component: () => import('@/views/pms/productCate/update'),
        meta: {title: '修改商品分类'},
        hidden: true
      },
      {
        path: 'productAttr',
        name: 'productAttr',
        component: () => import('@/views/pms/productAttr/index'),
        meta: {title: '商品类型', icon: 'product-list'}
      },
      {
        path: 'productAttrList',
        name: 'productAttrList',
        component: () => import('@/views/pms/productAttr/productAttrList'),
        meta: {title: '商品属性列表'},
        hidden: true
      },
      {
        path: 'addProductAttr',
        name: 'addProductAttr',
        component: () => import('@/views/pms/productAttr/addProductAttr'),
        meta: {title: '添加商品属性'},
        hidden: true
      },
      {
        path: 'updateProductAttr',
        name: 'updateProductAttr',
        component: () => import('@/views/pms/productAttr/updateProductAttr'),
        meta: {title: '修改商品属性'},
        hidden: true
      },
      {
        path: 'brand',
        name: 'brand',
        component: () => import('@/views/pms/brand/index'),
        meta: {title: '品牌管理', icon: 'product-list'}
      },
      {
        path: 'addBrand',
        name: 'addBrand',
        component: () => import('@/views/pms/brand/add'),
        meta: {title: '添加品牌'},
        hidden: true
      },
      {
        path: 'updateBrand',
        name: 'updateBrand',
        component: () => import('@/views/pms/brand/update'),
        meta: {title: '编辑品牌'},
        hidden: true
      }
    ]
  },
  {
    path: '/oms',
    component: Layout,
    redirect: '/oms/order',
    name: 'oms',
    meta: {title: '订单管理', icon: 'order'},
    children: [
      {
        path: 'order',
        name: 'order',
        component: () => import('@/views/oms/order/index'),
        meta: {title: '订单列表', icon: 'product-list'}
      },
      {
        path: 'orderDetail',
        name: 'orderDetail',
        component: () => import('@/views/oms/order/orderDetail'),
        meta: {title: '订单详情'},
        hidden: true
      },
      {
        path: 'deliverOrderList',
        name: 'deliverOrderList',
        component: () => import('@/views/oms/order/deliverOrderList'),
        meta: {title: '发货列表'},
        hidden: true
      },
      {
        path: 'orderSetting',
        name: 'orderSetting',
        component: () => import('@/views/oms/order/setting'),
        meta: {title: '订单设置', icon: 'product-list'}
      },
      {
        path: 'returnApply',
        name: 'returnApply',
        component: () => import('@/views/oms/apply/index'),
        meta: {title: '退货申请处理', icon: 'product-list'}
      },
      {
        path: 'returnReason',
        name: 'returnReason',
        component: () => import('@/views/oms/apply/reason'),
        meta: {title: '退货原因设置', icon: 'product-list'}
      },
      {
        path: 'returnApplyDetail',
        name: 'returnApplyDetail',
        component: () => import('@/views/oms/apply/applyDetail'),
        meta: {title: '退货原因详情'},
        hidden: true
      }
    ]
  },
  {
    path: '/sms',
    component: Layout,
    redirect: '/sms/coupon',
    name: 'sms',
    meta: {title: '营销管理', icon: 'sms'},
    children: [
      {
        path: 'flash',
        name: 'flash',
        component: () => import('@/views/sms/flash/index'),
        meta: {title: '秒杀活动列表', icon: 'product-list'}
      },
      {
        path: 'flashSession',
        name: 'flashSession',
        component: () => import('@/views/sms/flash/sessionList'),
        meta: {title: '秒杀时间段列表'},
        hidden: true
      },
      {
        path: 'selectSession',
        name: 'selectSession',
        component: () => import('@/views/sms/flash/selectSessionList'),
        meta: {title: '秒杀时间段选择'},
        hidden: true
      },
      {
        path: 'flashProductRelation',
        name: 'flashProductRelation',
        component: () => import('@/views/sms/flash/productRelationList'),
        meta: {title: '秒杀商品列表'},
        hidden: true
      },
      {
        path: 'coupon',
        name: 'coupon',
        component: () => import('@/views/sms/coupon/index'),
        meta: {title: '优惠券列表', icon: 'product-list'}
      },
      {
        path: 'addCoupon',
        name: 'addCoupon',
        component: () => import('@/views/sms/coupon/add'),
        meta: {title: '添加优惠券'},
        hidden: true
      },
      {
        path: 'updateCoupon',
        name: 'updateCoupon',
        component: () => import('@/views/sms/coupon/update'),
        meta: {title: '修改优惠券'},
        hidden: true
      },
      {
        path: 'couponHistory',
        name: 'couponHistory',
        component: () => import('@/views/sms/coupon/history'),
        meta: {title: '优惠券领取详情'},
        hidden: true
      },
      {
        path: 'brand',
        name: 'homeBrand',
        component: () => import('@/views/sms/brand/index'),
        meta: {title: '品牌推荐', icon: 'product-list'}
      },
      {
        path: 'new',
        name: 'homeNew',
        component: () => import('@/views/sms/new/index'),
        meta: {title: '新品推荐', icon: 'product-list'}
      },
      {
        path: 'hot',
        name: 'homeHot',
        component: () => import('@/views/sms/hot/index'),
        meta: {title: '人气推荐', icon: 'product-list'}
      },
      {
        path: 'subject',
        name: 'homeSubject',
        component: () => import('@/views/sms/subject/index'),
        meta: {title: '专题推荐', icon: 'product-list'}
      },
      {
        path: 'advertise',
        name: 'homeAdvertise',
        component: () => import('@/views/sms/advertise/index'),
        meta: {title: '广告列表', icon: 'product-list'}
      },
      {
        path: 'addAdvertise',
        name: 'addHomeAdvertise',
        component: () => import('@/views/sms/advertise/add'),
        meta: {title: '添加广告'},
        hidden: true
      },
      {
        path: 'updateAdvertise',
        name: 'updateHomeAdvertise',
        component: () => import('@/views/sms/advertise/update'),
        meta: {title: '编辑广告'},
        hidden: true
      }
    ]
  },
  {
    path: '/ssms',
    component: Layout,
    redirect: '/ssms/delivery',
    name: 'ssms',
    meta: {title: '发货备货管理', icon: 'home'},
    children: [{
      path: 'delivery',
      name: 'delivery',
      component: () => import('@/views/ssms/delivery/index'),
      meta: {title: '发货管理', icon: 'product-list'}
    },{
      path: 'choice',
      name: 'choice',
      component: () => import('@/views/ssms/choice/index'),
      meta: {title: '备货管理', icon: 'product-list'}
    }]
  },
  {
    path: '/ams',
    component: Layout,
    redirect: '/ams/afterSaleService',
    name: 'ams',
    meta: {title: '售后管理', icon: 'home'},
    children: [{
      path: 'afterSaleService',
      name: 'afterSaleService',
      component: () => import('@/views/ams/afterSaleService/index'),
      meta: {title: '售后服务', icon: 'product-list'}
    },{
      path: 'AfterSalesGuarantee',
      name: 'AfterSalesGuarantee',
      component: () => import('@/views/ams/AfterSalesGuarantee/index'),
      meta: {title: '售后保障', icon: 'product-list'}
    }]
  },
  {
    path: '/ds',
    component: Layout,
    redirect: '/ds/monthlySales',
    name: 'ds',
    meta: {title: '数据统计', icon: 'home'},
    children: [{
      path: 'monthlySales',
      name: 'monthlySales',
      component: () => import('@/views/ds/monthlySales/index'),
      meta: {title: '月销售额统计', icon: 'product-list'}
    },{
      path: 'quarterlySales',
      name: 'quarterlySales',
      component: () => import('@/views/ds/quarterlySales/index'),
      meta: {title: '季度销售额统计', icon: 'product-list'}
    }]
  },
  {
    path: '/cms',
    component: Layout,
    redirect: '/cms/commissionSettlement',
    name: 'cms',
    meta: {title: '资金管理', icon: 'home'},
    children: [{
      path: 'commissionSettlement',
      name: 'commissionSettlement',
      component: () => import('@/views/cms/commissionSettlement/index'),
      meta: {title: '佣金结算', icon: 'product-list'}
    },{
      path: 'SystemAccountSettlement',
      name: 'SystemAccountSettlement',
      component: () => import('@/views/cms/SystemAccountSettlement/index'),
      meta: {title: '系统账户结算', icon: 'product-list'}
    }]
  },
  {
    path: '/cpms',
    component: Layout,
    redirect: '/cpms/RecruitmentAudit',
    name: 'cpms',
    meta: {title: '社区合伙人管理', icon: 'home'},
    children: [{
      path: 'RecruitmentAudit',
      name: 'RecruitmentAudit',
      component: () => import('@/views/cpms/RecruitmentAudit/index'),
      meta: {title: '招募审核', icon: 'product-list'}
    },{
      path: 'GroupManagement',
      name: 'GroupManagement',
      component: () => import('@/views/cpms/GroupManagement/index'),
      meta: {title: '分组管理', icon: 'product-list'}
    },{
      path: 'partnersList',
      name: 'partnersList',
      component: () => import('@/views/cpms/partnersList/index'),
      meta: {title: '合伙人列表', icon: 'product-list'}
    }]
  },
  {path: '*', redirect: '/404', hidden: true}
];

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})

