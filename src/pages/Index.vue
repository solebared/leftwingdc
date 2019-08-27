<template>
  <Layout current-page="/">
    <nav class="flex flex-wrap items-center justify-around">
      <figure
        v-for="({title, path, image}) in navPages"
        :key="path"
        class="flex flex-col items-center mb-4"
      >
        <g-link :to="path">
          <g-image
            :src="image"
            alt="title"
            class="rounded-full"
          />
          <figcaption class="text-center">
            {{ title }}
          </figcaption>
        </g-link>
      </figure>
    </nav>
  </Layout>
</template>

<page-query>
query {
  navPages: allContentPage(filter: {navPage: {eq: true}}, sortBy: "navIndex", order: ASC) {
    edges {
      node {
        title
        path
        image (width: 300, quality: 100)
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Home'
  },
  computed: {
    navPages() {
      return this.$page.navPages.edges.map(edge => edge.node)
    },
  },
}
</script>
