<template>
  <v-card
    class="my-2 mx-2 border-radius-12 every-card"
    outlined
  >
    <v-carousel
      hide-delimiters
      height="180"
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(slide, i) in 5"
        :key="i"
      >
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        ></v-img>
      </v-carousel-item>
    </v-carousel>
    <v-card-text class="pb-0">
      <div class="primary--text py-0">کتگوری</div>
    </v-card-text>

    <v-card-title class="pt-0">سایت اکسکوینو</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :key="3"
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="mt-6 text-right">بهترین سایت در زمنه ارز های دیجیتال که از تمامی سایت ها بهتر است</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-row
        align="center"
        class="mx-0 my-2 justify-center"
      >
        <v-icon color="#9691a4" size="20"
        >mdi-car
        </v-icon
        >

        <div class="grey--text mx-2">
          1
        </div>
        <v-icon color="#9691a4" size="20"
        >mdi-bed
        </v-icon
        >
        <div class="grey--text mx-2">
          2
        </div>
        <v-icon color="#9691a4" size="20"
        >mdi-car
        </v-icon
        >
        <div class="grey--text mx-2">
          3
        </div>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {}
  },
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
  box-shadow: 0 0.125rem 0.125rem -0.125rem rgb(31 27 45 / 8%), 0 0.25rem 0.75rem rgb(31 27 45 / 8%) !important;
  border: unset !important;
}
</style>
