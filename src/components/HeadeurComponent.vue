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
    // on set link en blanc et le logo en blanc
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);

    if (this.isMobile()) {
      this.show = false;
    } else if (this.isDesktop()) {
      this.show = true;
    }

    // on verifi la taille de l'ecran pour afficher ou non le menu
    window.addEventListener('resize', () => {
          if (this.isMobile()) {
            this.show = false;
          } else if (this.isDesktop()) {
            this.show = true;
          }
        }
    );
  },

  methods: {
    // si on scroll le header devient bleu et on change le logo
    handleScroll() {
      if (window.scrollY > 0) {
        document.querySelector('header').classList.add('blue');
        document.querySelector('header').classList.remove('white');
        this.logo = require("@/assets/img/logo-blue.png");
      } else {
        document.querySelector('header').classList.add('white');
        document.querySelector('header').classList.remove('blue');
        this.logo = require("@/assets/img/logo-white.png");
      }
    },

    // si on click sur le burgeur on affiche le menu
    handleShow() {
      setTimeout(() => {
        this.show = !this.show;
      }, 100);
    },

    isMobile() {
      return window.innerWidth <= 920;
    },

    isDesktop() {
      return window.innerWidth > 920;
    }
  }
}
</script>

<template>
  <header>
    <router-link to="/"><img class="logo" :src="logo" alt="logo"></router-link>

    <transition
        name="fade"
        @after-enter="show = true"
        @after-leave="show = false"
    >
      <nav v-if="show" id="">
        <router-link class="link" to="/#services">Services</router-link>
        <router-link class="link" to="/#expertises">Expertises</router-link>
        <router-link class="link" to="/#propos">À Propos de nous</router-link>
        <router-link class="link" to="/#contact">Contact</router-link>

        <div class="link-externe-hiden">
          <a class="link" href="#">
            <Icon icon="ic:sharp-person" width="24"/>
            Espace client</a>
          <a class="link" href="https://neofutur.servicedesk.atera.com/login?redirectTo=%2F">
            <Icon icon="typcn:group" width="24"/>
            Espace support</a>
        </div>
      </nav>
    </transition>

    <div class="link-externe">
      <a class="link" href="#">
        <Icon icon="ic:sharp-person" width="24"/>
        Espace client</a>
      <a class="link" href="https://neofutur.servicedesk.atera.com/login?redirectTo=%2F">
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

.fade-enter-active {
  transition: transform 0.1s;
  transform: translateX(100%);
}

fade-leave-active {
  transition: transform 0.1s;
  transform: translateX(0);
}

.fade-enter, /* .fade-leave-active in <2.1.8 */
{
  transform: translateX(0);
}

.fade-leave-to, /* .fade-enter-active in <2.1.8 */
{
  transform: translateX(100%);
}


.burgeur-buton-containeur {
  display: none;
  @media screen and (max-width: 920px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
}

.burgeur-buton {
  position: relative;
  width: 30px;
  display: flex;
  flex-direction: column;
  gap: 4px;

  span {
    width: 30px;
    height: 4px;
    background-color: #12426e;
  }
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
    @media screen and (max-width: 920px) {
      position: fixed;
      top: 0;
      right: 0;
      width: 100%;
      height: 100vh;
      background-color: #B9B9B971;
      backdrop-filter: blur(10px);
      flex-direction: column;
      gap: 32px;
      transition: all 0.3s;
      a {
        font-size: 24px;
        color: #FFFFFF !important;
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

.link-externe {
  @media screen and (max-width: 920px) {
    display: none;
  }
}

.link-externe-hiden {
  display: none;
  @media screen and (max-width: 920px) {
    display: flex;
    flex-direction: column;
    gap: 16px;
    right: 0;
    width: 100%;
    a {
      color: white;
      padding: 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }
  }
}


.blue {
  .burgeur-buton-containeur {
    span {
      background-color: #FFFFFF;
    }
  }

  background-color: #12426e;
  color: #FFFFFF;

  nav a {
    color: #FFFFFF;
  }

  .link-externe a {
    color: #FFFFFF;
  }

  img {
    max-width: 80px;
  }
}


.white {
  .burgeur-buton-containeur {
    span {
      background-color: #12426E;
    }
  }

  background-color: #FFFFFF;
  color: #12426e;

  nav a {
    color: #12426e;
  }

  .link-externe a {
    color: #12426e
  }

  img {
    max-width: 200px;
  }
}

</style>