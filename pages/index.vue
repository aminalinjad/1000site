<template>
  <div >
    <Hero/>
    <Category/>
    <v-container fluid class="custom-container">
      <h1 class="title1 my-16">برترین سایت های ایران</h1>
    </v-container>
    <v-container fluid class="custom-container">
      <v-row>
        <v-col md="3">
          <FilterComponents/>
        </v-col>
        <v-col md="9">
          <Slider/>
          <v-row class="justify-center d-flex">
            <v-col v-for="i in 12" md="3" :key="i">
              <card/>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Hero from "../components/HomePage/Hero/Hero"
import Category from "@/components/HomePage/Category/Category";
import Card from "@/components/Card/Card";
import Slider from "@/components/HomePage/Slider/Slider";
import FilterComponents from "@/components/HomePage/Filter/filterComponents";

export default {
  name: 'IndexPage',
  components: {
    FilterComponents,
    Slider,
    Card,
    Category,
    Hero
  }
}
</script>
<style scoped lang="scss">
.title1 {
  font-size: 36px !important;
}
</style>
