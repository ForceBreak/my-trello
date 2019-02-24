<template>
  <v-app>
    <v-container grid-list-xl>
      <Header/>
      <router-view></router-view>
    </v-container>
  </v-app>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header
  },
  data () {
    return {
      //
    }
  }
}
</script>
<style lang="scss">
  .newBoard{
  background-color: #9fe7a4!important;
  color: #fff!important;
  h4{
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .createHead{
    border-bottom: 1px solid #fff; 
  }
}
</style>