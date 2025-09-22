import subjectApi from '@/api/subject'

const state = {
  subjects: []
}
// 科目格式化方法
const getters = {
  subjectEnumFormat: (state) => (key) => {
    for (let item of state.subjects) {
      if (item.id === key) {
        return item.name + ' ( ' + item.levelName + ' )'
      }
    }
    return null
  }
}

// 操作函数
const actions = {
  initSubject ({ commit }, action) {
    subjectApi.list().then(re => {
      commit('setSubjects', re.response)
      if (action !== undefined) {
        action()
      }
    })
  }
}

// 状态变更方法
const mutations = {
  setSubjects: (state, subjects) => {
    state.subjects = subjects
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
