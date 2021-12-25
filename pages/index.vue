<template>
  <section class="section">
    <h2 class="title is-2">Menu</h2>
    <aside class="menu">
      <p class="menu-label">General</p>
      <GeneralNavigation />
    </aside>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import GeneralNavigation from '~/components/navigation/GeneralNavigation.vue'

export default defineComponent({
  name: 'IndexPage',
  components: { GeneralNavigation },
})
</script>
