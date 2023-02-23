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
    <Login/>
    <Register/>
    <button @click="scrollToTop" :class="{'is-scroll': showTopBtn}" class="top-btn">
      <v-icon color="#fff">mdi-chevron-up</v-icon>
    </button>
    <v-overlay class="searchOverlay" :value="openSearchBar"></v-overlay>
  </v-app>
</template>

<script>
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import DrawerPanel from "../components/Header/DrawerPanel/DrawerPanel"
import DrawerSearch from "../components/Header/DrawerSearch/DrawerSearch"
import DrawerMenu from "../components/Header/DrawerMenu/DrawerMenu"
import Login from "../components/Auth/Login";
import Register from "@/components/Auth/Register";

export default {
  name: 'DefaultLayout',
  components: {
    Register,
    Login,
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
      showTopBtn: false
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    scrollToTop(){
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    },
    handleScroll() {
      if (window.pageYOffset >= 500) {
        this.showTopBtn = true
      } else {
        this.showTopBtn = false
      }
    },
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
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
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
.top-btn {
  border-radius: 50%;
  background-color: #1f1b2d40;
  width: 44px;
  height: 44px;
  position: fixed;
  bottom: 10px;
  right: -4.125rem;
  z-index: 999;
  display: block;
  transition: right 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55),opacity .3s,background-color .25s ease-in-out;
  opacity: 0;
}
.is-scroll {
  right: 1.25rem;
  opacity: 1;
}
.top-btn:hover {
  background-color: #1f1b2d80;
}
</style>
