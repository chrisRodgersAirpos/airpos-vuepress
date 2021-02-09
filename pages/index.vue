<template>
  <div class="container">
    <div v-for="(event, index) in sortedEvents" :key="event.id">
      <div :key="index" class="lg:flex lg:max-w-screen-lg pb-8 lg:pb-16">
        <div class="lg:w-1/4">
          <img
            v-if="event.acf.image"
            :src="event.acf.image.sizes.large"
            :alt="event.acf.image.alt"
            class="w-64 h-64 object-cover mb-4 lg:mb-0"
          />
        </div>
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
          <p class="mb-4" v-html="event.content.rendered"></p>
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
    ...mapGetters(['sortedEvents']),
  },

  created() {
    this.getEvents()
  },

  methods: {
    ...mapActions(['getEvents']),
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
