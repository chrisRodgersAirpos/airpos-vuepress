<template>
  <div class="container">
    <section class="home-section bottom-spacer">
      <div class="container text-center">
        <div id="carousel-widget"></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          hid: 'reviews',
          src: 'https://widget.reviews.io/rich-snippet-reviews-widgets/dist.js',
          defer: true,
        },
      ],
    }
  },
  mounted() {
    /* global richSnippetReviewsWidgets */
    /* eslint no-undef: "error" */
    richSnippetReviewsWidgets('carousel-widget', {
      store: 'airpointofsale-com',
      primaryClr: '#f47e27',
      neutralClr: '#cccccc',
      reviewTextClr: '#333333',
      widgetName: 'carousel',
      layout: 'fullWidth',
      numReviews: 40,
      contentMode: 'company;third-party',
      hideDates: true,
    })
  },
}
</script>
