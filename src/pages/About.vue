<template>
  <!-- TODO: is there a way to figure this out from within Layout/NavBar? -->
  <Layout :current-page="$options.metaInfo.title">
    <p>Under contruction...</p>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About us'
  }
}
</script>
