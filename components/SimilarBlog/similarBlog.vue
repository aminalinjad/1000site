<template>
  <div>
    <div class="d-flex justify-space-between mb-2 mt-16">
      <div  class="box-title">شاید به این موارد هم علاقه مند باشید</div>
      <a href="">
        رفتن به صفحه بلاگ
        <v-icon>mdi-arrow-left</v-icon>
      </a>
    </div>
    <v-row>
      <v-col v-for="(item, index) in 3" :key="index" md="4">
        <slider-card/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SliderCard from "@/components/SliderCard/SliderCard";

export default {
  name: "similarBlog",
  components: {
    SliderCard
  }
}
</script>

<style scoped>
.box-title {
  font-size: 20px;
  font-weight: bold;
}
</style>
