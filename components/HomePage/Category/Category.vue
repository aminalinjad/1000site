<template>
  <v-container>
    <v-row class="all-box">
      <v-btn outlined :key="index" class="each-box border-radius-16 primary--text ml-4" v-for="(item , index) in items">
        <v-icon class="ml-4" size="24"
        >mdi-cart-outline</v-icon
        >
        {{item.name}}
      </v-btn>
    </v-row>
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
        }
        ,{
          name: "رمز و ارز دیجیتال",
          icon: ""
        },
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
        }
        ,{
          name: "رمز و ارز دیجیتال",
          icon: ""
        },
      ],
    }
  }
}
</script>

<style scoped>

</style>
