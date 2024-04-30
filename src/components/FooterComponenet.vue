<script>
import {Icon} from "@iconify/vue";

export default {
  name: "FooterComponenet",
  components: {Icon}
}
</script>

<template>
  <footer>
    <div class="decoration">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 19.6" preserveAspectRatio="none">
        <path class="elementor-shape-fill" style="opacity:0.33" d="M0 0L0 18.8 141.8 4.1 283.5 18.8 283.5 0z"></path>
        <path class="elementor-shape-fill" style="opacity:0.33" d="M0 0L0 12.6 141.8 4 283.5 12.6 283.5 0z"></path>
        <path class="elementor-shape-fill" style="opacity:0.33" d="M0 0L0 6.4 141.8 4 283.5 6.4 283.5 0z"></path>
        <path class="elementor-shape-fill" d="M0 0L0 1.2 141.8 4 283.5 1.2 283.5 0z"></path>
      </svg>
    </div>
    <div class="footer">
      <div class="footer-info">
        <div class="logo">
          <img src="@/assets/img/logo-blue.png" alt="">
          <h3>NeoFutur</h3>
        </div>
        <p>21, Avenue Saint-Fiacre, 78100 Saint-Germain-en-Laye</p>
        <p>01 39 73 10 10</p>
        <p>info@neofutur.com</p>
      </div>
      <div class="footer-nav">
        <h3>Navigation</h3>
        <div class="nav-wrapeur">
          <router-link to="/#home">Accueil</router-link>
          <router-link to="/#services">Services</router-link>
          <router-link to="/#expertises">Expertises</router-link>
          <router-link to="/#propos">À propos de nous</router-link>
          <router-link to="/#contact">Contact</router-link>
        </div>
      </div>
      <div class="footer-legal">
        <h3> Légal</h3>
        <div class="container">
          <router-link to="/mentions-legales">Mentions légales</router-link>
          <router-link to="/politique-de-confidentialite">confidentialité et RGPD</router-link>
        </div>
        <div class="text">
          <p>
            © 2023 NeoFutur.
          </p>
          <p>
            2023-Tous droits réservés.
          </p>
        </div>
      </div>
      <div class="footer-social">
        <h3>Suivez-nous</h3>
        <div class="social">
          <a href="https://www.linkedin.com/company/neofutur" target="_blank">
            <Icon icon="akar-icons:linkedin-fill"/>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  position: relative;
  background-color: #12426E;
  color: white;
  font-family: "Roboto Thin", sans-serif;
  width: 100%;
  padding: 128px 0;
  @media (max-width: 920px) {
    text-align: center;
  }

  .logo {
    display: flex;
    align-items: center;
    @media (max-width: 920px) {
      flex-direction: column;
      justify-content: center;
    }

    h3 {
      font-size: 24px;
    }
  }

  img {
    width: 100px;
  }

  .decoration {
    position: absolute;
    height: 64px;
    top: 0;
    background-color: #12426E;
    width: 100%;
    line-height: 0;
    direction: ltr;
    z-index: 1;

    svg {
      height: 100%;
      width: 100%;
      fill: #FFFFFF;
    }
  }

  .footer {
    display: flex;
    justify-content: space-around;
    align-items: start;
    gap: 64px;
    z-index: 2;
    @media (max-width: 920px) {
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }

  .footer-info {
    h3 {
      font-size: 24px;
      margin-bottom: 16px;
    }

    p {
      margin: 8px 0;
    }
  }

  .footer-nav {
    h3 {
      font-size: 24px;
      margin-bottom: 16px;
    }
    .nav-wrapeur {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    a {
      font-size: 16px;
      color: #ffffff;
      text-decoration: none;

      &:hover {
        color: #1da6e0;
      }
    }

  }

  .footer-legal {
    h3 {
      font-size: 24px;
      margin-bottom: 16px;
    }

    .container {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    a {
      font-size: 16px;
      color: #ffffff;
      text-decoration: none;

      &:hover {
        color: #1da6e0;
      }
    }

    .text {
      gap: 24px;
      display: flex;
      flex-direction: column;
      margin: 32px 0;
      p {
        font-size: 16px;
      }
    }
  }

  .footer-social {
    h3 {
      font-size: 24px;
      margin-bottom: 16px;
    }

    .social {
      display: flex;
      gap: 16px;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(30, 40, 62, 0.56);
        color: #ffffff;
        width: 40px;
        height: 40px;
        font-size: 24px;
        border-radius: 50%;

        &:hover {
          background: #ffffff;
          color: #12426E;
        }
      }
    }
  }

  .footer-info, .footer-social {
    @media (max-width: 920px) {
      margin-bottom: 32px;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
}

</style>