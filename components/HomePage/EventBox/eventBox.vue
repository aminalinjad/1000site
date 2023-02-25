<template>
  <hooper :wheelControl="false" style="height: 350px" :rtl="true" :itemsToShow="1.5" :centerMode="true" :infinite-scroll="true"
          :itemsToSlide="2">
    <slide>
      <div class="parent">
        <div class="px-4 pb-4 fill-height">
          <div class="d-flex justify-space-between align-end fill-height">
            <div class="white--text" style="font-size: 20px">مسابقه فوتبال</div>
            <v-btn-toggle
              rounded
              active-class="test"
            >
              <v-btn color="primary">
                <v-icon class="white--text">mdi-heart</v-icon>
              </v-btn>
              <v-btn to="/details/2" class="white--text" color="primary">
                خرید بلیط 40000 تومان
              </v-btn>
            </v-btn-toggle>
          </div>
        </div>
      </div>
    </slide>

    <slide>
      <div class="parent">
        <div class="px-4 pb-4 fill-height">
          <div class="d-flex justify-space-between align-end fill-height">
            <div class="white--text" style="font-size: 20px">مسابقه فوتبال</div>
            <v-btn-toggle
              rounded
              active-class="test"
            >
              <v-btn color="primary">
                <v-icon class="white--text">mdi-heart</v-icon>
              </v-btn>
              <v-btn to="/details/2" class="white--text" color="primary">
                خرید بلیط 40000 تومان
              </v-btn>
            </v-btn-toggle>
          </div>
        </div>
      </div>
    </slide>
    <slide>
      <div class="parent">
        <div class="px-4 pb-4 fill-height">
          <div class="d-flex justify-space-between align-end fill-height">
            <div class="white--text" style="font-size: 20px">مسابقه فوتبال</div>
            <v-btn-toggle
              rounded
              active-class="test"
            >
              <v-btn color="primary">
                <v-icon class="white--text">mdi-heart</v-icon>
              </v-btn>
              <v-btn to="/details/2" class="white--text" color="primary">
                خرید بلیط 40000 تومان
              </v-btn>
            </v-btn-toggle>
          </div>
        </div>
      </div>
    </slide>
    <slide>
      <div class="parent">
        <div class="px-4 pb-4 fill-height">
          <div class="d-flex justify-space-between align-end fill-height">
            <div class="white--text" style="font-size: 20px">مسابقه فوتبال</div>
            <v-btn-toggle
              rounded
              active-class="test"
            >
              <v-btn color="primary">
                <v-icon class="white--text">mdi-heart</v-icon>
              </v-btn>
              <v-btn to="/details/2" class="white--text" color="primary">
                خرید بلیط 40000 تومان
              </v-btn>
            </v-btn-toggle>
          </div>
        </div>
      </div>
    </slide>
    <hooper-pagination slot="hooper-addons"></hooper-pagination>
  </hooper>

</template>

<script>
import {Hooper, Slide, Pagination as HooperPagination} from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  name: 'App',
  components: {
    Hooper,
    Slide,
    HooperPagination
  },
};
</script>
<style scoped lang="scss">
.parent {
  background-image: url("../../../static/image/eventBanner.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  margin: 0 10px;
  border-radius: 20px;
  opacity: 0.6;
  transition: opacity 300ms ease-in-out;
}

.each-slide {
  padding-right: 24px;
}

li.hooper-slide.is-active.is-current > .parent {
  opacity: 1;
}

.content {
  height: 100%;
}

.hooper-pagination {
  bottom: -40px;
}

</style>
