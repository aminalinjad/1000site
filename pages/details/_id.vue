<template>
  <v-container fluid class="custom-container mt-8">
    <v-breadcrumbs
      class="pr-0 pt-0"
      :items="items"
      divider=">"
    ></v-breadcrumbs>
    <h1 class="title1">صرافی دیجیتال اکسکوینو</h1>
    <div class="mt-8 mb-4">
      <button @click="goTo('image')" class="custom-btn active">
        <v-icon color="primary" class="me-1" size="16">mdi-image</v-icon>
        گالری
      </button>
      <button @click="goTo('details')" class="custom-btn mx-3">
        <v-icon class="me-1" size="16">mdi-information-outline</v-icon>
        جزییات
      </button>
      <button @click="goTo('comments')" class="custom-btn">
        <v-icon class="me-1" size="18">mdi-note-edit-outline</v-icon>
        نظرات
      </button>
    </div>
    <v-divider></v-divider>
    <v-row class="mt-6">
      <v-col cols="12" md="8">
        <!--        <div class="d-flex justify-space-around align-center py-4">-->
        <!--          <v-btn-->
        <!--            variant="text"-->
        <!--            icon="mdi-minus"-->
        <!--            @click="model = Math.max(model - 1, 0)"-->
        <!--          ></v-btn>-->
        <!--          {{ model }}-->
        <!--          <v-btn-->
        <!--            variant="text"-->
        <!--            icon="mdi-plus"-->
        <!--            @click="model = Math.min(model + 1, 4)"-->
        <!--          ></v-btn>-->
        <!--        </div>-->
        <section id="image">
          <v-carousel
            show-arrows-on-hover
            class="border-radius-16"
            v-model="model"
          >
            <v-carousel-item
              v-for="(color, i) in colors"
              :key="color"
              :value="i"
            >
              <v-sheet
                :color="color"
                height="100%"
                tile
              >
                <div class="d-flex fill-height justify-center align-center">
                  <div class="text-h2">
                    Slide {{ i + 1 }}
                  </div>
                </div>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>

          <div class="image-box d-flex flex-wrap">
            <div @click="clickOnSliderImage(item , index)" v-for="(item , index) in colors" :key="index" class="pa-2"
                 style="width: 20%">
              <img :class="{'active-slider': index === model}" class="border-radius-16 every-image"
                   src="../../static/image/banner.jpg" alt="">
            </div>

            <div @click="dialog = true" class="pa-2 align-stretch d-flex"
                 style="width: 20%">
              <div style="background-color: #757575" class="border-radius-16 every-image text-center d-flex align-center justify-center">
                <div>
                  <v-icon size="40">mdi-play-circle-outline</v-icon>
                  <div>پخش کردن ویدیو</div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section id="details">
          <div class="title1 mt-6">اطلاعات</div>
          <v-row class="mb-4">
            <v-col md="6">
              <div class="d-flex mb-3 align-center">
                <div style="font-size: 18px" class="ml-1">نام:</div>
                <div class="descriptionText--text">امین علی نژاد</div>
              </div>
              <div class="d-flex mb-3 align-center">
                <div style="font-size: 18px" class="ml-1">نام:</div>
                <div class="descriptionText--text">امین علی نژاد</div>
              </div>
              <div class="d-flex mb-3 align-center">
                <div style="font-size: 18px" class="ml-1">نام:</div>
                <div class="descriptionText--text">امین علی نژاد</div>
              </div>
              <div class="d-flex mb-3 align-center">
                <div style="font-size: 18px" class="ml-1">نام:</div>
                <div class="descriptionText--text">امین علی نژاد</div>
              </div>
              <div class="d-flex mb-3 align-center">
                <div style="font-size: 18px" class="ml-1">نام:</div>
                <div class="descriptionText--text">امین علی نژاد</div>
              </div>
            </v-col>

            <v-col md="6">
              <div class="d-flex mb-3 align-center">
                <div style="font-size: 18px" class="ml-1">نام:</div>
                <div class="descriptionText--text">امین علی نژاد</div>
              </div>
              <div class="d-flex mb-3 align-center">
                <div style="font-size: 18px" class="ml-1">نام:</div>
                <div class="descriptionText--text">امین علی نژاد</div>
              </div>
              <div class="d-flex mb-3 align-center">
                <div style="font-size: 18px" class="ml-1">نام:</div>
                <div class="descriptionText--text">امین علی نژاد</div>
              </div>
              <div class="d-flex mb-3 align-center">
                <div style="font-size: 18px" class="ml-1">نام:</div>
                <div class="descriptionText--text">امین علی نژاد</div>
              </div>
              <div class="d-flex mb-3 align-center">
                <div style="font-size: 18px" class="ml-1">نام:</div>
                <div class="descriptionText--text">امین علی نژاد</div>
              </div>
            </v-col>
          </v-row>

          <div class="box pa-4 mb-4">
            <v-row>
              <v-col class="text-center" md="3">
                <img src="../../static/image/check.svg" alt="">
                <div>ضد خش</div>
              </v-col>
              <v-col class="text-center" md="3">
                <img src="../../static/image/check.svg" alt="">
                <div>ضد خش</div>
              </v-col>
              <v-col md="3" class="text-center">
                <img src="../../static/image/check.svg" alt="">
                <div>ضد خش</div>
              </v-col>
              <v-col md="3" class="text-center">
                <img src="../../static/image/check.svg" alt="">
                <div>ضد خش</div>
              </v-col>
            </v-row>
          </div>

          <v-expansion-panels class="border-radius-12" accordion>
            <v-expansion-panel
              v-for="(item,i) in 5"
              :key="i"
            >
              <v-expansion-panel-header>مواررد خاص</v-expansion-panel-header>
              <v-expansion-panel-content>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
                متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
                کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
                شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
                الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری
                موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و
                جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

          <h2 class="title1 mt-4 mb-2">درباره ما</h2>
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
            متون
            بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع
            با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه
            و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
            پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
            شرایط
            سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
            موجود
            طراحی اساسا مورد استفاده قرار گیرد.</p>
        </section>


        <div id="comments" class="comment-box">
          <v-col cols="12">
            <h2 class="title1 mb-3">نظرات</h2>
            <v-row class="justify-center align-center text-center">
              <v-col md="7">
                <div class="d-flex align-center mb-2">
                  <div class="d-flex">
                    5
                    <v-icon class="ml-2" size="14">mdi-star-outline</v-icon>
                  </div>

                  <v-progress-linear
                    v-model="power"
                    color="amber"
                    height="16"
                    class="border-radius-16"
                  ></v-progress-linear>

                  <div class="mr-3">50%</div>
                </div>
                <div class="d-flex align-center mb-2">
                  <div class="d-flex">
                    4
                    <v-icon class="ml-2" size="14">mdi-star-outline</v-icon>
                  </div>

                  <v-progress-linear
                    v-model="power"
                    color="amber"
                    height="16"
                    class="border-radius-16"
                  ></v-progress-linear>

                  <div class="mr-3">50%</div>
                </div>
                <div class="d-flex align-center mb-2">
                  <div class="d-flex">
                    3
                    <v-icon class="ml-2" size="14">mdi-star-outline</v-icon>
                  </div>

                  <v-progress-linear
                    v-model="power"
                    color="amber"
                    height="16"
                    class="border-radius-16"
                  ></v-progress-linear>

                  <div class="mr-3">50%</div>
                </div>
                <div class="d-flex align-center mb-2">
                  <div class="d-flex">
                    2
                    <v-icon class="ml-2" size="14">mdi-star-outline</v-icon>
                  </div>

                  <v-progress-linear
                    :value="40"
                    color="amber"
                    height="16"
                    class="border-radius-16"
                  ></v-progress-linear>

                  <div class="mr-3">40%</div>
                </div>
                <div class="d-flex align-center">
                  <div class="d-flex">
                    1
                    <v-icon class="ml-2" size="14">mdi-star-outline</v-icon>
                  </div>

                  <v-progress-linear
                    :value="20"
                    color="amber"
                    height="16"
                    class="border-radius-16"
                  ></v-progress-linear>

                  <div class="mr-3">20%</div>
                </div>
              </v-col>

              <v-col md="5">
                <div class="title1">4.7</div>
                <div class="d-flex justify-center align-center">
                  <v-icon size="16" color="amber">mdi-star</v-icon>
                  <v-icon size="16" color="amber">mdi-star</v-icon>
                  <v-icon size="16" color="amber">mdi-star</v-icon>
                  <v-icon size="16" color="amber">mdi-star</v-icon>
                  <v-icon size="16" color="amber">mdi-star</v-icon>
                </div>
                <div class="gray3--text">۵ نظر</div>
              </v-col>
            </v-row>

            <v-row class="justify-space-between mt-8">
              <v-col cols="9">
                <v-btn color="primary" class="border-radius-12" outlined>
                  <v-icon size="16" color="primary">mdi-note-edit-outline</v-icon>
                  ثبت نظر
                </v-btn>
              </v-col>
              <v-col cols="3">
                <v-autocomplete
                  :items="sorts"
                  dense
                  flat
                  outlined
                  hide-details
                  background-color="#fff"
                  class="sort-input border-radius-16"
                  item-text="name"
                  placeholder="مرتب سازی"
                >
                </v-autocomplete>
              </v-col>
            </v-row>

          </v-col>
        </div>
        <v-divider class="mb-4"></v-divider>
        <div class="mb-4">
          <div class="align-items-start d-flex">
            <img width="40" height="40" class="avatar me-3 rounded-circle" src="../../static/image/28.png" alt="">
            <div>
              <div class="name">امین علی نژاد</div>
              <div class="d-flex">
                <v-rating
                  v-model="rating"
                  readonly
                  color="#fdbc31"
                  class="pa-0"
                  half-increments
                  size="18"
                ></v-rating>
              </div>
            </div>
          </div>
          <p class="mt-2">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
            بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع
            با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه
            ا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
          </p>
          <v-divider></v-divider>
        </div>
        <div class="mb-4">
          <div class="align-items-start d-flex">
            <img width="40" height="40" class="avatar me-3 rounded-circle" src="../../static/image/28.png" alt="">
            <div>
              <div class="name">امین علی نژاد</div>
              <div class="d-flex">
                <v-rating
                  v-model="rating"
                  readonly
                  color="#fdbc31"
                  class="pa-0"
                  half-increments
                  size="18"
                ></v-rating>
              </div>
            </div>
          </div>
          <p class="mt-2">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
            بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع
            با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه
            ا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
          </p>
          <v-divider></v-divider>
        </div>
        <div class="mb-4">
          <div class="align-items-start d-flex">
            <img width="40" height="40" class="avatar me-3 rounded-circle" src="../../static/image/28.png" alt="">
            <div>
              <div class="name">امین علی نژاد</div>
              <div class="d-flex">
                <v-rating
                  v-model="rating"
                  readonly
                  color="#fdbc31"
                  class="pa-0"
                  half-increments
                  size="18"
                ></v-rating>
              </div>
            </div>
          </div>
          <p class="mt-2">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
            بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع
            با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه
            ا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
          </p>
          <v-divider></v-divider>
        </div>
      </v-col>
      <v-col cols="12" md="4">
        <div class="sticky-box">
          <div>
            <v-btn class="border-radius-12 me-2" depressed color="success">خانه</v-btn>
            <v-btn class="border-radius-12" depressed color="info">فروشگاهی</v-btn>
          </div>

          <h2 class="my-4">12 ملیون تومان</h2>
          <div class="box py-4 px-6">
            <div class="align-items-start d-flex">
              <img width="40" height="40" class="avatar me-3 rounded-circle" src="../../static/image/28.png" alt="">
              <div>
                <div class="name">امین علی نژاد</div>
                <div class="d-flex">
                  <v-rating
                    v-model="rating"
                    readonly
                    color="#fdbc31"
                    class="pa-0"
                    half-increments
                    size="18"
                  ></v-rating>
                  <div class="mr-1 gray3--text">۵ نظر</div>
                </div>
              </div>


            </div>
            <div class="mt-4">
              <nuxt-link to="/">بقیه سایت های امین علی نژاد</nuxt-link>
            </div>


            <div class="mt-5">
              <v-btn class="border-radius-8" color="primary" outlined>
                <v-icon class="ml-1" size="20">mdi-phone</v-icon>
                09015912178
              </v-btn>
              <br>
              <v-btn class="border-radius-8 mt-4" color="primary">
                <v-icon class="ml-1" size="20">mdi-message</v-icon>
                ارسال پیام
              </v-btn>
              <div class="mt-4 d-flex">
                <div>
                  ساعت باز: <span>۸</span>
                </div>

                <div class="mr-5">
                  ساعت بستن: <span>۱۸</span>
                </div>
              </div>
            </div>

          </div>
          <div class="position-relative my-4">
            <v-btn class="direction-btn position-absolute" color="primary">
              <v-icon class="me-1" size="18">mdi-directions</v-icon>
              مسیریابی
            </v-btn>
            <img class="border-radius-16" width="100%" src="../../static/image/map.jpg" alt="">
          </div>
        </div>


      </v-col>
    </v-row>

    <v-col cols="12">
      <h3 class="title1 mt-4">موارد مشابه</h3>
    </v-col>
    <v-row>
      <v-col v-for="(item, index) in 3" :key="index" md="4">
        <slider-card/>
      </v-col>
    </v-row>


    <!--    dialog for video-->
    <v-dialog
      content-class="border-radius-0"
      style="border-radius: 0"
      v-model="dialog"
      fullscreen
      :scrim="false"
      transition=""
    >
        <v-btn
          style="z-index: 99;right: 20px;top: 20px"
          class="position-absolute"
          icon
          dark
          @click="dialog = false"
        >
          <v-icon class="primary--text">mdi-close</v-icon>
        </v-btn>

      <v-card class="d-flex justify-center align-center">

        <div class="d-flex align-center justify-center mt-15">
          <video width="100%" height="600" controls class="border-radius-16">
            <source src="https://www.w3schools.com/tags/movie.mp4" type="video/mp4">
            <source src="https://www.w3schools.com/tags/movie.ogg" type="video/ogg">
            Your browser does not support the video tag.
          </video>
        </div>

      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import sliderCard from "@/components/SliderCard/SliderCard";

export default {
  name: "detail-page",
  components: {
    sliderCard
  },
  data() {
    return {
      dialog: false,
      power: 78,
      sorts: [
        {name: 'گران ترین', abbr: 'FL', id: 1},
        {name: 'ارزان ترین', abbr: 'GA', id: 2},
        {name: 'غذا', abbr: 'CA', id: 4},
      ],
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
        'yellow'
      ],
      model: 0,
      items: [
        {
          text: 'صفحه اصلی',
          disabled: false,
          to: '/',
        },
        {
          text: 'کتگوری خاص',
          disabled: false,
          to: '/',
        },
        {
          text: 'سایت اکسکوینو',
          disabled: true,
          href: '',
        }
      ],
      rating: 4.5
    }
  },
  methods: {
    goTo(place) {
      this.$vuetify.goTo(`#${place}`, {
        duration: 500,
        offset: 10,
        easing: 'easeInOutCubic',
      })
    },
    clickOnSliderImage(item, index) {
      this.model = index
    }
  }
}
</script>

<style scoped lang="scss">
.title1 {
  font-size: 26px;
}

.custom-btn {
  border: unset;
  background-color: #f5f4f8;
  font-weight: 400;
  border-radius: 12px;
  color: #454056;
  padding: 8px 18px;
}

.custom-btn:hover {
  box-shadow: 0 0.125rem 0.125rem -0.125rem rgb(31 27 45 / 8%), 0 0.25rem 0.75rem rgb(31 27 45 / 8%);
}

.active {
  box-shadow: 0 0.125rem 0.125rem -0.125rem rgb(31 27 45 / 8%), 0 0.25rem 0.75rem rgb(31 27 45 / 8%);
  color: var(--v-primary-base);
}

.box {
  box-shadow: 0 0.125rem 0.125rem -0.125rem rgb(31 27 45 / 8%), 0 0.25rem 0.75rem rgb(31 27 45 / 8%);
  border-radius: 14px;
}

.direction-btn {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 120px;
}

.signup-email-btn {
  position: absolute;
  left: 6px;
  top: 6px;
}

.signup-email-input {
  border: 1px solid #efecf3;
  border-radius: 18px;
  padding: 0 10px;

}

.sort-input {
  border: 1px solid #efecf3;
}

.every-image {
  display: block;
  width: 100%;
  transition: opacity .2s ease-in-out, border-color .2s ease-in-out;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: .5rem;
  opacity: .6;
  cursor: pointer;
}

.every-image:hover {
  opacity: 1;
}

.active-slider {
  border: 2px solid var(--v-primary-base);
  opacity: 1;
}

.sticky-box {
  position: sticky;
  top: 125px;
}
</style>
