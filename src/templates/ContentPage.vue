<template>
  <Layout>
    <div v-html="$page.contentPage.content" />
  </Layout>
</template>

<page-query>
query ContentPage ($path: String!) {
  contentPage: contentPage (path: $path) {
    content
  }
}
</page-query>
