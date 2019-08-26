<template>
  <Layout current-page="/">
    <nav class="flex flex-wrap items-center justify-around">
      <figure class="flex flex-col items-center mb-4">
        <g-link to="/about-us">
          <g-image alt="About us" width="300" src="~/../content/images/lwfc-logo.jpg" quality="100" class="rounded-full"/>
          <figcaption class="text-center">About us</figcaption>
        </g-link>
      </figure>
      <figure class="flex flex-col items-center mb-4">
        <g-link to="/guide">
          <g-image alt="Guide" width="300" src="~/../content/images/circle-bw.jpg" quality="100" class="rounded-full"/>
          <figcaption class="text-center">Guide</figcaption>
        </g-link>
      </figure>
    </nav>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home'
  }
}
</script>
