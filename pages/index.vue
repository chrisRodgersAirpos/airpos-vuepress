<template>
  <div>
    <p>this is the index</p>
    <nuxt-link :to="`/events/`" class="btn-sm lg:btn btn-green mb-2 mr-2">
      Events
    </nuxt-link>
    <FeatureBlock />
    <ReviewWidget />
    <TestimonialBlock />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState(['homeContent']),
  },

  created() {
    this.getHomeContent()
  },

  methods: {
    ...mapActions(['getHomeContent']),
  },
}
</script>

<style></style>
