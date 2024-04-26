<script>
export default {
  name: "CardEquipe",
  data() {
    return {
      Equipe: [
        {
          img: require("@/assets/img/equipe/Matthieu-v2.jpg"),
          name: "Matthieu",
          Poste: "President"
        },
        {
          img: require("@/assets/img/equipe/Frederic-v2-1.jpg"),
          name: "Frédéric",
          Poste: "Directeur Général"
        },
        {
          img: require("@/assets/img/equipe/Alexandre-scaled.jpg"),
          name: "Alexandre",
          Poste: "Directeur Technique"
        },
        {
          img: require("@/assets/img/equipe/Alexandra-v2.jpg"),
          name: "Alexandra",
          Poste: "Responsable Commerciale"
        },
        {
          img: require("@/assets/img/equipe/Audrey-V2-jpeg.webp"),
          name: "Audrey",
          Poste: "Responsable Administrative"
        },
        {
          img: require("@/assets/img/equipe/Theo.png"),
          name: "Théo",
          Poste: "Chef de Projet"
        },
      ]
    }

  }

}

</script>

<template>
  <div class="card-equipe">
    <div class="card-equipe-wrapeur">
      <div v-for="personne in Equipe" :key="personne.name" class="card-equipe-2">
        <img :src="personne.img" alt="photo de l'équipe">
        <div class="card-equipe-info">
          <h3>{{ personne.name }}</h3>
          <p>{{ personne.Poste }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card-equipe {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  .card-equipe-wrapeur {
    display: grid;
    grid-template-columns: fit-content(100px) fit-content(100px) 1fr;
    gap: 32px;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
    .card-equipe-2 {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      transition: transform 0.3s;
      &:hover {
        transform: scale(1.1);
        img{

        }
      }
      img {
        width: 300px;
        height: 300px;
        border-radius: 50%;
        object-fit: cover;
        @media (max-width: 768px) {
          width: 200px;
          height: 200px;
        }
      }
      .card-equipe-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: "Roboto Thin ", sans-serif;
        color: #12426E;
        h3 {
          font-size: 24px;
          font-weight: 600;
        }
        p {
          font-size: 16px;
          font-weight: 400;
        }
      }
    }
  }
}

@media (max-width: 920px) {
  .card-equipe {
    .card-equipe-wrapeur {
      grid-template-columns: 1fr;
    }
  }
}
</style>