<script>
import Slider1Component from "@/components/Slider1Component.vue";

export default {
  name: "PartenaireComponent",
  components: {Slider1Component}
}
</script>

<template>
  <section class="partenaires">
    <svg class="decoration3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2600 131.1" preserveAspectRatio="none">
      <path class="elementor-shape-fill" d="M0 0L2600 0 2600 69.1 0 0z"></path>
      <path class="elementor-shape-fill" style="opacity:0.5" d="M0 0L2600 0 2600 69.1 0 69.1z"></path>
      <path class="elementor-shape-fill" style="opacity:0.25" d="M2600 0L0 0 0 130.1 2600 69.1z"></path>
    </svg>
    <div class="container">
      <div class="text">
        <h2>Des partenaires qui nous accompagnent</h2>
        <p>Des partenariats qui nous permettent au quotidien d'améliorer le service rendu et de vous proposer des solutions plus adaptées à vos besoins.</p>
      </div>
      <slider1-component/>
    </div>
  </section>

</template>

<style scoped lang="scss">
.partenaires {
  position: relative;
  width: 100%;
  padding: 100px 0;
  background-color: #12426E;

  .container{
    display: flex;
    margin-right: auto;
    margin-left: auto;
    position: relative;
    max-width: 1140px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .text {
      text-align: center;
      margin-bottom: 50px;
      h2 {
        color: #FFFFFF;
        font-family: "Roboto", Sans-serif;
        font-size: 35px;
        font-weight: 500;
        line-height: 100px;
      }
      p {
        color: #FFFFFF;
        font-weight: 400;
        font-size: 22px;
        font-family: "Roboto Thin", Sans-serif;
      }
    }
  }
}

.decoration3 {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
  fill: #FFFFFF;
  height: 32px;

  svg {
    width: 100%;
  }
}
</style>