export const state = () => ({
  events: [],
  homeContent: [],
  features: [],
})

export const getters = {
  sortedEvents: (state) => {
    return state.events
      .slice()
      .sort((a, b) => new Date(a.acf.start_time) - new Date(b.acf.start_time))
  },
}

export const mutations = {
  SET_EVENTS: (state, events) => {
    state.events = events
  },
  SET_FEATURES: (state, features) => {
    state.features = features
  },
  SET_HOME_CONTENT: (state, homeContent) => {
    state.homeContent = homeContent
  },
}

export const actions = {
  async getEvents({ state, commit }) {
    // if events is already set, stop
    if (state.events.length) return
    try {
      let events = await this.$axios.$get(
        `/wp-json/wp/v2/events?page=1&per_page=100&_embed=1`
      )
      // filter out unnecessary data
      events = events.map(({ id, slug, title, content, acf }) => ({
        id,
        slug,
        title,
        content,
        acf,
      }))
      commit('SET_EVENTS', events)
    } catch (err) {
      // console.error('getEvents', err)
    }
  },
  // Get feature page content
  async getFeatures({ state, commit }) {
    // if features is already set, stop
    if (state.features.length) return
    try {
      let features = await this.$axios.$get(`/wp-json/wp/v2/pos_features`)
      // filter out unnecessary data
      features = features.map(({ id, slug, title, content, acf }) => ({
        id,
        slug,
        title,
        content,
        acf,
      }))
      commit('SET_FEATURES', features)
    } catch (err) {
      // console.error('getFeatures', err)
    }
  },
  // Get homepage Content
  async getHomeContent({ commit }) {
    try {
      const homeContent = await this.$axios.$get(`/wp-json/wp/v2/pages/22`)
      this.homeContent = homeContent
      commit('SET_HOME_CONTENT', homeContent)
    } catch (err) {
      // console.error('getEvents', err)
    }
  },
}
