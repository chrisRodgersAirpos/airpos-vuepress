<template>
  <div class="container featuresBlock">
    <div class="row">
      <div class="col-lg-12 text-center">
        <h2>Take your business to the next level</h2>
        <p>
          Providing you with the tools to make transactions, record sales,
          manage customers and track inventory across multiple devices and
          locations
        </p>
      </div>
    </div>
    <b-card no-body class="featuresBlock_tabs">
      <b-tabs :card="false" :no-nav-style="true">
        <b-tab
          v-for="(feature, id) in homeContent.acf.features"
          :key="id"
          :title="feature.feature_name"
          active
        >
          <b-card-text>
            <div class="row">
              <div class="col-lg-6">
                <h3>{{ feature.feature_title }}</h3>
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

<style lang="scss">
.featuresBlock {
  padding: 50px 30px;
  background-color: #eaf2f9;
  &_tabs {
    background-color: #eaf2f9;
    border: 0;
    border-radius: 0;
    .nav {
      justify-content: center;
      margin: 30px 0;
      .nav-link {
        color: #3498db;
        border-radius: 3px;
        font-weight: 700;
        &.active {
          background-color: #3498db;
          color: #fff;
        }
      }
    }
  }
}
</style>
