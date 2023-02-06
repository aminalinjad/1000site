<template>
  <v-navigation-drawer
    v-model="openNavigationDrawer"
    app
    right
    width="100%"
    class="drawer-menu grayScale8"
  >
    <div class="px-4 pt-4 pb-6 d-flex flex-column fill-height">
      <v-icon
        size="24"
        class="mb-3 ml-auto d-flex"
        @click="updateNavigation(false)"
      >mdi-close</v-icon
      >
      <div class="fill-height">
        <v-row justify="end" class="mx-0 mt-0 mb-8" v-if="true">
          <v-btn
            dark
            :href="`${baseUrl}/auth/login`"
            class="border-radius-8 font-medium-14 px-7"
            height="48"
            text
          >
            <span class="primaryLight--text font-regular-14">ورود</span>
          </v-btn>
          <v-btn
            color="primary"
            :href="`${baseUrl}/auth/register`"
            class="border-radius-8 font-medium-14"
            height="48"
          >
            <span class="font-regular-14">ثبت نام</span>
          </v-btn>
        </v-row>
        <v-divider class="mb-3"></v-divider>
        <v-list class="py-0 grayScale2--text" flat>
          <div v-for="(item , index) in items" :key="index">
            <v-list-item
              :to="item.link"
              link
              active-class="active-route"
              class="pa-0"
              @click="updateNavigation(false)"
            >
              <v-list-item-content class="py-6">
                <v-list-item-title class="font-14 primaryLight--text"
                >{{ item.title }}</v-list-item-title
                >
              </v-list-item-content>
              <v-list-item-action>
                <v-icon color="grayScale2" size="12">mdi-arrow-left</v-icon>
              </v-list-item-action>
            </v-list-item>
            <v-divider ></v-divider>
            <v-list-item
              :href="`${docsBaseUrl}`"
              target='_blank'
              link
              active-class="active-route"
              class="pa-0"
              @click="updateNavigation(false)"
            >
              <v-list-item-content class="py-6">
                <v-list-item-title class="font-14 primaryLight--text"
                > درباره ما</v-list-item-title
                >
              </v-list-item-content>
              <v-list-item-action>
                <v-icon color="grayScale2" size="12">mdi-arrow-left</v-icon>
              </v-list-item-action>
            </v-list-item>
          </div>
        </v-list>
      </div>
    </div>
  </v-navigation-drawer>

</template>
<script>
export default {
  name: 'drawer-menu',
  components: {},
  props: {
    openDrawer: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      login: false,
      items: [
        {
          title: 'تماس باما',
          link: '/contact-us',
        },
      ],
      baseUrl: process.env.VUE_APP_PANEL_URL,
      docsBaseUrl: process.env.VUE_APP_DOCS_URL,
    }
  },
  computed: {
    openNavigationDrawer: {
      get() {
        return this.openDrawer
      },
      set(newValue) {
        return newValue
      },
    },
  },
  mounted() {},
  methods: {
    updateNavigation(e) {
      if (!e) {
        this.$emit('closeNavigationMenu')
      }
    },
  },
}

</script>
<style lang="scss">
.drawer-menu {
  z-index: 101 !important;
}

</style>

