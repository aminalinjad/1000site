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
        <!--    search btn-->
        <span class="d-none d-md-inline">
        <v-bottom-sheet
          v-model="openSearchBar"
          content-class="search-bar"
          transition="slide-y-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <div style="transition: all 500ms" :style="{width: `${searchWidth}px`}">
              <v-btn
                outlined
               block
                class="text-left px-3 grayScale7 grayScale3--text header-search-btn border-radius-8"
                v-bind="attrs"
                v-on="on"
                height="40"
              >
              <span class="font-medium-12 grayScale3--text">جستجو...</span>
              <v-icon size="20" color="grayScale3" class="ml-auto" right
              >mdi-magnify</v-icon
              >
            </v-btn>
            </div>

          </template>

          <!--        search bar-->
          <v-sheet :height="graphPermission ? 161 : 96" class="grayScale8">
            <v-form @submit.prevent="search" class="fill-height">
              <v-container class="fill-height py-0">
                <v-row align="center" class="px-3 px-md-0 fill-height">
                  <!-- After implementing the backend, we can use graph permission  -->

                  <v-col v-if="graphPermission" cols="12" class="pb-2">
                    <v-tabs
                      v-model="selectTabSearch"
                      color="primary"
                      background-color="transparent"
                      class="tab-search"
                      centered
                    >
                      <v-tab class="text-capitalize font-regular-14"
                      >Explore</v-tab
                      >
                      <v-tab class="text-capitalize font-regular-14"
                      >Graph</v-tab
                      >
                    </v-tabs>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      :placeholder="searchBarPlaceholder"
                      flat
                      outlined
                      hide-details
                      background-color="gray2"
                      height="56"
                      color="primary"
                      class="border-radius-16 search-input"
                      v-model="searchValue"
                    >
                      <template v-slot:append>
                        <v-btn
                          color="primary"
                          class="px-0 border-radius-16 search-btn"
                          height="56"
                          width="56"
                          min-width="56"
                          @click="search"
                        >
                          <v-icon size="25" color="grayScale0"
                          >mdi-magnify</v-icon
                          >
                        </v-btn>
                      </template>
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-sheet>
        </v-bottom-sheet>
      </span>

        <v-spacer/>
        <!--      <span class="d-none d-md-inline" v-if="loadState">-->
        <!--        <span v-if="isAuth">-->
        <!--          <v-menu-->
        <!--            offset-y-->
        <!--            min-width="200"-->
        <!--            content-class="rounded-lg header-menu-class"-->
        <!--            v-if="userInfo"-->
        <!--          >-->
        <!--            <template v-slot:activator="{ attrs, on }">-->
        <!--              <v-btn-->
        <!--                elevation="0"-->
        <!--                height="40"-->
        <!--                min-width="170"-->
        <!--                v-bind="attrs"-->
        <!--                v-on="on"-->
        <!--                class="px-2 px-lg-5 grayScale5 border-radius-10"-->
        <!--              >-->
        <!--                <v-icon color="primaryLight" size="16" class="me-3"-->
        <!--                  >$ProfileIcon</v-icon-->
        <!--                >-->
        <!--                <span class="font-medium-14 primaryLight&#45;&#45;text"-->
        <!--                  >{{fullName}}</span-->
        <!--                >-->
        <!--                <v-icon color="primaryLight" class="ms-1 ms-lg-3"-->
        <!--                  >$ArrowBottomIcon</v-icon-->
        <!--                >-->
        <!--              </v-btn>-->
        <!--            </template>-->
        <!--            <v-list class="py-0 grayScale7">-->
        <!--              <v-list-item-->
        <!--                class="py-4"-->
        <!--                link-->
        <!--                :href="`${baseUrl}/panel/user-info`"-->
        <!--              >-->
        <!--                <v-icon color="primaryLight" class="pa-2 rounded-lg grayScale5"-->
        <!--                  >$ProfileIcon</v-icon-->
        <!--                >-->
        <!--                <span class="ms-3 font-medium-14 primaryLight&#45;&#45;text">-->
        <!--                  {{ $t('header.profile')}}-->
        <!--                </span>-->
        <!--              </v-list-item>-->
        <!--              <v-divider></v-divider>-->
        <!--              <v-list-item link @click="logout" class="py-4">-->
        <!--                <v-icon class="pa-2 rounded-lg grayScale5">$LogoutIcon</v-icon>-->
        <!--                <span class="ms-3 font-medium-14 primaryLight&#45;&#45;text">-->
        <!--                  {{ $t('header.logout')}}-->
        <!--                </span>-->
        <!--              </v-list-item>-->
        <!--            </v-list>-->
        <!--          </v-menu>-->
        <!--        </span>-->
        <!--        <span v-else>-->
        <!--          <a :href="`${baseUrl}/auth/login`">-->
        <!--            <span class="me-8 font-medium-14 primaryLight&#45;&#45;text">-->
        <!--              {{ $t('header.login') }}-->
        <!--            </span>-->
        <!--          </a>-->
        <!--          <v-btn-->
        <!--            width="98"-->
        <!--            height="40"-->
        <!--            elevation="0"-->
        <!--            class="btnColor border-radius-10"-->
        <!--            :href="`${baseUrl}/auth/register`"-->
        <!--          >-->
        <!--            <span class="font-medium-14 primaryLight&#45;&#45;text"-->
        <!--              >{{ $t('header.register') }}</span-->
        <!--            >-->
        <!--          </v-btn>-->
        <!--        </span>-->
        <!--      </span>-->
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
      openSearchBar: false,
      searchBarPlaceholder: 'جستجو در بین هزاران سایت',
      searchValue: '',
      baseUrl: process.env.VUE_APP_PANEL_URL,
      selectTabSearch: '',
      graphPermission: false,
      searchWidth: 110
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  computed: {
    menuIcon() {
      return this.openDrawer ? '$CloseIcon' : '$MenuIcon'
    },
    fullName() {
      return this.userInfo.first_name + ' ' + this.userInfo.last_name
    },
  },
  watch: {
    openSearchBar() {
      this.searchValue = ''
      this.$emit('changeOverlayStatus')
    },
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset >= 50) {
        this.searchWidth = 300
      } else {
        this.searchWidth = 110
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
      this.$router.push({path: '/search', query: {s: this.searchValue}})
      this.closeSearchBar()
    },
  },
}

</script>
<style lang="scss">
.header-class {
  z-index: 100 !important;

  .v-btn {
    &.header-search-btn {
      .v-btn__content {
        justify-content: start !important;
      }
    }
  }
}

.v-app-bar.header-class {
  border-bottom: 1px var(--v-grayScale6-base) solid !important;
}

.v-dialog:not(.v-dialog--fullscreen) {
  //max-height: 100%!important;
}

.v-dialog__content.overlay-blur {
}

.v-dialog__content {
  //backdrop-Filter: blur(8px)!important;
  //height:100%!important;
  .overlay-blur {
    backdrop-filter: blur(8px) !important;
    height: 100% !important;
  }

  .search-bar {
    position: absolute !important;
    top: 0 !important;

    .v-input {
      &__slot {
        &::before,
        &::after {
          border-style: none !important;
        }
      }
    }
  }
}

.header-menu-class {
  border-radius: 12px !important;
}

.tab-search {
  .v-tab {
    color: var(--v-grayScale2-base) !important;

    &.v-tab--active {
      color: var(--v-primary-base) !important;
    }
  }
}

.search-input {
  .search-btn {
    margin-top: -17px;
    margin-left: -13px;
  }
}

</style>
