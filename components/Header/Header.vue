<template>
  <v-app-bar app elevate-on-scroll height="72" class="header-class gray1">
    <v-container class="fill-height px-md-3 px-0">
      <v-row align="center" class="mx-0">
        <v-icon
          @click="openSearchDrawer"
          color="grayScale0"
          class="d-flex d-md-none mr-5"
        >mdi-magnify
        </v-icon
        >
        <v-icon
          @click="openPanelDrawer"
          color="grayScale0"
          class="d-flex d-md-none"
        >mdi-user
        </v-icon
        >
        <v-spacer class="d-block d-md-none"/>
        <nuxt-link to="/" class="me-2 d-flex align-center">
          <v-img
            :width="$vuetify.breakpoint.mdAndUp ? 120 : 93"
            contain
            src="/image/logo.svg"
          ></v-img>

        </nuxt-link>
        <Menu/>
        <!--    Search btn-->
        <v-text-field
          label="جستجو ..."
          v-model="searchValue"
          hide-details
          class="search-input d-none d-md-block"
          solo
          append-icon="mdi-magnify"
        ></v-text-field>
        <v-spacer/>
              <span class="d-none d-md-inline">
                <span v-if="isAuth">
                  <v-menu
                    offset-y
                    min-width="200"
                    content-class="rounded-lg header-menu-class"
                  >
                    <template v-slot:activator="{ attrs, on }">
                      <v-btn
                        elevation="0"
                        height="40"
                        min-width="170"
                        v-bind="attrs"
                        v-on="on"
                        class="px-2 px-lg-5 grayScale5 border-radius-10"
                      >
                        <v-icon color="primaryLight" size="16" class="me-3"
                          >$ProfileIcon</v-icon
                        >
                        <span class="font-medium-14 primaryLight--text"
                          >{{fullName}}</span
                        >
                        <v-icon color="primaryLight" class="ms-1 ms-lg-3"
                          >$ArrowBottomIcon</v-icon
                        >
                      </v-btn>
                    </template>
                    <v-list class="py-0 grayScale7">
                      <v-list-item
                        class="py-4"
                        link
                        :href="`${baseUrl}/panel/user-info`"
                      >
                        <v-icon color="primaryLight" class="pa-2 rounded-lg grayScale5"
                          >$ProfileIcon</v-icon
                        >
                        <span class="ms-3 font-medium-14 primaryLight--text">
                          پروفایل
                        </span>
                      </v-list-item>
                      <v-divider></v-divider>
                      <v-list-item link @click="logout" class="py-4">
                        <v-icon class="pa-2 rounded-lg grayScale5">$LogoutIcon</v-icon>
                        <span class="ms-3 font-medium-14 primaryLight--text">
                          خروج
                        </span>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </span>
                <span v-else>
                  <v-btn
                    width="98"
                    height="40"
                    elevation="0"
                    class="border-radius-10"
                    text
                    @click="openLoginModal(true)"
                  >
                    <span class="font-medium-14 primaryLight--text"
                    >ورود</span
                    >
                  </v-btn>
                  <v-btn
                    width="98"
                    height="40"
                    elevation="0"
                    class="border-radius-10"
                    @click="openRegisterModal(true)"
                  >
                    <span class="font-medium-14 primaryLight--text"
                      >ثبت نام</span
                    >
                  </v-btn>
                </span>
              </span>
        <v-icon
          color="grayScale0"
          class="hamburger-menu d-flex d-md-none ml-10"
          @click="openNavigationDrawer"
        >{{ menuIcon }}
        </v-icon
        >
      </v-row>
    </v-container>
  </v-app-bar>

</template>
<script>
import Menu from "../Header/Menu/Menu"
import { mapActions } from 'vuex'

export default {
  name: 'app-header',
  components: {
    Menu
  },
  props: {
    openDrawer: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      searchValue: '',
      baseUrl: process.env.VUE_APP_PANEL_URL,
      showSearchBox: false,
      isAuth: false
    }
  },
  mounted() {
    if (this.$route.name === 'index') {
      window.addEventListener("scroll", this.handleScroll);
    }else {
      this.showSearchBox = true
    }

  },
  computed: {
    menuIcon() {
      return this.openDrawer ? 'mdi-close' : 'mdi-menu'
    },
  },
  watch: {
    openSearchBar() {
      this.searchValue = ''
      this.$emit('changeOverlayStatus')
    },
  },
  methods: {
    ...mapActions({
      openLoginModal: `auth/ACTION_SHOW_LOGIN_MODAL`,
      openRegisterModal: `auth/ACTION_SHOW_REGISTER_MODAL`,
    }),
    handleScroll() {
      if (window.pageYOffset >= 200) {
        this.showSearchBox = true
      } else {
        this.showSearchBox = false
      }
    },
    closeSearchBar() {
      this.openSearchBar = !this.openSearchBar
    },
    openNavigationDrawer() {
      this.$emit('showNavigationDrawer')
    },
    openSearchDrawer() {
      this.$emit('showSearchDrawer')
    },
    openPanelDrawer() {
      if (this.isAuth) {
        this.$emit('showPanelDrawer')
      } else {
        window.location.replace(`${this.baseUrl}/auth/login`)
      }
    },
    search() {
      if (this.searchValue.length > 400) {
        this.searchValue = this.searchValue.slice(0, 400)
      }
      this.$router.push({path: '/Search', query: {s: this.searchValue}})
      this.closeSearchBar()
    },
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}

</script>
<style lang="scss">


.search-input {
  border: 1px solid #d5d2dc;
  border-radius: 12px;

  fieldset {
    border: none;
  }
}


</style>
