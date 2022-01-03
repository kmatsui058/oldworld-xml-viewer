<template>
  <section class="section">
    <h2 class="title is-2">HEIGHTS</h2>
    <div class="content">
      <div v-for="(heightItem, key) in heights" :key="key">
        <HeightDetail :id="heightItem.entry.zType" :z-type="heightItem.entry.zType" />
        <hr v-if="key < heights.length - 1" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import HeightData from '~/assets/data/xml/height'
import Height from '~/classes/Height'
import HeightDetail from '~/components/height/detail.vue'
export default defineComponent({
  name: 'HeightIndex',
  components: {
    HeightDetail,
  },
  setup() {
    const heights = computed((): Height[] => {
      const result: Height[] = []
      HeightData.Root.Entry.forEach((item) => {
        if (typeof item.zType === 'string') result.push(new Height(item.zType))
      })
      return result
    })
    return { heights }
  },
  head: { title: 'HEIGHTS' },
})
</script>
