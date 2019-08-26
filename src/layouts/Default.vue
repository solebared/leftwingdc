<template>
  <div class="font-sans text-2xl">
    <NavBar />

    <div class="px-5 lg:mx-0">
      <slot/>
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar'

export default {
  components: {NavBar},
}
</script>
