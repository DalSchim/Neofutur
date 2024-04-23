<template>
  <div id="app">
    <HeaderComponent/>
    <router-view/>
  </div>
</template>

<script>

import HeaderComponent from "@/components/HeadeurComponent.vue";

export default {
  name: 'App',
  components: {
    HeaderComponent
  }
}
</script>


<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}



</style>
