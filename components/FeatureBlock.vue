<template>
  <div class="container">
    <b-card no-body>
      <b-tabs card>
        <b-tab
          v-for="(feature, id) in homeContent.acf.features"
          :key="id"
          :title="feature.feature_name"
          active
        >
          <b-card-text>
            <div class="row">
              <div class="col-lg-6">
                <h1>{{ feature.feature_title }}</h1>
                <p>{{ feature.feature_text }}</p>
              </div>
              <div class="col-lg-6">
                <img :src="feature.feature_image.sizes.large" alt="" />
              </div>
            </div>
          </b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
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
