<template>
  <div >
    <Hero/>
    <Category/>
    <v-container>
      <h1 class="title my-10">برترین سایت های ایران</h1>
    </v-container>
    <v-container fluid class="px-lg-16">
      <v-row>
        <v-col md="4">
          <FilterComponents/>
        </v-col>
        <v-col md="8">
          <Slider/>
          <v-row class="justify-center d-flex">
            <v-col v-for="i in 12" md="3">
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
import FilterComponents from "~/components/HomePage/FilterComponents/test";

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
.title {
  font-size: 36px !important;
}
</style>
