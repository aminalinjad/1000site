<template>
  <div >
    <Hero/>
    <Category/>
    <Card/>
  </div>
</template>

<script>
import Hero from "../components/HomePage/Hero/Hero"
import Category from "@/components/HomePage/Category/Category";
import Card from "@/components/Card/Card";

export default {
  name: 'IndexPage',
  components: {
    Card,
    Category,
    Hero
  }
}
</script>
