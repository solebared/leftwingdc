<template>
  <header>
    <nav class="flex flex-wrap items-center justify-between bg-red-700 text-4xl text-white p-5">
      <g-link :to="currentNavItem.path">
        {{ currentNavItem.breadcrumbLabel || currentPage }}
      </g-link>

      <div class="block">
        <button
          @click="toggle"
          class="px-3 py-2 border rounded text-red-300 border-red-500 hover:text-white hover:border-white focus:outline-none"
        >
          <svg class="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
          </svg>
        </button>
      </div>

      <g-link
        v-if="!collapsed"
        v-for="(item, key) of remainingNavItems"
        :key="key"
        :to="item.path"
        class="block w-full mt-4 text-red-300 hover:text-white"
      >
        {{ key }}
      </g-link>
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
