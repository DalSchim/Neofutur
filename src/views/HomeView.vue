<template>
  <section class="home">
    <div class="titre">
      <div class="t1"><h2>Votre Parteniare</h2></div>
      <div class="t2"><h1>Informatique</h1></div>
      <div class="t3"><span><h3>Entreprises - association - édducation</h3></span></div>
    </div>
    <div class="back-ground video">
      <video autoplay muted loop>
        <source src="@/assets/video/header-video.mp4" type="video/mp4">
      </video>
    </div>
    <svg class="svg1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
      <path class="elementor-shape-fill" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path>
    </svg>
  </section>
  <section class="services">
    <div>
      <h2>Service</h2>
      <p>Une DSI privée pour gagner en productivité</p>
    </div>
  </section>
  <section class="expertise">
    <div class="e-titre">
      <h2>Expertises</h2>
    </div>
    <div class="expertise-component">
      <ExpertisesComponent/>
    </div>
  </section>
  <section-secteur/>
  <section class="chifre">
    <div>
      <span>+20</span>
      <p>Années à votre services</p>
    </div>
    <div>
      <span>+500</span>
      <p>Sites clients</p>
    </div>
    <div>
      <span>+100K</span>
      <p>Utilisateurs</p>
    </div>
  </section>
  <propo-component/>
  <notre-equipe/>
  <section class="notre-confiance">
    <div class="title">
      <h2>Ils nous font confiance</h2>
      <p>La satisfaction client est une priorité chez NEOFUTUR</p>
    </div>
    <div class="containeur">
      <div class="grid-wrape-image">
        <div>
          <img src="@/assets/img/confiance-image/opm.webp" alt="logo cedre">
        </div>
        <div>
          <img src="@/assets/img/confiance-image/Sans-titre-1-qfhnz77sud90zznvwemcibm2nj3y7lx30j1k10mn2w.png"
               alt="logo cedre">
        </div>
        <div>
          <img src="@/assets/img/confiance-image/image-verticale-jpg.webp" alt="logo cedre">
        </div>
        <div>
          <img src="@/assets/img/confiance-image/ihj.png" alt="logo cedre">
        </div>
        <div>
          <img src="@/assets/img/confiance-image/logo_CEM-blanc.png" alt="logo cedre">
        </div>
      </div>
    </div>
  </section>
  <partenaire-component/>
</template>
<script>
// @ is an alias to /src


import ExpertisesComponent from "@/components/ExpertisesComponent.vue";
import SectionSecteur from "@/components/SectionSecteur.vue";
import PropoComponent from "@/components/PropoComponent.vue";
import NotreEquipe from "@/components/NotreEquipe.vue";
import PartenaireComponent from "@/components/PartenaireComponent.vue";

export default {
  name: 'HomeView',
  components: {PartenaireComponent, NotreEquipe, PropoComponent, SectionSecteur, ExpertisesComponent},
}
</script>
<style scoped lang="scss">
.home {
  height: 100vh;
  @media (max-width: 768px) {
  }

  .back-ground {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    width: 100%;
    height: 100vh;

    video {
      width: 100%;
      object-fit: cover;
      height: 100vh;
    }
  }

  .titre {
    max-width: 1300px;
    height: 100%;
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin-right: auto;
    margin-left: auto;
    position: relative;
    @media (max-width: 768px) {
      padding: 0 20px;
    }


    .t1 {
      @media (max-width: 768px) {
        margin-top: 20px;
      }

      h2 {
        color: #12426E;
        font-family: "Anton", Sans-serif;
        font-size: 65px;
        font-weight: 400;
        line-height: 94px;
        letter-spacing: 3px;
        word-spacing: 0px;
        text-transform: uppercase;
        height: 64px;
        @media (max-width: 768px) {
          font-size: 45px;
        }
      }

      @media (max-width: 768px) {
        h2 {
          font-size: 35px;
        }
      }
    }

    .t2 {
      h1 {
        color: #12426E;
        font-family: "Anton", Sans-serif;
        font-size: 109px;
        font-weight: 400;
        letter-spacing: 4px;
        text-transform: uppercase;
      }

      @media (max-width: 768px) {
        h1 {
          font-size: 43px;
        }
      }
    }

    .t3 {
      span {
        display: flex;

        h3 {
          color: #12426E;
          font-family: "Alexandria", Sans-serif;
          font-size: 22px;
          font-weight: 700;
          line-height: 40px;
          font-weight: bold;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          justify-content: center;
          &::before {
            display: block;
            content: "";
            width: 45px;
            height: 3px;
            background-color: #12426E;
            margin-right: 20px;
          }
          &::after {
            display: block;
            content: "";
            width: 45px;
            height: 3px;
            background-color: #12426E;
            margin-left: 20px;
          }
          @media (max-width: 768px) {
            font-size: 11px;

            &::before {
              width: 8px;
              height: 2px;
              margin-right: 10px;
            }

            &::after {
              width: 8px;
              height: 2px;
              margin-left: 10px;
            }
          }
        }
      }
    }
  }

  .svg1 {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 64px;
    fill: #12426E;
  }
}

.services {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #12426E;
  width: 100%;

  div {
    text-align: center;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;

    h2 {
      color: #FFFFFF;
      font-family: "Roboto", Sans-serif;
      font-size: 35px;
      font-weight: 500;
      line-height: 100px;
    }

    p {
      color: #FFFFFF;
      font-family: "Roboto", Sans-serif;
      font-size: 24px;
      font-weight: 400;
      line-height: 80px;
    }
  }
}

.expertise {
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
  width: 100%;

  .e-titre {
    text-align: center;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;

    h2 {
      color: #12426E;
      font-family: "Roboto", Sans-serif;
      font-size: 35px;
      font-weight: 500;
      line-height: 100px;
    }
  }

  .expertise-component {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #12426E;
    gap: 20px;
    flex-wrap: wrap;
    padding: 80px 0;
    margin-right: auto;
    margin-left: auto;
  }
}

.chifre {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #12426E;
  width: 100%;
  padding: 150px 0;

  div {
    display: flex;
    width: 35%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 20px;

    span {
      margin-bottom: 10px;
      color: #FFFFFF;
      font-family: "Roboto", Sans-serif;
      font-size: 62px;
      font-weight: 600;
    }

    p {
      color: #FFFFFF;
      font-family: "Roboto", Sans-serif;
      font-size: 24px;
      font-weight: 400;
      line-height: 80px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 50px 0;
    div {
      width: 100%;
      margin: 20px 0;
    }
  }
}

.notre-confiance {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
  width: 100%;

  .title {
    text-align: center;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;

    h2 {
      color: #12426E;
      font-family: "Roboto", Sans-serif;
      font-size: 35px;
      font-weight: 500;
      line-height: 100px;
    }

    p {
      color: #12426E;
      font-family: "Roboto", Sans-serif;
      font-size: 24px;
      font-weight: 400;
      line-height: 80px;
    }
  }

  .containeur {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    padding: 80px 0;
    margin-right: auto;
    margin-left: auto;

    .grid-wrape-image {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
      gap: 20px;
      margin: auto; // Centrer la grille d'images

      div {
        width: 200px;
        height: 200px;
        @media (max-width: 768px) {
          width: 150px;
          height: 150px;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }
}

.decoration3 {
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
}


</style>
