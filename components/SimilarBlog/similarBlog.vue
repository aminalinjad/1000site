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
      <v-col v-for="(item, index) in 4" :key="index" md="3" cols="12">
        <blog-card/>
      </v-col>
    </v-row>
  </div>
</template>

<script>


import BlogCard from "@/components/SimilarBlog/BlogCard";
export default {
  name: "similarBlog",
  components: {
    BlogCard,
  }
}
</script>

<style scoped>
.box-title {
  font-size: 20px;
  font-weight: bold;
}
</style>
