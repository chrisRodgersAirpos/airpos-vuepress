<template>
  <div class="container"></div>
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

<style></style>
