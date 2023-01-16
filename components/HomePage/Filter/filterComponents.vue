<template>
  <div>
    <h2 class="mb-3">قسمت اول فیلتر</h2>
    <v-expansion-panels
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
    <h2 class="my-3">قسمت سوم فیلتر</h2>
    <v-expansion-panels
    >
      <v-expansion-panel
        class="mb-3"
      >
        <v-expansion-panel-header>قیمت گذاری</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-range-slider
            hint="قیمت درست انتخاب کنید"
            max="52"
            min="-49"
          ></v-range-slider>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  name: "Filter",
  data() {
    return {
      selected: []
    }
  }
}
</script>

<style scoped>

</style>
