<template>
  <v-container fluid class="custom-container mt-8">
    <v-breadcrumbs
      class="pr-0 pt-0"
      :items="items"
      divider=">"
    ></v-breadcrumbs>
    <h1 class="title1">صرافی دیجیتال اکسکوینو</h1>
    <div class="mt-8 mb-4">
      <button class="custom-btn active">
        <v-icon color="primary" class="me-1" size="16">mdi-image</v-icon>
        گالری
      </button>
      <button class="custom-btn mx-3">
        <v-icon class="me-1" size="16">mdi-information-outline</v-icon>
        جزییات
      </button>
      <button class="custom-btn">
        <v-icon class="me-1" size="18">mdi-note-edit-outline</v-icon>
        نظرات
      </button>
    </div>
    <v-divider></v-divider>
    <v-row class="mt-6">
      <v-col md="8">
        <div class="d-flex justify-space-around align-center py-4">
          <v-btn
            variant="text"
            icon="mdi-minus"
            @click="model = Math.max(model - 1, 0)"
          ></v-btn>
          {{ model }}
          <v-btn
            variant="text"
            icon="mdi-plus"
            @click="model = Math.min(model + 1, 4)"
          ></v-btn>
        </div>
        <v-carousel v-model="model">
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

        <v-expansion-panels class="border-radius-12" accordion>
          <v-expansion-panel
            v-for="(item,i) in 5"
            :key="i"
          >
            <v-expansion-panel-header>مواررد خاص</v-expansion-panel-header>
            <v-expansion-panel-content>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>

        <h2 class="title1 mt-4 mb-2">درباره ما</h2>
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
        <v-divider></v-divider>
      </v-col>
      <v-col md="4">
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
          </div>

        </div>
        <div class="position-relative my-4">
          <v-btn class="direction-btn position-absolute" color="primary">
            <v-icon class="me-1" size="18">mdi-directions</v-icon>
            مسیریابی
          </v-btn>
          <img class="border-radius-16" width="100%" src="../../static/image/map.jpg" alt="">
        </div>
        <div class="box py-4 px-6">
          <div class="box-title">با‌ما به‌روز باشید</div>
          <div style="color: #000000de" class="my-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</div>
          <div class="position-relative">

            <v-text-field
              placeholder="جستجو در بین هزاران سایت"
              solo
              flat
              hide-details
              background-color="#fff"
              prepend-icon="mdi-mail"
              class="signup-email-input"
            >
            </v-text-field>
            <v-btn
              color="primary"
              class="px-0 border-radius-16 signup-email-btn"
            >
                <span
                  class="ms-2 grayScale0--text"
                  v-if="$vuetify.breakpoint.mdAndUp"
                >ثبت</span
                >
            </v-btn>
            <div class="mt-2">
              در صورت ثبت ایمیل خود یعنی با تمام <a href="" class="primary--text">قوانین </a>سایت موافقت کرده‌اید
            </div>

          </div>
        </div>

      </v-col>
    </v-row>

    <h3 class="title1 mt-4">موارد مشابه</h3>
    <v-row>
      <v-col v-for="(item, index) in 3" :key="index" md="4">
        <slider-card/>
      </v-col>
    </v-row>

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
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
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
}
</style>
