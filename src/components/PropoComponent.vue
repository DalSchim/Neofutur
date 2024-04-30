<script>
export default {
  name: "PropoComponent"
}
</script>

<template>
  <section class="propos" id="propos">
    <div class="description">
      <div class="overlay"></div>
      <div class="text">
        <h2>À propos de nous</h2>
      </div>
      <div class="text-des">
        <p>Neofutur a été créée en 1999. Entreprise de Services Numériques, elle accompagne des <b>entreprises</b>, des
          <b>associations</b>et des acteurs du monde de <b>l’éducation</b> dans le fonctionnement de leur Système
          d’Informations.Elle propose des prestations d’infogérance, de sécurité, d’audit, de conseil, des solutions
          spécialisées ainsi que l’évolution ou la création d’infrastructures.</p>
        <p>Chez Neofutur, nous accordons une grande importance à la confidentialité et à la protection des profils de
          nos intervenants et collaborateurs.</p>
        <p>Prestataire de confiance, Neofutur est référencée fournisseur Le Cèdre depuis 2017, partageant ainsi les
          valeurs d’excellence et d’intégrité promues par la société.</p>
      </div></div>
    <div class="buton">
      <a href="hero-mouse">
        <div class="mouse-icon">
          <span></span>
        </div>
      </a>
    </div>
    <div class="decoration-a">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2600 131.1" preserveAspectRatio="none">
        <path class="shape1" d="M0 0L2600 0 2600 69.1 0 0z"></path>
        <path class="elementor-shape-fill" style="opacity:0.5" d="M0 0L2600 0 2600 69.1 0 69.1z"></path>
        <path class="elementor-shape-fill" style="opacity:0.25" d="M2600 0L0 0 0 130.1 2600 69.1z"></path>
      </svg>
    </div>
    <div class="filter"></div>
  </section>
</template>

<style scoped lang="scss">
.propos {
  position: relative;
  width: 100%;
  padding: 100px 0;
  background-image: (url(../assets/img/iStock-1398247155-scaled.jpg));
  background-size: cover;
  z-index: 1;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100vh;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    height: auto;
  }

  .decoration-a {
    position: absolute;
    top: 0;
    width: 100%;
    line-height: 0;
    direction: ltr;
    z-index: -1;

    svg {
      width: 100%;
      height: 32px;
      fill: #FFFFFF;
    }
  }

  .filter {
    position: absolute;
    top: 0;
    z-index: -1;
    background-color: #FFFFFFF0;
    opacity: 0.43;
    transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
    width: 100%;
    height: 100%;
  }

  .description {
    max-width: 800px;
    margin-right: auto;
    margin-left: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 50px 60px 50px;

    .overlay {
      position: absolute;
      background-color: #FFFFFF;
      opacity: 0.63;
      filter: brightness(100%) contrast(100%) saturate(100%) blur(0px) hue-rotate(0deg);
      width: 100%;
      height: 100%;
      z-index: -2;
    }

    .text {
      margin: 20px 32px;
      text-align: center;
      width: 100%;

      h2 {
        color: #12426E;
        font-family: "Roboto", Sans-serif;
        font-size: 35px;
        font-weight: 500;
      }
    }

    .text-des {
      text-align: center;
      color: #004172;
      font-family: "Roboto", Sans-serif;
      font-size: 18px;
      font-weight: 400;

      p {
        margin: 20px 0;
      }
    }

  }

  .buton {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 20px;
    z-index: 1;

    .mouse-icon {
      width: 25px;
      height: 45px;
      border-radius: 15px;
      position: relative;
      border: 2px solid #12426E;
      text-align: center;

      span {
        width: 3px;
        height: 8px;
        margin: 2px auto 0;
        display: block;
        background: #12426E;
        border-radius: 5px;
        -webkit-animation: 1.2s ease infinite wheel-up-down;
        animation: 1.2s ease infinite wheel-up-down;
        @keyframes wheel-up-down {
          0% {
            margin-top: 2px;
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          100% {
            margin-top: 20px;
            opacity: 0;
          }
        }
      }
    }
  }
}

</style>