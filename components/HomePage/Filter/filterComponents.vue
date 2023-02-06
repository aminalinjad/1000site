<template>
  <div class="filter-fixed">

    <v-tabs
      v-model="tabs"
      class="justify-center d-flex mt-6"
    >
      <v-tab
        href="#filter"
        class="custom-tab"
      >
        <v-icon>mdi-filter</v-icon>
      </v-tab>

      <v-tab
        href="#heart"
        class="custom-tab"
      >
        <v-icon>mdi-heart</v-icon>
      </v-tab>
    </v-tabs>


    <v-tabs-items v-model="tabs">
      <v-tab-item
        value="filter"
      >
        <v-card flat>
          <v-card-text>
            <h2 class="mb-3">قسمت اول فیلتر</h2>
            <v-expansion-panels
              class="border-radius-12"
              flat
            >
              <v-expansion-panel
                class="mb-3"
              >
                <v-expansion-panel-header>کتگوری 1</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-checkbox
                    v-model="selected"
                    label="شسیشس"
                    value="John"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="selected"
                    label="لبیلیب"
                    value="Jacob"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="selected"
                    label="لبیلبیلی"
                    value="John"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="selected"
                    label="للللیبل"
                    value="Jacob"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="selected"
                    label="للللللل"
                    value="John"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="selected"
                    label="لللل"
                    value="Jacob"
                    hide-details
                  ></v-checkbox>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
            <v-expansion-panels
              flat
              class="border-radius-12"
            >
              <v-expansion-panel
                class="mb-3"
              >
                <v-expansion-panel-header>کتگوری ۲</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-checkbox
                    v-model="selected"
                    label="تست دیگه"
                    value="John"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="selected"
                    label="تست بعدی"
                    value="Jacob"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="selected"
                    label="تست"
                    value="John"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="selected"
                    label="یک چیز دیگه"
                    value="Jacob"
                    hide-details
                  ></v-checkbox>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>

            <h2 class="my-3">قسمت دوم فیلتر</h2>
            <v-expansion-panels
              flat
              class="border-radius-12"
            >
              <v-expansion-panel
                class="mb-3"
              >
                <v-expansion-panel-header>کتگوری ۳</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-checkbox
                    v-model="selected"
                    label="فست فود"
                    value="John"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="selected"
                    label="سنتی"
                    value="Jacob"
                    hide-details
                  ></v-checkbox>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
            <v-expansion-panels
              flat
              class="border-radius-12"
            >
              <v-expansion-panel
                class="mb-3"
              >
                <v-expansion-panel-header>کتگوری۴</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-checkbox
                    v-model="selected"
                    label="خرید"
                    value="John"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="selected"
                    label="غذا"
                    value="ss"
                    hide-details
                  ></v-checkbox>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
            <h2 class="my-3">قیمت گذاری</h2>
            <v-range-slider
              track-color="#e2e0e7"
              height="3"
              track-fill-color="primary"
              max="90"
              min="-50"
            ></v-range-slider>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item
        value="heart"
        class="mt-6"
      >
        بهترین سایت در زمنه ارز های دیجیتال که از تمامی سایت ها بهتر استبهترین سایت در زمنه ارز های دیجیتال که از تمامی
        سایت ها بهتر استبهترین سایت در زمنه ارز های دیجیتال که از تمامی سایت ها بهتر است
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  name: "filter-components",
  data() {
    return {
      selected: [],
      tabs: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }
  }
}
</script>

<style scoped lang="scss">
.filter-fixed {
  position: -webkit-sticky;
  position: sticky;
  top: 125px;
}

.custom-tab {
  background-color: #f5f4f8 !important;
  color: #454056 !important;
  border-radius: .5rem;
  height: 35px;
}

.v-tab--active {
  background-color: #fff !important;
  color: var(--v-primary-base) !important;
}
</style>
