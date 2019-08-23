<template>
  <div class="font-sans text-2xl">
    <NavBar :current-page="currentPage"/>

    <div class="container mx-auto px-5 lg:mx-0">
      <slot/>
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar'

export default {
  components: {NavBar},
  props: {
    currentPage: String,
  },
}
</script>
