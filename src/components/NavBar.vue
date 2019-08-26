<template>
  <header>
    <nav class="flex flex-wrap items-center justify-between text-4xl text-red-700 p-5">
      <a href="/" @click.prevent="toggle" class="flex-grow">
        {{ currentNavItem.breadcrumbTitle || currentNavItem.title }}
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
            v-for="item in remainingNavItems"
            :key="item.path"
            :to="item.path"
            class="block w-full hover:text-red-700"
          >
            {{ item.title }}
          </g-link>
        </div>
      </transition>

      <div class="block w-full">
        <hr class="border-red-700 mt-4" />
      </div>
    </nav>
  </header>
</template>

<static-query>
query {
  navPages: allContentPage(filter: {nav: {eq: true}}) {
    edges {
      node {
        title
        path
      }
    }
  }
}
</static-query>

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
  computed: {
    allNavItems() {
      return this.$static.navPages.edges.map((edge) => edge.node).concat([{
        title: 'Home',
        path: '/',
        breadcrumbTitle: 'Left Wing DC',
      }])
    },
    currentNavItem() {
      return this.allNavItems.find(item => item.path == this.currentPage)
    },
    remainingNavItems() {
      return this.allNavItems.filter(item => item.path != this.currentPage)
    },
  },
  watch: {
    currentPage() {
      this.collapsed = true
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
