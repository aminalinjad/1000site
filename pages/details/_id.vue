<template>
  <v-container fluid class="custom-container mt-8">
    <v-breadcrumbs
      class="pr-0 pt-0"
      :items="items"
      divider=">"
    ></v-breadcrumbs>
    <h1 class="6rem">صرافی دیجیتال اکسکوینو</h1>
  </v-container>
</template>

<script>
export default {
  name: "detail-page",
  data() {
    return {
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
    }
  }
}
</script>

<style scoped>

</style>
