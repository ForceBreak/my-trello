<template>
  <v-layout class="boardsParent" row wrap>
    <CreateBoard/>
    <Board 
      v-for="(item, index) in ALL_BOARDS" 
      :key="index" 
      :name="item.name" 
      :index="index"
      class="boardHome"
    >
      <v-icon 
        class="removeBoard"
        @click="removeBoard(index)"
        >remove_circle</v-icon>
    </Board>
  </v-layout>
</template>

<script>
  import CreateBoard from '@/components/CreateBoard'
  import Board from '@/components/Board'
  import {mapGetters} from 'vuex'
  import {mapMutations} from 'vuex'

  export default {
    components: {
      CreateBoard,
      Board
    },
    methods: {
      removeBoard(board) {
        this.$store.commit('REMOVE_BOARD', board)
      }
    },
    computed: {
      ...mapMutations({
        REMOVE_BOARD: 'REMOVE_BOARD'
      }),
      ...mapGetters({
        ALL_BOARDS: 'allBoards'
      })
    },
    created() {
      this.$store.commit('STORAGE_BOARDS')
    }
  }
</script>
<style lang="scss">
.container{
  padding-top:0;
  padding-bottom:0;
  .boardsParent{
    margin-top: 100px;
  }
  .board{
    border-radius: 10px;
    &:hover{
      transition: .3s all ease;
      transform: scale(1.1);
      box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
      cursor: pointer;
    }
    .padding{
      padding-top: 30px;
      padding-bottom: 30px;
    }
  }
}
.boardHome{
  position: relative;
}
.removeBoard{
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
}
a{
  text-decoration: none;
}
</style>