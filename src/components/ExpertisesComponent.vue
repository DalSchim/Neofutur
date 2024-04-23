<script>
export default {
  name: "ExpertisesComponent",
  data() {
    return {
      expertises: [
        {
          img: require("@/assets/img/infrastructure-reseau-1.png"),
          titre: "Infogérance Sécurité"
        },
        {
          img: require("@/assets/img/audit-conseil.png"),
          titre: "Audit Conseil"
        },
        {
          img: require("@/assets/img/entreprise.png"),
          titre: "Vente de matériel"
        },

        {
          img: require("@/assets/img/reseau-cloud.png"),
          titre: "Infrastructures Réseaux"
        },
      ]
    };
  }
}
</script>

<!-- création d'une carte qui recuper les image dans assets img -->

<template>

    <div class="expertise-card" v-for="expertise in expertises" :key="expertise.titre">
      <img :src="expertise.img" alt="expertise.titre">
      <h3>{{expertise.titre}}</h3>
    </div>
</template>

<style scoped lang="scss">

.expertise-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  margin: 10px;
  img {
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
  }
  h3 {
    font-size: 20px;
    font-family: "Roboto Thin", sans-serif;
    color: white;
  }
}

</style>