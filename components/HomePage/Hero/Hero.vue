<template>
  <section class="home-page-hero position-relative mx-n1 mx-md-0 mb-n12 mb-sm-0 mt-md-10 mt-0">
    <v-container class="fill-height position-relative">
      <v-row align="center">
        <v-col
          cols="12"
          md="7"
          class=" content-parent px-4 px-sm-3"
        >
          <v-row>
            <v-col cols="9" md="12">
              <h1
                class="grayScale0--text mb-1 text-capitalize"
                :class="$vuetify.breakpoint.mdAndUp?'font-medium-36':'font-medium-28'"
              >
                هزاران سایت با شعار عالی
              </h1>
              <p
                class="grayScale1--text mb-md-0"
                :class="{'font-regular-14':$vuetify.breakpoint.smAndDown}"
              >
                بهترین سایت برای رسیدن به دنیای بیکران
              </p>
            </v-col>
          </v-row>
          <div
            class="hero-search-container"
            :class="$vuetify.breakpoint.mdAndUp?'mt-9':'mt-8'"
          >
            <v-row class="search-box align-center">
              <v-col cols="5" class="pa-0">
                <v-text-field
                  placeholder="جستجو در بین هزاران سایت"
                  solo
                  flat
                  hide-details
                  background-color="#fff"
                  class="search-input"
                  v-model="searchValue"
                >
                </v-text-field>
              </v-col>
              <v-col md="4" cols="5" class="pa-0">
                <v-autocomplete
                  :items="states"
                  flat
                  solo
                  hide-details
                  background-color="#fff"
                  class="category-input"
                  item-text="name"
                  placeholder="کتگوری"

                >
                </v-autocomplete>
              </v-col>
              <v-col md="3" cols="2" class="pa-0 text-left">
                <v-btn
                  color="primary"
                  class="px-0 border-radius-16 search-btn"
                  :width="$vuetify.breakpoint.mdAndUp? 138:56"
                  min-width="56"
                  height="52"
                  @click="search"
                >
                  <v-icon size="25" color="grayScale0">mdi-magnify</v-icon>
                  <span
                    class="ms-2 grayScale0--text"
                    v-if="$vuetify.breakpoint.mdAndUp"
                  >جستجو</span
                  >
                </v-btn>
              </v-col>

            </v-row>

            <!--            <v-form @submit.prevent="search" v-model="valid">-->
            <!--              <v-row class="position-relative">-->
            <!--                <v-col cols="7" class="pl-0">-->
            <!--                  <v-text-field-->
            <!--                    placeholder="جستجو در بین هزاران سایت"-->
            <!--                    flat-->
            <!--                    outlined-->
            <!--                    hide-details-->
            <!--                    background-color="#fff"-->
            <!--                    height="56"-->
            <!--                    color="primary"-->
            <!--                    class="search-input"-->
            <!--                    v-model="searchValue"-->
            <!--                  >-->
            <!--                  </v-text-field>-->
            <!--                </v-col>-->
            <!--                <v-col cols="5" class="pr-0">-->
            <!--                  <v-autocomplete-->
            <!--                    :items="states"-->
            <!--                    flat-->
            <!--                    outlined-->
            <!--                    hide-details-->
            <!--                    background-color="#fff"-->
            <!--                    height="56"-->
            <!--                    color="primary"-->
            <!--                    class="category-input"-->
            <!--                    item-text="name"-->
            <!--                    placeholder="کتگوری"-->

            <!--                  >-->
            <!--                  </v-autocomplete>-->
            <!--                  <v-btn-->
            <!--                    color="primary"-->
            <!--                    class="px-0 border-radius-16 search-btn"-->
            <!--                    height="58"-->
            <!--                    :width="$vuetify.breakpoint.mdAndUp? 138:56"-->
            <!--                    min-width="56"-->
            <!--                    @click="search"-->
            <!--                  >-->
            <!--                    <v-icon size="25" color="grayScale0">mdi-magnify</v-icon>-->
            <!--                    <span-->
            <!--                      class="ms-2 grayScale0&#45;&#45;text"-->
            <!--                      v-if="$vuetify.breakpoint.mdAndUp"-->
            <!--                    >جستجو</span-->
            <!--                    >-->
            <!--                  </v-btn>-->
            <!--                </v-col>-->
            <!--              </v-row>-->
            <!--            </v-form>-->
          </div>
        </v-col>
        <v-col cols="12" md="5">
          <v-img
            src="image/hero-image.jpg"
            class="hero-image border-radius-16 d-none d-md-block"
            :width="$vuetify.breakpoint.mdAndUp?886:'100%'"

            :contain="$vuetify.breakpoint.mdAndUp"
          ></v-img>
        </v-col>

      </v-row>
    </v-container>
  </section>

</template>
<script>
export default {
  name: 'home-page-hero',
  props: [],
  data() {
    return {
      searchValue: '',
      valid: false,
      selectTabSearch: '',
      graphPermission: false,
      states: [
        {name: 'خانه', abbr: 'FL', id: 1},
        {name: 'خرید', abbr: 'GA', id: 2},
        {name: 'آشپزخانه', abbr: 'NE', id: 3},
        {name: 'غذا', abbr: 'CA', id: 4},
      ],
    }
  },
  methods: {
    search() {
      if (this.searchValue.length > 400) {
        this.searchValue = this.searchValue.slice(0, 400)
      }
      this.$router.push({path: '/Search', query: {s: this.searchValue}})
    },
  },
}

</script>
<style scoped lang="scss">
.home-page-hero {
  min-height: 280px;
  height: 280px;
  @media (max-width: 960px) {
    min-height: 220px;
    height: 220px;
    &::before {
      height: 100% !important;
      z-index: 1 !important;
    }
  }

  &::before {
    content: '';
    z-index: 0;
    position: absolute;
    width: 100%;
    height: 836px;
    left: 0;
    top: 0;
    background: linear-gradient(
        180deg,
        var(--v-gray1-base),
        rgba(0, 0, 0, 0) 100%
    );
  }

  .content-parent {
    z-index: 2;
  }

  .hero-search-container {
    max-width: 646px;

    .v-text-field--outlined fieldset {
      border: none;
    }

    .search-btn {
      box-shadow: 0 0 15px 0 rgba(76, 136, 255, 0.4);
      border-radius: 60px !important;
      font-weight: bold;
    }

    .search-input {
      border: none;
      border-radius: 0;
      border-left: 1px solid #efecf3;
    }

    .category-input {
      border: none;
    }
  }
  .search-box {
    border: 1px solid #efecf3;
    padding: 7px;
    border-radius: 60px;
    box-shadow: 0 0.125rem 0.125rem -0.125rem rgb(31 27 45 / 8%), 0 0.25rem 0.75rem rgb(31 27 45 / 8%);
  }
  .hero-image {
    //position: absolute;
    //right: -25%;
    //top: 0;
    @media (max-width: 600px) {
      //right: -13%;
      //top: -10%;
      //transform: scaleX(-1) rotate(19deg);
    }
    @media (max-width: 960px) and (min-width: 600px) {
      //right: 0;
      //top: 0;
      //transform: scaleX(-1);
    }
  }
}

</style>

