<template>
  <v-card
    class="my-2 mx-2"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="180"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>سایت اکسکوینو</v-card-title>

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

    <v-card-text class="text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرااز</v-card-text>

    <v-card-actions>
      <v-btn
        class="mb-4 mr-2"
        color="primary"
      >
        مشاهده سایت
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      selection: 1,
      loop: true,
      navigationEnabled: true,
      navigationNextLabel: "gdfg",
      navigationPrevLabel: "fdgdg"
    }
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
</style>
