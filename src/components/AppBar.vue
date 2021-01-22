<template>
  <v-app-bar fixed class="pl-8" dark>
    <v-col md="3">
      <slot/>
    </v-col>
  </v-app-bar>
</template>

<script>
  export default {
   name: "AppBar",
  }
</script>
