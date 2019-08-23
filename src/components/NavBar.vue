<template>
  <header>
    <nav class="flex flex-wrap items-center justify-between text-4xl text-red-700 p-5">
      <a href="/" @click.prevent="toggle" class="flex-grow">
        {{ currentNavItem.breadcrumbLabel || currentPage }}
      </a>

      <div class="block">
        <button
          @click="toggle"
          class="px-3 py-2 border rounded border-red-700 text-red-700 focus:outline-none"
        >
          <svg class="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
          </svg>
        </button>
      </div>

      <transition name="fade">
        <div
          v-show="!collapsed"
          class="block w-full text-black"
        >
          <g-link
            v-for="(item, key) of remainingNavItems"
            :key="key"
            :to="item.path"
            class="block w-full hover:text-red-700"
          >
            {{ key }}
          </g-link>
        </div>
      </transition>

      <div class="block w-full">
        <hr class="border-red-700 mt-4" />
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    currentPage: String,
  },
  data() {
    return {
      collapsed: true,
    }
  },
  navItems: {
    'Home':     {path: '/', breadcrumbLabel: 'Left Wing DC'},
    'About us': {path: '/about'},
    'Guide':    {path: '/guide'},
  },
  computed: {
    currentNavItem() {
      return this.$options.navItems[this.currentPage]
    },
    remainingNavItems() {
      const remaining = {}
      Object
        .keys(this.$options.navItems)
        .filter(title => title != this.currentPage)
        .forEach(title => remaining[title] = this.$options.navItems[title])
      return remaining
    },
  },
  methods: {
    toggle() {
      this.collapsed = !this.collapsed
    },
  },
}
</script>

<style>
.fade-enter-active, .fade-leave-active { transition: all .5s ease-in; }
.fade-enter, .fade-leave-to { opacity: 0; }
</style>
