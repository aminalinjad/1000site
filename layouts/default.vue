<template>
  <v-app class="poppins">
    <Header
      :open-drawer="openDrawer"
      @changeOverlayStatus="changeOverlayStatus"
      @showNavigationDrawer="showDrawer"
      @showSearchDrawer="toggleSearchDrawer"
      @showPanelDrawer="togglePanelDrawer"
    />
    <DrawerMenu
      v-if="$vuetify.breakpoint.smAndDown"
      :open-drawer="openDrawer"
      @closeNavigationMenu="closeDrawer"
    />
    <DrawerSearch
      v-if="$vuetify.breakpoint.smAndDown"
      :open-search-drawer="openSearchDrawer"
      @closeSearchDrawer="toggleSearchDrawer"
    />
    <DrawerPanel
      v-if="$vuetify.breakpoint.smAndDown"
      :open-drawer="openPanelDrawer"
      @closeNavigationPanel="togglePanelDrawer"
    />
    <v-main class="grayScale8">
      <Nuxt />
    </v-main>
    <Footer />
    <v-overlay class="searchOverlay" :value="openSearchBar"></v-overlay>
  </v-app>
</template>

<script>
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import DrawerPanel from "../components/Header/DrawerPanel/DrawerPanel"
import DrawerSearch from "../components/Header/DrawerSearch/DrawerSearch"
import DrawerMenu from "../components/Header/DrawerMenu/DrawerMenu"

export default {
  name: 'DefaultLayout',
  components: {
    Header,
    Footer,
    DrawerPanel,
    DrawerSearch,
    DrawerMenu,
  },
  data() {
    return {
      openSearchBar: false,
      openDrawer: false,
      openSearchDrawer: false,
      openPanelDrawer: false,
    }
  },
  methods: {
    changeOverlayStatus() {
      this.openSearchBar = !this.openSearchBar
    },
    showDrawer() {
      this.openSearchDrawer = false
      this.openDrawer = !this.openDrawer
    },
    closeDrawer() {
      this.openDrawer = false
    },
    toggleSearchDrawer() {
      this.openDrawer = false
      this.openSearchDrawer = !this.openSearchDrawer
    },
    togglePanelDrawer() {
      this.openDrawer = false
      this.openSearchDrawer = false
      this.openPanelDrawer = !this.openPanelDrawer
    },
  },
}
</script>

<style lang="scss">
.v-overlay.searchOverlay {
  .v-overlay__scrim {
    backdrop-filter: blur(8px) !important;
  }
}
.v-overlay--active.searchOverlay {
  backdrop-filter: blur(8px) !important;
}
</style>
