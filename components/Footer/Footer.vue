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
              logo
              <!--            <img-->
              <!--              src="@/assets/images/logo.svg"-->
              <!--              alt="chainitix-logo"-->
              <!--              :width="$vuetify.breakpoint.mdAndUp?180:107"-->
              <!--            />-->
            </nuxt-link>
          </v-row>
        </v-col>
        <v-col
          cols="12"
          sm="5"
          md="4"
          :class="{'text-center':$vuetify.breakpoint.xsOnly}"
        >
          <v-row align="center" class="fill-height grayScale2--text">
            <!--          <v-col cols="12"  sm="auto" class="pb-0 pb-sm-3 pe-md-10 pe-lg-16">-->
            <!--            <p v-for='(item, index) in footerList' :key='index'>-->
            <!--              <nuxt-link to='' class='font-medium-14'>{{ item }}</nuxt-link>-->
            <!--            </p>-->
            <!--          </v-col>-->
            <v-col cols="12" sm="auto" class="pt-0 pt-sm-3">
              <p v-for="(item, index) in footerList2" :key="index">
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
                <v-icon size="32" color="grayScale2">$TwitterIcon</v-icon>
                <v-icon size="32" class="mx-4">$InstagramIcon</v-icon>
                <v-icon size="32">$GithubIcon</v-icon>
              </v-row>
              <v-row class="pt-md-2 grayScale3--text font-regular-12">
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
      // footerList: [
      //   "Explore",
      //   "Pricing",
      //   "API & Docs"
      // ],
      footerList2: [
        {name: 'Explore', link: "/explore"},
        {name: 'Privacy and policy', link: "/privacy-policy"},
        {name: 'Terms of use', link: "/terms-of-service"},
      ],
    }
  },
}


</script>
<style scoped lang="scss">
.footer-class {
  background: linear-gradient(68.16deg, #122e47 13.6%, #0c2133 53.43%);
  border-top: 1px var(--v-grayScale5-base) solid;
}

</style>

