<template>
  <v-navigation-drawer
    v-model="openSearchDrawer"
    app
    left
    width="100%"
    class="drawer-search grayScale8"
  >
    <v-row class="ma-0">
      <v-col cols="12" class="px-4 pt-6">
        <v-icon size="24" class="ml-auto d-flex" @click="closeSearchDrawer"
        >$CloseIcon</v-icon
        >
      </v-col>
      <!-- After implementing the backend, we can use graph permission  -->
      <v-col v-if="graphPermission" cols="12" class="pb-1">
        <v-tabs
          v-model="selectTabSearch"
          color="primary"
          background-color="transparent"
          class="tab-search"
          centered
        >
          <v-tab class="text-capitalize font-regular-14">Explore</v-tab>
          <v-tab class="text-capitalize font-regular-14">Graph</v-tab>
        </v-tabs>
      </v-col>
      <v-col>
        <v-form @submit.prevent="search">
          <v-row align="center" class="mb-2">
            <v-col cols="12" class="px-4"
            ><div class="input-search-container">
              <v-text-field
                v-model="searchValue"
                flat
                outlined
                hide-details
                background-color="grayScale7"
                height="56"
                color="primary"
                class="border-radius-12 search-input"
                dense
              >
                <template v-slot:append>
                  <v-btn
                    color="primary"
                    class="px-0 border-radius-12 search-btn"
                    height="56"
                    width="52"
                    min-width="52"
                    @click="search"
                    @keyup.enter="search"
                  >
                    <v-icon size="20" color="grayScale0">$SearchIcon</v-icon>
                  </v-btn>
                </template>
              </v-text-field>
            </div></v-col
            >
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-navigation-drawer>

</template>
<script>
export default {
  name: 'drawer-search',
  components: {},
  props: {
    openSearchDrawer: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      searchValue: '',
      selectTabSearch: '',
      graphPermission: false,
    }
  },
  computed: {},
  mounted() {},
  methods: {
    closeSearchDrawer() {
      this.search = ''
      this.$emit('closeSearchDrawer')
    },
    search() {
      if (this.searchValue.length > 400) {
        this.searchValue = this.searchValue.slice(0, 400)
      }
      // SearchService.searchQuery({ s: this.searchValue }).then(() => {
      //   this.$router.push({ path: '/search', query: { s: this.searchValue } })
      //   this.closeSearchDrawer()
      // })
    },
  },
}

</script>
<style lang="scss">
.drawer-search {
  z-index: 101 !important;
  .input-search-container {
    .v-input--is-focused {
      fieldset{
        border-width: 1px;
      }

    }

    .v-input__slot {
      min-height: 38px !important;
    }
    .search-btn {
      margin-top: -8px;
      margin-right: -12px;
    }
  }
}

</style>

