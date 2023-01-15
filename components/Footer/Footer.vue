<template>
  <v-footer
    :height="$vuetify.breakpoint.mdAndUp?285:'auto'"
    class="pt-9 pb-8 py-md-1 footer-class"
  >
    <v-container class="fill-height">
      <v-row>
        <v-col cols="12" sm="3">
          <v-row
            justify="center"
            justify-md="start"
            align="center"
            class="fill-height"
          >
            <nuxt-link to="">
              <img
                src="@/static/image/logo.svg"
                alt="logo"
                :width="$vuetify.breakpoint.mdAndUp?180:107"
              />
            </nuxt-link>
          </v-row>
        </v-col>
        <v-col
          cols="12"
          sm="5"
          md="4"
          :class="{'text-center':$vuetify.breakpoint.xsOnly}"
        >
          <v-row align="center" class="fill-height gray2--text">
            <v-col cols="12" sm="auto" class="pt-0 pt-sm-3">
              <p  v-for="(item, index) in footerList2" :key="index">
                <nuxt-link :to="item.link" class="font-medium-14"
                >{{ item.name }}
                </nuxt-link
                >
              </p>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="4" md="5" class="mt-8 mt-sm-0">
          <v-row
            justify="center"
            justify-md="end"
            align="center"
            class="fill-height"
          >
            <div>
              <v-row justify="center">
                <v-icon size="32" color="gray2">mdi-twitter</v-icon>
                <v-icon size="32" color="gray2" class="mx-4">mdi-instagram</v-icon>
                <v-icon size="32" color="gray2">mdi-github</v-icon>
              </v-row>
              <v-row class="pt-md-2 gray3--text font-regular-12">
                <!--                <v-col>{{ // $t('footer.copyRight') }}</v-col>-->
                copy right text
              </v-row>
            </div>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>

</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      footerList2: [
        {name: 'لیست سایت ها', link: "/explore"},
        {name: 'تماس با ما', link: "/privacy-policy"},
        {name: 'درباره ما', link: "/terms-of-service"},
      ],
    }
  },
}


</script>
<style scoped lang="scss">
.footer-class {
  background: var(--v-secondPrimary-base);
}

</style>

