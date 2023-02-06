<template>
  <span class="ms-6 d-none d-md-flex">
    <nuxt-link class="ml-6" to="/explore">
    <span class="secondPrimary--text font-medium-14 link">لیست سایت ها</span>
  </nuxt-link>
  <nuxt-link class="ml-6" to="/explore">
    <span class="secondPrimary--text font-medium-14 link">تماس با ما</span>
  </nuxt-link>
  <nuxt-link class="ml-6" to="/">
    <span class="secondPrimary--text font-medium-14 link">درباره ما</span>
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
<style scoped lang="scss">
.link:hover {
  color: var(--v-primary-base) !important;
  border-bottom: 1px solid var(--v-primary-base);
  padding-bottom: 5px;
  transition: all 0.3s;
}
</style>

