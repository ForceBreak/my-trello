<template>
  <div>
    <v-layout>
      <v-flex xs12 sm2>
        <v-card class="newBoard board">
          <v-card-title class="justify-center">
            <h2>{{board.name}}</h2>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout wrap>
      <v-flex 
        xs12 sm3 
        v-for="(item, index) in board.list" :key="index"
        class="listItem"
        >
        <v-card class="board white">
          <v-icon 
            class="cancelList"
            @click="removeList({
              listIndex: index
            })"
            >cancel</v-icon>
          <v-card-title class="justify-center">
            <h2>{{item.name}}</h2>
          </v-card-title>
          <v-card-actions>
            <v-text-field
              solo 
              auto-grow
              placeholder="Добавить задачу"
              class="input"
              @keypress.enter="addTask({name: item.name, index: index}, $event)"
            />
          </v-card-actions>
          <draggable 
            v-model="item.tasks"
            class="tasks"
            :options="{group:'tasks'}"
            :move="onMove"
            >
              <transition-group name="list-complete">
                <v-card-actions 
                  v-for="(item, i) in item.tasks" :key="i"
                  class="justify-space-between task list-complete-item"
                  :class="item.done + ''"
                  >
                  <v-icon 
                    class="removeTask"
                    @click="removeTask({
                      listIndex: index, 
                      taskIndex: i
                    })"
                    >remove_circle</v-icon>
                  <span @click="isFixed({
                    fixed: item.fixed,
                    listIndex: index, 
                    taskIndex: i,
                    })">
                    <v-icon class="fixed" v-show="!item.fixed">gps_not_fixed</v-icon>
                    <v-icon class="fixed" v-show="item.fixed">gps_fixed</v-icon>
                  </span>
                  <span>{{item.name}}</span>
                  <span
                    class="fixed"
                    @click="isDone({
                      done: item.done, 
                      listIndex: index, 
                      taskIndex: i
                    })">
                    <v-icon v-show="!item.done">check</v-icon>
                    <v-icon v-show="item.done">close</v-icon>
                  </span>

                </v-card-actions>
              </transition-group>
          </draggable>
        </v-card>
      </v-flex>
      <v-flex xs12 sm3 class="listItem">
        <v-card>
          <div v-if="!form" @click="showForm" class="board addList">
            <v-card-title class="justify-center">
              <h3>Добавить Список</h3>
            </v-card-title>
          </div>
          <div v-else>
            <v-card-title class="justify-center">
              <v-text-field
                v-model="listName"
                @keypress.enter="addListName"
                placeholder="добавить список"
                solo 
                class="input"/>
                <v-icon @click="hideForm" class="cancelList">cancel</v-icon>
            </v-card-title>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapMutations} from 'vuex'
  import draggable from 'vuedraggable'

  export default {
    components: {
      draggable
    },
    data() {
      return {
        form: false,
        listName: '',
        listCounter: 0
      }
    },
    computed: {
      board() {
        this.ALL_BOARDS.forEach((element, index) => {
          if (element.name == this.$route.params.about)
          this.listCounter = index
        })
        return this.ALL_BOARDS[this.listCounter]
      },
      ...mapGetters({
        ALL_BOARDS: 'allBoards'
      }),
      ...mapMutations({
        ADD_LIST: 'ADD_LIST',
        ADD_TASK: 'ADD_TASK',
        TASK_DONE: 'TASK_DONE',
        REMOVE_TASK: 'REMOVE_TASK',
        REMOVE_LIST: 'REMOVE_LIST',
        TASK_FIXED: 'TASK_FIXED'
      })
    },
    methods: {
      showForm() {
        this.form = !this.form
      },
      hideForm() {
        this.form = !this.form
      },
      addListName(index) {
        this.$store.commit('ADD_LIST', {index: this.listCounter, name: this.listName})
      },
      addTask(payload, event) {
        this.$store.commit('ADD_TASK', {
          boardIndex: this.listCounter,
          listIndex: payload.index,
          name: payload.name,
          task: event.target.value,
          fixed: false
        })
      },
      onMove({ relatedContext, draggedContext }) {
        const relatedElement = relatedContext.element;
        const draggedElement = draggedContext.element;
        return (
          (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
        );
      },
      isDone(done) {
        this.$store.commit('TASK_DONE', {
          done: done.done,
          boardIndex: this.listCounter,
          listIndex: done.listIndex,
          taskIndex: done.taskIndex
        })
      },
      isFixed(fixed) {
        this.$store.commit('TASK_FIXED', {
          fixed: fixed.fixed,
          boardIndex: this.listCounter,
          listIndex: fixed.listIndex,
          taskIndex: fixed.taskIndex
        })
      },
      removeTask(task) {
        this.$store.commit('REMOVE_TASK',{
          boardIndex: this.listCounter,
          listIndex: task.listIndex,
          taskIndex: task.taskIndex
        })
      },
      removeList(list) {
        this.$store.commit('REMOVE_LIST', {
          boardIndex: this.listCounter,
          listIndex: list.listIndex,
        })
      }
    },
    created() {
      this.$store.commit('STORAGE_BOARDS')
      this.$router.push(this.ALL_BOARDS[this.listCounter].name)
    }
  }
</script>

<style scoped lang="scss">
.fixed,
.addList,
.newBoard,
.board{
  &:hover{
    cursor: pointer;
  }
}
.task{
    box-shadow: rgba(0, 0, 0, 0.16) 0px 6px 6px, rgba(0, 0, 0, 0.23) 0px 6px 6px; 
    text-decoration: none; 
    background-color: rgb(202, 255, 222);
    position: relative;
    margin-bottom: 20px;
  &.true{
    background-color: #ddd;
  }
}
.tasks{
  >span{
    min-height: 30px;
    display: block;
    cursor: move;
  }
}
.listItem{
  margin-top: 20px;
}
.cancelList{
  position: absolute;
  top: -10px;
  right: -10px;
}
.board{
  background-color: #0a2c74;
  border-radius: 0;
  color: #fff;
  &.white{
    background-color: #fff;
    color: rgb(66, 65, 65);
    position: relative;
    .v-card__title{
      border-bottom: 1px solid rgb(66, 65, 65);
    }
  }
}
.newBoard,
.board{
  &:hover{
    transform: none;
  }
}
.list-complete-item {
  transition: all 1s;
}

.list-complete-enter, .list-complete-leave-active {
  opacity: 0;
}
.removeTask{
  position:absolute;
  top: -10px;
  right: -10px;
  font-size: 20px;
  &:hover{
    cursor: pointer;
  }
}
</style>