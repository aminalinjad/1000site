<template>
  <div class="text-center">
    <v-dialog
      v-model="registerModalState"
      @click:outside="registerModal(false)"
      width="500"
      class="pa-16"
    >
      <v-card class="py-12 px-16">
        <div class="d-flex justify-center mb-3">
          <svg height="40" viewBox="-3 -3 82 82" width="40" style="display: block;"><title>Pinterest logo</title>
            <circle cx="38" cy="38" fill="white" r="40"></circle>
            <path
              d="M27.5 71c3.3 1 6.7 1.6 10.3 1.6C57 72.6 72.6 57 72.6 37.8 72.6 18.6 57 3 37.8 3 18.6 3 3 18.6 3 37.8c0 14.8 9.3 27.5 22.4 32.5-.3-2.7-.6-7.2 0-10.3l4-17.2s-1-2-1-5.2c0-4.8 3-8.4 6.4-8.4 3 0 4.4 2.2 4.4 5 0 3-2 7.3-3 11.4C35.6 49 38 52 41.5 52c6.2 0 11-6.6 11-16 0-8.3-6-14-14.6-14-9.8 0-15.6 7.3-15.6 15 0 3 1 6 2.6 8 .3.2.3.5.2 1l-1 3.8c0 .6-.4.8-1 .4-4.4-2-7-8.3-7-13.4 0-11 7.8-21 22.8-21 12 0 21.3 8.6 21.3 20 0 12-7.4 21.6-18 21.6-3.4 0-6.7-1.8-7.8-4L32 61.7c-.8 3-3 7-4.5 9.4z"
              fill="#e60023" fill-rule="evenodd"></path>
          </svg>
        </div>
        <h2 class="text-center mb-6" style="font-size: 24px">به هزار سایت خوش آمدید</h2>
        <div class="mb-1">ایمیل</div>
        <v-text-field
          label="ایمیل"
          class="custom-solo-text mb-6"
          solo
          flat
          hide-details
        ></v-text-field>

        <div class="mb-1">پسورد</div>
        <v-text-field
          :autofocus="false"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show ? 'text' : 'password'"
          label="پسورد"
          counter
          hide-details
          solo
          flat
          class="custom-solo-text"
          @click:append="show = !show"
        ></v-text-field>
        <div class="mt-1">
          <nuxt-link class="primary--text" to="/">فراموشی رمز عبور</nuxt-link>
        </div>


        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          class="border-radius-20 mt-5"
          block
        >
          ثبت نام
        </v-btn>

        <div class="text-center my-2" style="font-size: 20px">یا</div>
        <v-btn
          color="#fff"
          class="border-radius-20"
          block
        >
          <v-icon class="ml-2">mdi-google</v-icon>
          ورود با گوگل
        </v-btn>
        <div class="text-center mt-3">
          <span>
             با ادامه، با هزارسایت موافقت می کنید
          </span>
          <span>
             با ادامه، با هزارسایت موافقت می کنید
          </span>
          <span>
             با ادامه، با هزارسایت موافقت می کنید
          </span>
          <v-divider class="my-2"></v-divider>
          اکانت ندارید؟
          <v-btn @click="clickOnLogin" text>ورود</v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "Register",
  data() {
    return {
      show: false
    }
  },
  computed: {
    ...mapGetters({
      registerModalState: 'auth/GET_SHOW_REGISTER_MODAL_STATE',
    }),
  },
  methods: {
    ...mapActions({
      registerModal: `auth/ACTION_SHOW_REGISTER_MODAL`,
      loginModal: `auth/ACTION_SHOW_LOGIN_MODAL`,
    }),
    clickOnLogin() {
      this.loginModal(true);
      this.registerModal(false)
    }
  }
}
</script>

<style scoped>
.custom-solo-text {
  border: 1px solid #a4a4a4 !important;
  border-radius: 15px;
}
</style>
