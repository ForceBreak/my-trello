import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    boards: []
  },
  getters: {
    allBoards(state){
      return state.boards
    }
  },
  mutations: {
    ADD_BOARD(state, payload) {
      state.lists = []
      let obj = {
        name: payload, 
        list: []
      }
      let serialObj = JSON.stringify(obj)
      state.boards.push(obj)
      localStorage.setItem( payload, serialObj)
    },
    ADD_LIST(state, payload) {
      let listIndex = state.boards[payload.index].list.length
      state.boards[payload.index].list.push({name:payload.name, index: listIndex, tasks: []})
      let obj = {
        name: state.boards[payload.index].name, 
        list: state.boards[payload.index].list
      }
      let serialObj = JSON.stringify(obj)
      localStorage.setItem( state.boards[payload.index].name, serialObj)
    },
    ADD_TASK(state, payload) {
      let taskPosition = state.boards[payload.boardIndex].list[payload.listIndex].tasks.length
      state.boards[payload.boardIndex].list[payload.listIndex].tasks.push({
        name: payload.task, 
        index: taskPosition + 1, 
        fixed: false,
        done: false
      })
      let obj = {
        name: state.boards[payload.boardIndex].name, 
        list: state.boards[payload.boardIndex].list
      }
      let serialObj = JSON.stringify(obj)
      localStorage.setItem( state.boards[payload.boardIndex].name, serialObj)
    },
    TASK_DONE(state, payload) {
      state.boards[payload.boardIndex].list[payload.listIndex].tasks[payload.taskIndex].done = !payload.done
      let obj = {
        name: state.boards[payload.boardIndex].name, 
        list: state.boards[payload.boardIndex].list
      }
      let serialObj = JSON.stringify(obj)
      localStorage.setItem( state.boards[payload.boardIndex].name, serialObj)
    },
    TASK_FIXED(state, payload) {
      state.boards[payload.boardIndex].list[payload.listIndex].tasks[payload.taskIndex].fixed = !payload.fixed
      let obj = {
        name: state.boards[payload.boardIndex].name, 
        list: state.boards[payload.boardIndex].list
      }
      let serialObj = JSON.stringify(obj)
      localStorage.setItem( state.boards[payload.boardIndex].name, serialObj)
    },
    REMOVE_TASK(state, payload) {
      state.boards[payload.boardIndex].list[payload.listIndex].tasks.splice(payload.taskIndex, 1)
      let obj = {
        name: state.boards[payload.boardIndex].name, 
        list: state.boards[payload.boardIndex].list
      }
      let serialObj = JSON.stringify(obj)
      localStorage.setItem( state.boards[payload.boardIndex].name, serialObj)
    },
    REMOVE_LIST(state, payload) {
      state.boards[payload.boardIndex].list.splice(payload.listIndex, 1)
      let obj = {
        name: state.boards[payload.boardIndex].name, 
        list: state.boards[payload.boardIndex].list
      }
      let serialObj = JSON.stringify(obj)
      localStorage.setItem( state.boards[payload.boardIndex].name, serialObj)
    },
    REMOVE_BOARD(state, payload) {
      state.boards.splice(payload, 1)
      localStorage.removeItem(payload.name)
    },
    STORAGE_BOARDS(state) {
      state.boards = []
      for (let i = 0; i < localStorage.length; i++) {
        if(localStorage.key(i) != 'loglevel:webpack-dev-server' && localStorage.key(i) != 'length')
        state.boards.push(JSON.parse(localStorage[localStorage.key(i)]))
      }
    }
  },
  actions: {

  }
})
