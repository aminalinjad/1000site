<template>
  <v-navigation-drawer
    v-model="openNavigationDrawer"
    left
    app
    width="100%"
    class="drawer-panel grayScale8"
  >
    <div class="px-4 pt-4 pb-6 d-flex flex-column fill-height">
      <v-icon
        size="24"
        class="mb-5 ml-auto d-flex"
        @click="updateNavigation(false)"
      >mdi-close</v-icon
      >
      <v-card class="primary-background-gradiant border-radius-12" flat>
        <v-card-text class="py-3 px-4">
          <v-list class="py-0 grayScale2--text" flat>
            <div v-for="(item , index) in items" :key="index">
              <v-list-item
                :href="item.link"
                link
                active-class="active-route"
                class="pa-0"
                @click="updateNavigation(false)"
              >
                <v-list-item-icon class="me-3 my-0 py-6">
                  <v-icon color="grayScale2">{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content class="py-6">
                  <v-list-item-title class="font-14 grayScale1--text"
                  >{{ item.title }}</v-list-item-title
                  >
                </v-list-item-content>
                <v-list-item-action>
                  <v-icon color="grayScale2" size="12">$ArrowRightIcon</v-icon>
                </v-list-item-action>
              </v-list-item>
              <v-divider v-if="index < items.length - 1" :key="index"></v-divider>
            </div>
          </v-list>
        </v-card-text>
      </v-card>
      <v-spacer></v-spacer>
      <v-dialog
        scrollable
        width="487"
        v-model="showLogoutDialog"
        content-class="elevation-0"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-list class="py-0 grayScale2--text">
            <v-list-item v-bind="attrs" v-on="on" class="py-0 px-4">
              <v-list-item-icon class="me-3 my-0 py-5">
                <v-icon size="24" color="grayScale1">$Exit</v-icon>
              </v-list-item-icon>
              <v-list-item-content class="py-5">
                <v-list-item-title class="font-regular-14 grayScale1--text"
                >Log Out</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </template>

        <v-card class="border-radius-12 grayScale7" flat>
          <v-card-title class="px-4 py-6 justify-end">
            <v-icon size="15" @click="closeInfoDialog">mdi-close</v-icon>
          </v-card-title>
          <v-card-text class="px-4">
            <v-row justify="center">
              <v-col cols="auto">
                <v-icon size="90" color="primary" storkWidth="1.5">$Exit</v-icon>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="auto" class="font-regular-16 grayScale0--text">
                Do you log out?
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider class="grayScale4"></v-divider>
          <v-card-actions class="pa-4">
            <v-row>
              <v-col>
                <v-btn
                  x-large
                  color="btnColor"
                  depressed
                  dark
                  @click="closeInfoDialog"
                  block
                  class="border-radius-12 font-medium-14"
                >
                  <span class="primaryLight--text">Cancel</span>
                </v-btn>
              </v-col>
              <v-col>
                <v-btn
                  x-large
                  color="primary"
                  dark
                  block
                  class="border-radius-12 font-medium-14"
                >
                  Logout
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-navigation-drawer>

</template>
<script>

export default {
  name: 'drawer-panel',
  components: {},
  props: {
    openDrawer: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      items: [
        {
          title: 'User info',
          icon: '$ProfileIcon',
          link: `${process.env.VUE_APP_PANEL_URL}/panel/user-info`,
        },
        {
          title: 'Security',
          icon: '$Passcode',
          link: `${process.env.VUE_APP_PANEL_URL}/panel/security`,
        },
        {
          title: 'Tokens',
          icon: '$CodeSquare',
          link: `${process.env.VUE_APP_PANEL_URL}/panel/tokens`,
        },
        {
          title: 'Plan Management',
          icon: '$Checkmark',
          link: `${process.env.VUE_APP_PANEL_URL}/panel/plans`,
        },
        {
          title: 'Support',
          icon: '$Support',
          link: `${process.env.VUE_APP_PANEL_URL}/panel/support`,
        },
      ],
      showLogoutDialog: false,
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
        this.$emit('closeNavigationPanel')
      }
    },
    closeInfoDialog() {
      this.showLogoutDialog = false
    },
  },
}

</script>
<style scoped lang="scss">
.drawer-panel {
  z-index: 101 !important;
}

</style>
