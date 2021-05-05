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
import { Vue, Component } from 'nuxt-property-decorator'
import CommonHeader from '@/components/CommonHeader.vue'
@Component({ components: { CommonHeader } })
export default class Default extends Vue {

}
</script>
