<template>
    <div class="card" v-for="(carte, index) in cartes" :key="index">
      <div class="front">
        <div class="title-card">
          <h3>{{ carte.titre }}</h3>
          <Icon icon="akar-icons:arrow-right" style="font-size: 24px; color: white;"/>
        </div>
        <img :src="carte.img" :alt="carte.titre">
      </div>
      <div class="back">
        <div>
          <h3>{{ carte.titre }}</h3>
        </div>
        <p>{{ carte.description }}</p>
      </div>
    </div>
</template>

<script>
import {Icon} from "@iconify/vue";

export default {
  name: "CardComponent",
  components: {Icon},
  computed: {
    cartes() {
      return [
        { img: require("@/assets/img/entreprise-scaled.jpg"), titre: "Entreprise", description: "PME/ETI, Neofutur vous accompagne dans la gestion de votre SI et dans les enjeux majeurs de sécurité." },
        { img: require("@/assets/img/association-scaled.jpg"), titre: "Associations", description: "Une DSI privée pour accompagner vos équipes et gérer vos infrastructures." },
        { img: require("@/assets/img/education-scaled.jpg"), titre: "Éducation", description: "Collectivités, Établissements scolaires publics ou privés, Neofutur vous propose ses solutions et son expertise depuis plus de 20 ans." }
      ];
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  position: relative;
  width: 100%;
  min-height: 370px;
  max-width: 1118px;
  perspective: 1000px; /* Ajout de la perspective pour l'effet 3D */
}

.front, .back {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  backface-visibility: hidden; /* Masquer l'arrière de la carte */
  transition: transform 0.8s;
}

.front {
  transform: rotateY(0deg);
}

.back {
  transform: rotateY(180deg);
}

.card:hover .front {
  transform: rotateY(-180deg);
}

.card:hover .back {
  transform: rotateY(0deg);
}


img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* ajout d'un filtre pour assombrir l'image */
}

.title-card {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.5s;
}


h3 {
  color: white;
  font-size: 24px;
  font-family: "Roboto Thin", sans-serif;
}

.back {
  background-color: #12426E;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  transform: rotateY(180deg);
  border-radius: 10px;
  p{
    font-size: 18px;
    font-family: "Roboto Thin", sans-serif;
  }
  div {
    position: absolute;
    padding: 16px;
    top: 0;
    h3 {
      font-size: 24px;
      font-family: "Roboto Thin", sans-serif;
    }
  }
}
.back p {
  font-size: 18px;
}
</style>
