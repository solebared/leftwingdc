// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import 'typeface-annie-use-your-telescope'
import 'typeface-open-sans'

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, {router, head, isClient}) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.titleTemplate = `${head.title} - %s`

  head.bodyAttrs = {class: 'font-sans text-2xl'}
}
