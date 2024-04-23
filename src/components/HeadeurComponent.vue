<script>
import NavComponent from "@/components/NavComponent.vue";
import {Icon} from "@iconify/vue";

export default {
  name: 'HeaderComponent',
  data(){
    return{
     logo: require("@/assets/img/logo-white.png")
    }
  },
  components: {
    Icon,
    NavComponent
  },
  // si on scroll le header devient bleu et on change le logo
  // on set les valeur par defaut du header et on ajoute un event listener pour le scroll
  mounted(){
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);



  },

methods: {

    // si on scroll le header devient bleu et on recuper tout les lien en les metamorphosant en blanc et on change le logo
    handleScroll(){
      const header = document.querySelector('header');
      const links = document.querySelectorAll('header a');
      const logo = document.querySelector('header img');
      if(window.scrollY > 0){
        header.style.backgroundColor = '#12426e';
        logo.style.maxWidth= '70px';
        links.forEach(link => link.style.color = 'white');
        this.logo = require("@/assets/img/logo-blue.png");
      }else{
        header.style.backgroundColor = 'white';
        logo.style.maxWidth= '200px';
        links.forEach(link => link.style.color = '#12426e');
        this.logo = require("@/assets/img/logo-white.png");
      }
    }
  }



}

</script>

<template>
  <header>
    <router-link to="/"><img class="logo" :src="logo" alt="logo"></router-link>
    <nav-component/>
    <div>
      <a class="link" href="#"><Icon icon="ic:sharp-person" width="24" />Espace client</a>
      <a class="link" href="#"><Icon icon="typcn:group" width="24" />Espace support</a>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 32px;
  transition: all 0.3s;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  img
  {
    max-width: 200px;
  }
div {
    display: flex;
    align-items: center;
    gap: 16px;

    a {
      font-family: "Roboto Thin", sans-serif;
      text-transform: uppercase;
      font-size: 14px;
      text-decoration: none;
      font-weight: bold;
      display: flex;
      align-items: center;
      &:hover {
        color: #1da6e0 !important;
        Icon{
          color: #1da6e0 !important;
        }
      }
    }
  }
}


</style>