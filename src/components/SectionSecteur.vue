<script>
import CardComponent from "@/components/CardComponent.vue";

export default {
  name: "SectionSecteur",
  components: {CardComponent}
}
</script>

<template>
  <section class="section-secteur">
    <div class="card-contain">
      <div class="card-wrapeur">
        <card-component/>
      </div>
    </div>
    <div class="decoration">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 19.6" preserveAspectRatio="none">
        <path class="elementor-shape-fill" style="opacity:0.33" d="M0 0L0 18.8 141.8 4.1 283.5 18.8 283.5 0z"></path>
        <path class="elementor-shape-fill" style="opacity:0.33" d="M0 0L0 12.6 141.8 4 283.5 12.6 283.5 0z"></path>
        <path class="elementor-shape-fill" style="opacity:0.33" d="M0 0L0 6.4 141.8 4 283.5 6.4 283.5 0z"></path>
        <path class="elementor-shape-fill" d="M0 0L0 1.2 141.8 4 283.5 1.2 283.5 0z"></path>
      </svg>
    </div>
  </section>
</template>

<style scoped lang="scss">

.section-secteur {
  position: relative;
}

.card-contain {
  display: flex;
  justify-content: center;
  align-items: center;
padding: 64px 16px;
  .card-wrapeur {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 64px;
  }
}


.decoration{
  overflow: hidden;
  position: absolute;
  bottom: 0;
  background-color: #12426E;
  width: 100%;
  line-height: 0;
  direction: ltr;
  z-index: -1;
  svg {
    width: 100%;
    fill: #f5f5f5;
  }
}

@media (max-width: 768px) {
  .card-contain {
    padding: 32px 16px;
  }
  .card-wrapeur {
    flex-direction: column;
    gap: 32px;
  }
}

</style>