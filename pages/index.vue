<template>
  <div >
    <Hero/>
    <Category class="category"/>
    <v-container fluid class="custom-container">
      <h1 class="title1 my-10">برترین سایت های ایران</h1>
    </v-container>
    <v-container fluid class="custom-container">
      <v-row>
        <v-col md="3">
          <FilterComponents/>
        </v-col>
        <v-col class="pr-lg-10" md="9">
          <Slider class="mb-4"/>
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
  font-size: 32px !important;
  position: relative;
  z-index: 9;
}
.category {
  position: relative;
}
</style>
