<template>
  <v-layout justify-center row>
    <v-flex xs12 sm3 class="text-xs-center">
      <router-link :to="'/my-trello'">
        <v-icon class="star">stars</v-icon>
      </router-link>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
    })
  }
</script>

<style scoped lang="scss">
.star{
  font-size: 80px;
  margin: 0 auto;
  color: rgba(24, 103, 192, 1);
  transition: all ease .3s;
  &:hover{
    transform: rotate(-15deg) scale(1.2);
    color: rgba(159, 231, 164, 1);
  }
}
</style>
