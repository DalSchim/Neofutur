<template>
  <Splide :options="options" aria-label="My Favorite Images">
    <SplideSlide>
      <img src="@/assets/img/partenaire/Logo-2015-Acronis.png" alt="Sample 1">
    </SplideSlide>
    <SplideSlide>
      <img src="@/assets/img/partenaire/Symbole-Cisco-1.png" alt="Sample 2">
    </SplideSlide>
    <SplideSlide>
      <img src="@/assets/img/partenaire/Lenovo-Logo-1-e1694522746866.png" alt="Sample 2">
    </SplideSlide>
    <SplideSlide>
      <img src="@/assets/img/partenaire/Microsoft-logo_rgb_c-gray.webp" alt="Sample 2">
    </SplideSlide>
    <SplideSlide>
      <img src="@/assets/img/partenaire/download-removebg-preview.png" alt="Sample 2">
    </SplideSlide>
    <SplideSlide>
      <img src="@/assets/img/partenaire/SonicWall-Logo-removebg-preview-1-1.png" alt="Sample 2">
    </SplideSlide>
    <SplideSlide>
      <img src="@/assets/img/partenaire/trendmicro-ogsocial-removebg-preview-1.png" alt="Sample 2">
    </SplideSlide>
  </Splide>
</template>


<script>
import {Splide, SplideSlide} from '@splidejs/vue-splide';
import {defineComponent} from 'vue';
import '@splidejs/vue-splide/css';

// or other themes
import '@splidejs/vue-splide/css/skyblue';

// or only core styles
import '@splidejs/vue-splide/css/core';


export default defineComponent({
  components: {
    Splide,
    SplideSlide,
  },


  setup() {
    const options = {
      rewind: true,
      gap: '2px',
      perPage: 5,
      arrows: false,
      autoplay: true,
      pauseOnHover : false,
      breakpoints: {
        600: {
          perPage: 2,
        },
        800: {
          perPage: 3,
        },
        1000: {
          perPage: 4,
        },
      },
    };


    return {options};
  },
});
</script>
<style scoped lang="scss">
/* Slider centering */
.splide {
  padding: 0 24px;
}

.splide__slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.splide__list {
  li {
    height: 170px;
    width: 232.2px;
    background: #FFFFFF;
  }
}

/* Image size */
SplideSlide {
  width: 100%;
  height: 100%;
}

img {
  max-width: 100%;
  max-height: 100%;
}


</style>