import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg 组件

// 全局注册SVG图标导入文件
Vue.component('svg-icon', SvgIcon)

// 动态加载SVG组件
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
