<template>
  <div class="container">
    <div class="row">
      <div
        v-for="(testimonial, id) in homeContent.acf.testimonial_tiles"
        :key="id"
        class="col-lg-4"
      >
        <h3>{{ testimonial.post_title }}</h3>
        <div v-html="testimonial.post_content"></div>
        <div v-if="testimonial.acf.about_business">
          <div v-html="testimonial.acf.about_business"></div>
        </div>
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
