<template>
  <v-card
    class="my-2 mx-2 border-radius-12 every-card pb-3"
    outlined
  >

    <v-img
      height="180"
      class="border-radius-12"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>سایت اکسکوینو</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-icon color="#d8c518" size="20"
        >mdi-star
        </v-icon
        >

        <div class="grey--text mx-1">
          4.5 (413)
        </div>
        <v-icon color="#9691a4" size="20"
        >mdi-map
        </v-icon
        >
        <div class="grey--text mx-1">
          خیابان ثانی
        </div>
        <v-icon color="#9691a4" size="20"
        >mdi-phone
        </v-icon
        >
        <div class="grey--text mx-1">
          09015912178
        </div>
      </v-row>

    </v-card-text>

  </v-card>
</template>

<script>
export default {
  name: "Card",
}
</script>

<style lang="scss" scoped>
.carousel-wrapper {
  padding: 40px;
  height: 150px;
  .VueCarousel-slide {
    text-align: center;
  }
}
.img-wrapper img {
  margin: auto;
  width: 200px;
  height: 100px;
  background-image: linear-gradient(gray 100%, transparent 0);
}
.every-card {
  //box-shadow: 0 0.125rem 0.125rem -0.125rem rgb(31 27 45 / 8%), 0 0.25rem 0.75rem rgb(31 27 45 / 8%) !important;
  border: unset !important;
}
</style>
