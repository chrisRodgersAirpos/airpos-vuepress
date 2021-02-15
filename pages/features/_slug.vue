<template>
  <div>
    this is the slug
    {{ event.title.rendered }}
    {{ event.acf.speaker }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      slug: this.$route.params.slug,
    }
  },
  computed: {
    events() {
      return this.$store.state.events
    },
    event() {
      return this.events.find((el) => el.slug === this.slug)
    },
  },
  created() {
    this.$store.dispatch('getEvents')
  },
}
</script>
