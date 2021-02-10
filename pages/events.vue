<template>
  <div class="container">
    <div v-for="(event, index) in sortedEvents" :key="event.id">
      <div :key="index" class="lg:flex lg:max-w-screen-lg pb-8 lg:pb-16">
        <!-- <div class="lg:w-1/4">
          <img
            v-if="event.acf.image"
            :src="event.acf.image.sizes.large"
            :alt="event.acf.image.alt"
            class="w-64 h-64 object-cover mb-4 lg:mb-0"
          />
        </div> -->
        <!-- Flexi content -->
        <div v-for="(flexiContent, id) in event.acf.flexi_content" :key="id">
          <div v-if="flexiContent.acf_fc_layout == 'text_block'">
            <p>{{ flexiContent.text }}</p>
          </div>
          <div v-if="flexiContent.acf_fc_layout == 'image'">
            <img :src="flexiContent.image_block.sizes.large" alt="" />
          </div>
        </div>
        <!-- Flexi content end-->
        <div class="lg:w-3/4 lg:pl-8">
          <h4 class="text-xl lg:text-3xl font-normal leading-tight">
            {{ event.title.rendered }}
          </h4>
          <h3 class="lg:text-2xl font-bold mb-2">
            {{ event.acf.speaker }}
          </h3>
          <time class="text-sm lg:text-lg font-mono block mb-2">
            {{ event.acf.start_time }} - {{ event.acf.end_time }}
          </time>
          <nuxt-link
            :to="`/events/${event.slug}`"
            class="btn-sm lg:btn btn-green mb-2 mr-2"
          >
            Event Info
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState(['events']),
    ...mapState(['header']),
    ...mapGetters(['sortedEvents']),
  },

  created() {
    this.getHeader()
    this.getEvents()
  },

  methods: {
    ...mapActions(['getHeader']),
    ...mapActions(['getEvents']),
  },
}
</script>

<style></style>
