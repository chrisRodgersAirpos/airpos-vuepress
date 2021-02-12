<template>
  <div class="container">
    <div class="row">
      <div
        v-for="(testimonial, id) in homeContent.acf.testimonial_tiles"
        :key="id"
        class="col-lg-4"
      >
        <h3>{{ testimonial.post_title }}</h3>
        <p>{{ testimonial.post_content }}</p>
      </div>
    </div>
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
