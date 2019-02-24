<template>
  <v-flex xs12 sm4>
    <slot/>
    <router-link :to="`/my-trello/${name}`">
      <v-card class="board">
        <div>
          <v-card-title class="justify-center">
            <h2>{{name}}</h2>
          </v-card-title>
        </div>
      </v-card>
    </router-link>
  </v-flex>
</template>

<script>
  export default {
    props:['name', 'index']
  }
</script>

<style scoped>

</style>