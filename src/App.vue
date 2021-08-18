<template lang="pug">
#main
  img(alt="Vue logo", src="./assets/logo.png")
  h1 Hello There
  p Welcome to the Jungle
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App"
})

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
