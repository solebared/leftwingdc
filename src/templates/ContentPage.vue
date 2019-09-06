<template>
  <Layout>
    <div v-html="$page.currentPage.content" />
  </Layout>
</template>

<page-query>
query CurrentPage ($path: String!) {
  currentPage: contentPage (path: $path) {
    title
    content
    path
    parent
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.currentPage.title,
    }
  },
}
</script>
