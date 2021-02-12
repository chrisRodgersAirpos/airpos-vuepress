<template>
  <div>
    <p>this is the index</p>
    {{ homeContent.title.rendered }}
    <nuxt-link :to="`/events/`" class="btn-sm lg:btn btn-green mb-2 mr-2">
      Events
    </nuxt-link>
    <ReviewWidget />
    <div>
      <b-card no-body>
        <b-tabs card>
          <b-tab
            v-for="(feature, id) in homeContent.acf.features"
            :key="id"
            :title="feature.feature_name"
            active
          >
            <b-card-text>
              <h1>{{ feature.feature_title }}</h1>
              <p>{{ feature.feature_text }}</p>
              <img :src="feature.feature_image.sizes.large" alt="" />
            </b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
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

<style></style>
