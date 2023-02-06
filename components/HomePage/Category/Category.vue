<template>
  <v-container fluid class="custom-container">
    <v-slide-group
      show-arrows
    >
      <v-slide-item
        :key="index"
        v-for="(item , index) in items"
        v-slot="{ active, toggle }"
        class="align-center align-content-center each-box ml-4"
      >
        <v-btn
          class="mx-2"
          color="#fff"
          height="60"
          depressed
          rounded
          @click="toggle"
        >
          <div class="icon-box ml-4">
            <v-icon color="#5d3cf2" size="24"
            >mdi-bed
            </v-icon
            >
          </div>
          <div class="text">{{ item.name }}</div>
        </v-btn>
      </v-slide-item>
    </v-slide-group>

  </v-container>
</template>

<script>
export default {
  name: "Category",
  data() {
    return {
      items: [
        {
          name: "آشپزی",
          icon: ""
        },
        {
          name: "خانه",
          icon: ""
        },
        {
          name: "پوشاک",
          icon: ""
        },
        {
          name: "رمز و ارز دیجیتال",
          icon: ""
        },
        {
          name: "مشاهده همه",
          icon: ""
        },
      ],
    }
  }
}
</script>

<style scoped>
.all-box {
  overflow-x: auto;
  width: 100%;
}
.each-box {
  box-shadow: 0 0.125rem 0.125rem -0.125rem rgb(31 27 45 / 8%), 0 0.25rem 0.75rem rgb(31 27 45 / 8%) !important;
  height: 55px;
  padding: 8px 8px 8px 24px;
  border-radius: 30px;
  cursor: pointer;
  background: #ffffff;

}

.text {
  color: #1f1b2d !important;
}
.icon-box {
  border-radius: 50%;
  padding: 10px;
  background: #5d3cf21a
}
</style>
