<template>
  <div>
    <header>
      <common-header />
    </header>
    <div class="container">
      <nuxt />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import CommonHeader from '@/components/CommonHeader.vue'
export default defineComponent({
  name: 'DefaultLayout',
  components: { CommonHeader },
})
</script>
