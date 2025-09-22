import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)
// 加载modules目录下的模块
const modulesFiles = require.context('./modules', true, /\.js$/)
// 模块文件转化为模块对象
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})
// 创建Vuex Store实例
const store = new Vuex.Store({
  modules,
  getters
})

export default store
