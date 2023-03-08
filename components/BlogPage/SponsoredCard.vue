<template>
  <v-card
    class="my-2 mx-2 border-radius-12 every-card pb-3 position-relative"
    outlined
  >
    <div class="sponsored-btn position-absolute">Sponsored</div>
    <v-img
      cover
      class="border-radius-12"
      height="300"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>
    <v-card-text class="primary--text pb-0">رمز ارز</v-card-text>
    <v-card-title class="pt-0">سایت اکسکوینو</v-card-title>

    <v-card-text class="descriptionText--text">
      لورم ایپسوم متن ساختگی با تولید سادگی د، تا با ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
    </v-card-text>

  </v-card>
</template>

<script>
export default {
  name: "Sponsored-Card",
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

.sponsored-btn {
  top: 0;
  right: 0;
  background-color: #07c98b;
  color: #fff;
  padding: 2px 10px;
  z-index: 9;
  border-radius: 5px !important;
  margin: 10px;
}
</style>
