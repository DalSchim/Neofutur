<template>
  <div id="app">
    <HeaderComponent/>
    <router-view/>
    <footer-componenet/>
  </div>
</template>

<script>

import HeaderComponent from "@/components/HeadeurComponent.vue";
import FooterComponenet from "@/components/FooterComponenet.vue";

export default {
  name: 'App',
  components: {
    FooterComponenet,
    HeaderComponent
  }
}
</script>


<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}


</style>
