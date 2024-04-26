<script>
import CardEquipe from "@/components/CardEquipe.vue";

export default {
  name: "NotreEquipe",
  components: {CardEquipe}
}
</script>

<template>
  <section class="Equipe">
    <div class="titre ">
      <h2>Notre équipe</h2>
    </div>
    <div class="description-equipe">
      <span>+25 collaborateurs</span>
      <p>Vous êtes entre de bonnes mains avec l'équipe de NEOFUTUR</p>
    </div>
        <card-equipe/>
    <div class="buton">
      <a href="hero-mouse">
        <div class="mouse-icon">
          <span></span>
        </div>
      </a>
    </div>
  </section>

</template>

<style scoped lang="scss">
.Equipe {
  position: relative;
  padding: 120px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  .titre {
    font-family: "Roboto Thin ", sans-serif;
    color: #12426E;
    h2 {
      font-size: 32px;
      font-weight: 600;
      text-align: center;
      margin-bottom: 16px;

    }
  }
  .description-equipe {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #12426E;
    gap: 8px;
    font-family: "Roboto Thin ", sans-serif;
    span {
      font-size: 24px;
      font-weight: 600;
    }
    p {
      font-size: 16px;
      font-weight: 400;
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
      @keyframes wheel-up-down{
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

@media (max-width: 768px) {
  .Equipe {
    padding: 80px 16px;
  }
}
</style>