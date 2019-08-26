<template>
  <!-- TODO: is there a way to figure this out from within Layout/NavBar? -->
  <Layout :current-page="$page.contentPage.path">
    <div v-html="$page.contentPage.content" />
  </Layout>
</template>

<page-query>
query ContentPage ($path: String!) {
  contentPage: contentPage (path: $path) {
    path
    content
  }
}
</page-query>
