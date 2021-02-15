<template>
  <div class="container header">
    <b-navbar>
      <b-navbar-brand href="/">
        <img
          class="d-flex align-items-center w-100 header--logo"
          src="~/assets/header-logo.jpg"
        />
      </b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="Features" right>
          <b-dropdown-item
            v-for="(feature, index) in features"
            :key="index"
            :href="`/features/${feature.slug}`"
          >
            {{ feature.title.rendered }}
          </b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item href="#">Pricing</b-nav-item>
        <b-nav-item href="#">Community</b-nav-item>
        <b-nav-item href="#">Help</b-nav-item>
        <b-nav-item href="#">Login</b-nav-item>
        <b-nav-item href="#" class="header_nav--contact">Contact Us</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState(['features']),
  },

  created() {
    this.getFeatures()
  },

  methods: {
    ...mapActions(['getFeatures']),
  },
}
</script>
