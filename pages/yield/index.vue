<template>
  <section class="section">
    <h2 class="title is-2">YIELDS</h2>
    <div class="content">
      <div v-for="(yieldItem, key) in yields" :key="key">
        <YieldDetail :id="yieldItem.entry.zType" :z-type="yieldItem.entry.zType" />
        <hr v-if="key < yields.length - 1" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import yieldData from '~/assets/data/xml/yield'
import Yield from '~/classes/Yield'
import YieldDetail from '~/components/yield/detail.vue'
export default defineComponent({
  name: 'NationIndex',
  components: {
    YieldDetail,
  },
  setup() {
    const yields = computed((): Yield[] => {
      const result: Yield[] = []
      yieldData.Root.Entry.forEach((item) => {
        if (typeof item.zType === 'string') result.push(new Yield(item.zType))
      })
      return result
    })
    return { yields }
  },
  head: { title: 'YIELDS' },
})
</script>
