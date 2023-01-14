<template>
  <span class="ms-6 d-none d-md-flex">
    <nuxt-link class="ml-6" to="/explore">
    <span class="grayScale2--text font-medium-14">لیست سایت ها</span>
  </nuxt-link>
  <nuxt-link class="ml-6" to="/explore">
    <span class="grayScale2--text font-medium-14">تماس با ما</span>
  </nuxt-link>
  <nuxt-link class="ml-6" to="/">
    <span class="grayScale2--text font-medium-14">درباره ما</span>
  </nuxt-link>
  <nuxt-link class="ml-6" to="/">
    <span class="grayScale2--text font-medium-14">شرایط و قوانین</span>
  </nuxt-link>
</span>

</template>
<script>
export default {
  name: 'app-header-menu',
  components: {},
  props: [],
  data() {
    return {
      disable: true,
    }
  },
  computed: {},
  mounted() {},
  methods: {},
}

</script>

