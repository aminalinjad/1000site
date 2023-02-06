<template>
  <div class="text-center">
    <v-dialog
      v-model="registerModal"
      @click:outside="openModal(false)"
      width="500"
      class="pa-16"
    >
      <v-card class="py-12 px-16">

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
      registerModal: 'auth/GET_SHOW_REGISTER_MODAL_STATE',
    }),
  },
  methods: {
    ...mapActions({
      openModal: `auth/ACTION_SHOW_REGISTER_MODAL`,
    }),
  }
}
</script>

<style scoped>
.custom-solo-text {
  border: 1px solid #a4a4a4 !important;
  border-radius: 15px;
}
</style>
