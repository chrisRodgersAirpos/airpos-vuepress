<template>
  <div>this is the features slug</div>
</template>

<script>
export default {
  data() {
    return {
      slug: this.$route.params.slug,
    }
  },
  computed: {
    features() {
      return this.$store.state.features
    },
    feature() {
      return this.features.find((el) => el.slug === this.slug)
    },
  },
  created() {
    this.$store.dispatch('getFeatures')
  },
}
</script>
