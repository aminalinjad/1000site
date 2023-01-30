<template>
  <v-container fluid :class="[showMap ? '' : 'search-custom-container']">
    <v-row class="mt-10">
      <v-col :class="[showMap ? 'px-0 pb-0' : '']" md="3">
        <search-filter/>
      </v-col>
      <v-col md="9" :class="[showMap ? 'px-0 pb-0' : 'pb-10']">
        <div v-if="showMap" class="map-wrap position-relative">
          <v-btn @click="showMap = false" class="position-absolute close-icon" icon color="primary">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <client-only>
            <l-map :zoom=13 :center="[55.9464418,8.1277591]">
              <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
              <l-marker :lat-lng="[55.9464418,8.1277591]"></l-marker>
            </l-map>
          </client-only>
        </div>
        <div v-else>
          <v-breadcrumbs
            class="pr-0 pt-0"
            :items="items"
            divider=">"
          ></v-breadcrumbs>
          <div class="d-flex justify-space-between">
            <h1 class="title1">نتایج جستجو "{{$route.query.s}}"</h1>
            <v-btn @click="showMap = true" color="primary" text>
              <v-icon class="ml-1">mdi-map</v-icon>
              نقشه
            </v-btn>
          </div>

          <v-row class="align-center mt-3">
            <v-col cols="2">
              <v-autocomplete
                :items="sorts"
                dense
                flat
                height="20px"
                outlined
                hide-details
                background-color="#fff"
                class="sort-input"
                item-text="name"
                placeholder="مرتب سازی"
              >
              </v-autocomplete>
            </v-col>
           <v-col cols="9">
             <v-divider ></v-divider>
           </v-col>

             <v-col cols="1">
               ۱۱۶ نتیجه
             </v-col>
          </v-row>

          <v-row class="mt-5">
            <v-col v-for="(item , index) in 9" md="4" :key="index">
              <card/>
            </v-col>
          </v-row>

          <div class="text-center">
            <v-container>
              <v-row justify="center">
                <v-col cols="8">
                  <v-container class="max-width">
                    <v-pagination
                      v-model="page"
                      class="my-4"
                      :length="15"
                    ></v-pagination>
                  </v-container>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SearchFilter from "@/components/Search/searchFilter";
import Card from "@/components/Card/Card";

export default {
  name: "search",
  components: {Card, SearchFilter},
  data() {
    return {
      showMap: false,
      sorts: [
        {name: 'گران ترین', abbr: 'FL', id: 1},
        {name: 'ارزان ترین', abbr: 'GA', id: 2},
        {name: 'غذا', abbr: 'CA', id: 4},
      ],
      items: [
        {
          text: 'صفحه اصلی',
          disabled: false,
          to: '/',
        },
        {
          text: 'صفحه جستجو',
          disabled: true,
          href: '',
        }
      ],
    }
  }
}
</script>

<style scoped lang="scss">
.map-wrap {
  height: 900px;
}
.title1 {
  font-size: 32px;
}

.search-custom-container {
  padding: 0 0 0 100px !important;
}
.close-icon {
  z-index: 9999;
  top: 10px;
  right: 10px;
  background-color: #d8d8d8a3;
}
.sort-input {
  border: 1px solid #efecf3;
  border-radius: 12px;
}
</style>
