<script>
import {Icon} from "@iconify/vue";

export default {
  name: 'HeaderComponent',
  data() {
    return {
      logo: require("@/assets/img/logo-white.png"),
      show: false,
    }
  },
  components: {
    Icon,
  },
  // si on scroll le header devient bleu et on change le logo
  // on set les valeur par defaut du header et on ajoute un event listener pour le scroll
  mounted() {
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);
    // on verifie si on est en mode pc ou mobile
    if (window.innerWidth > 768) {
      this.show = true;
    }
  },

  methods: {
    // si on scroll le header devient bleu et on recuper tout les lien en les metamorphosant en blanc et on change le logo
    handleScroll() {
      const header = document.querySelector('header');
      const links = document.querySelectorAll('header a');
      const logo = document.querySelector('header img');
      if (window.scrollY > 0) {
        header.style.backgroundColor = '#12426e';
        logo.style.maxWidth = '70px';
        links.forEach(link => link.style.color = 'white');
        this.logo = require("@/assets/img/logo-blue.png");
      } else {
        header.style.backgroundColor = 'white';
        logo.style.maxWidth = '200px';
        links.forEach(link => link.style.color = '#12426e');
        this.logo = require("@/assets/img/logo-white.png");
      }
    },
    // si le menu et en mode pc on affiche le menu par defaut en visible
    // si le menu et en mode mobile on affiche le menu en mode burger
    handleShow() {
      if (window.innerWidth > 768) {
        this.show = !this.show;
      } else {
        const nav = document.querySelector('nav');
        nav.style.transform = nav.style.transform === 'translateX(-100%)' ? 'translateX(0)' : 'translateX(-100%)';
      }
    }
  }
}
</script>

<template>
  <header>
    <router-link to="/"><img class="logo" :src="logo" alt="logo"></router-link>

    <nav v-if="show">
      <router-link class="link" to="/service">Services</router-link>
      <router-link class="link" to="/expertises">Expertises</router-link>
      <router-link class="link" to="/Propos">À Propos de nous</router-link>
      <router-link class="link" to="/contact">Contact</router-link>
    </nav>

    <div>
      <a class="link" href="#">
        <Icon icon="ic:sharp-person" width="24"/>
        Espace client</a>
      <a class="link" href="#">
        <Icon icon="typcn:group" width="24"/>
        Espace support</a>
    </div>

    <div class="burgeur-buton-containeur" @click="handleShow">
      <div class="burgeur-buton">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>


  </header>
</template>

<style scoped lang="scss">
.burgeur-buton-containeur{
display: none;
}
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

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px) {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #12426e;
      flex-direction: column;
      gap: 16px;
      transform: translateX(-100%);
      transition: transform 0.3s;
      a {
        font-size: 24px;
      }
    }

    a {
      font-size: 14px;
      margin: 0 8px;
      font-weight: 600;
      text-decoration: none;
      text-transform: uppercase;
      font-family: "Roboto Thin", sans-serif;
      &:hover {
        color: #1da6e0 !important;
      }
    }


  }

  img {
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

        Icon {
          color: #1da6e0 !important;
        }
      }
    }
  }
}

// responsive heade
nav a.router-link-exact-active {
  color: #42b983;
}


</style>