<template>
  <v-flex xs12 sm4>
    <v-card class="newBoard board">
      <div v-if="isForm">
        <v-card-title class="createHead">
          <h2>Создание доски</h2>
          <v-spacer/>
          <v-icon @click="closeForm">cancel</v-icon>
        </v-card-title>
        <h4 class="text-xs-center">Как назовём доску?</h4>
        <v-text-field
          v-model="boardName"
          solo 
          @keypress.enter="addBoard(boardName)"
          class="input"/>
        <v-card-actions class="justify-center">
          <v-btn @click="closeForm" flat class="cancelBtn">Отмена</v-btn>
          <v-btn @click="addBoard(boardName)">Создать</v-btn>
        </v-card-actions>
      </div>

      <div v-else @click="showForm">
        <v-card-title class="justify-center">
          <h2>Создать новую доску...</h2>
        </v-card-title>
      </div>
    </v-card>
  </v-flex>
</template>

<script>
  import {mapMutations} from 'vuex'
  export default {
    data() {
      return {
        form: false,
        boardName: ''
      }
    },
    computed: {
      isForm() {
        return this.form
      },
      ...mapMutations({
        ADD_BOARD: 'ADD_BOARD'
      })
    },
    methods: {
      showForm() {
        this.form = !this.form
      },
      closeForm() {
        this.form = !this.form
      },
      addBoard(name) {
        this.form = !this.form
        this.$store.commit('ADD_BOARD', name)
        this.boardName = ''
      }
    }
  }
</script>

<style lang="scss" scoped>
.input{
  max-width: 80%;
  margin: 0 auto;
}
.cancelBtn{
  color: #fff;
}
</style>