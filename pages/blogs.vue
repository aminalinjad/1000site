<template>
  <v-container fluid class="custom-container mt-8">
    <v-breadcrumbs
      class="pr-0 pt-0"
      :items="items"
      divider=">"
    ></v-breadcrumbs>

    <h1 class="title1">اخبار های سایت</h1>

    <v-row>
      <v-col cols="12" md="6">
        <SponsoredCard/>
      </v-col>
      <v-col cols="12" md="6">
        <SponsoredCard/>
      </v-col>
    </v-row>
    <v-divider class="mb-10"></v-divider>

    <v-row>
      <v-col cols="12" md="4">
        <v-text-field
          solo
          dense
          flat
          append-icon="mdi-magnify"
          class="search-input mb-4"
          hide-details
          placeholder="Placeholder"
        ></v-text-field>

        <div class="box my-6">
          <div class="box-title">کتگوری ها</div>
          <div class="each-category mb-2 mt-3 d-flex justify-space-between">
            <div>خانه</div>
            <div>(2)</div>
          </div>
          <div class="each-category mb-2 d-flex justify-space-between">
            <div>آشپزخانه</div>
            <div>(5)</div>
          </div>
          <div class="each-category mb-2 d-flex justify-space-between">
            <div>برنامه نویسی</div>
            <div>(3)</div>
          </div>
          <div class="each-category d-flex justify-space-between">
            <div>ارز دیجیتال</div>
            <div>(2)</div>
          </div>
        </div>

        <div class="box">
          <div class="box-title">تگ های معروف</div>
          <div class="mt-3">
            <v-btn elevation="0" outlined class="custom-border-button me-2 mb-2" rounded>برنامه نویسی</v-btn>
            <v-btn elevation="0" outlined class="custom-border-button me-2 mb-2" rounded>برنامه نویسی</v-btn>
            <v-btn elevation="0" outlined class="custom-border-button me-2 mb-2" rounded>برنامه نویسی</v-btn>
            <v-btn elevation="0" outlined class="custom-border-button me-2 mb-2" rounded>برنامه نویسی</v-btn>
          </div>
        </div>
        <div class="box mt-6">
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

      <v-col cols="12" md="8">
        <div class="every-blogs">
          <v-row>
            <v-col md="4" cols="12">
              <img class="border-radius-12" width="100%" src="https://cdn.vuetifyjs.com/images/cards/cooking.png" alt="">
            </v-col>
            <v-col md="8" cols="12">
              <div class="primary--text">رمز ارز</div>
              <div class="my-2" style="font-size: 20px">سایت اکسکوینو</div>

              <div class="gray3--text">
                لورم ایپسوم متن ساختگی با تولید سادگی د، تا با ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </div>
            </v-col>
          </v-row>
        </div>
        <div class="every-blogs">
          <v-row>
            <v-col md="4" cols="12">
              <img class="border-radius-12" width="100%" src="https://cdn.vuetifyjs.com/images/cards/cooking.png" alt="">
            </v-col>
            <v-col md="8" cols="12">
              <div class="primary--text">رمز ارز</div>
              <div class="my-2" style="font-size: 20px">سایت اکسکوینو</div>

              <div class="gray3--text">
                لورم ایپسوم متن ساختگی با تولید سادگی د، تا با ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </div>
            </v-col>
          </v-row>
        </div>
        <div class="every-blogs">
          <v-row>
            <v-col md="4" cols="12">
              <img class="border-radius-12" width="100%" src="https://cdn.vuetifyjs.com/images/cards/cooking.png" alt="">
            </v-col>
            <v-col md="8" cols="12">
              <div class="primary--text">رمز ارز</div>
              <div class="my-2" style="font-size: 20px">سایت اکسکوینو</div>

              <div class="gray3--text">
                لورم ایپسوم متن ساختگی با تولید سادگی د، تا با ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </div>
            </v-col>
          </v-row>
        </div>
        <div class="every-blogs">
          <v-row>
            <v-col md="4" cols="12">
              <img class="border-radius-12" width="100%" src="https://cdn.vuetifyjs.com/images/cards/cooking.png" alt="">
            </v-col>
            <v-col md="8" cols="12">
              <div class="primary--text">رمز ارز</div>
              <div class="my-2" style="font-size: 20px">سایت اکسکوینو</div>

              <div class="gray3--text">
                لورم ایپسوم متن ساختگی با تولید سادگی د، تا با ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </div>
            </v-col>
          </v-row>
        </div>
        <div class="every-blogs">
          <v-row>
            <v-col md="4" cols="12">
              <img class="border-radius-12" width="100%" src="https://cdn.vuetifyjs.com/images/cards/cooking.png" alt="">
            </v-col>
            <v-col md="8" cols="12">
              <div class="primary--text">رمز ارز</div>
              <div class="my-2" style="font-size: 20px">سایت اکسکوینو</div>

              <div class="gray3--text">
                لورم ایپسوم متن ساختگی با تولید سادگی د، تا با ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </div>
            </v-col>
          </v-row>
        </div>

        <v-divider class="my-10"></v-divider>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SponsoredCard from "../components/BlogPage/SponsoredCard";

export default {
  name: "blogs",
  components: {SponsoredCard},
  data() {
    return {
      items: [
        {
          text: 'صفحه اصلی',
          disabled: false,
          to: '/',
        },
        {
          text: 'لیست خبرها',
          disabled: true,
          href: '',
        }
      ],
    }
  }
}
</script>

<style scoped>


.box {
  border: 1px solid #efecf3;
  border-radius: 10px;
  padding: 20px;
}

.each-category {
  font-weight: 400;
  font-size: 16px;
  color: #696969;
}

.custom-border-button {
  border: 1px solid #d5d2dc !important;
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
</style>
