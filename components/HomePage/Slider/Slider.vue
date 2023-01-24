<template>
  <div class="carousel-wrapper">
    <client-only>
      <carousel v-bind="options">
        <slide v-for="i in 5" :key="i" class="img-wrapper">
          <SliderCard/>
        </slide>
      </carousel>
    </client-only>
  </div>
</template>

<script>
import SliderCard from "~/components/SliderCard/SliderCard";
export default {
  components: {SliderCard},
  data() {
    return {
      options: {
        loop: true,
        perPage: 3,
        paginationEnabled: false,
        rtl: true,
        navigationEnabled: true,
        navigationNextLabel:`<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12M10,17L15,12L10,7V17Z" />svg>`,
        navigationPrevLabel:`<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M14,7L9,12L14,17V7Z" /></svg>`,
      }
    }
  }
}
</script>

<style lang="scss">
.carousel-wrapper {
  .VueCarousel-slide {
    text-align: center;
  }
}
</style>
