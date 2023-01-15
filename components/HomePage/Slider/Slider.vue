<template>
  <div class="carousel-wrapper">
    <client-only>
      <carousel v-bind="options">
        <slide v-for="i in 5" :key="i" class="img-wrapper">
          <card/>
        </slide>
      </carousel>
    </client-only>
  </div>
</template>

<script>
import Card from "~/components/Card/Card";
export default {
  components: {Card},
  data() {
    return {
      options: {
        loop: true,
        perPage: 3,
        paginationEnabled: false,
        rtl: true
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
