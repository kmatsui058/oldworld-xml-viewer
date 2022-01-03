<template>
  <section class="section">
    <h2 class="title is-2">VEGETATIONS</h2>
    <div class="content">
      <div v-for="(vegetationItem, key) in vegetations" :key="key">
        <VegetationDetail :id="vegetationItem.entry.zType" :z-type="vegetationItem.entry.zType" />
        <hr v-if="key < vegetations.length - 1" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import VegetationData from '~/assets/data/xml/vegetation'
import Vegetation from '~/classes/Vegetation'
import VegetationDetail from '~/components/vegetation/detail.vue'
export default defineComponent({
  name: 'VegetationIndex',
  components: {
    VegetationDetail,
  },
  setup() {
    const vegetations = computed((): Vegetation[] => {
      const result: Vegetation[] = []
      VegetationData.Root.Entry.forEach((item) => {
        if (typeof item.zType === 'string') result.push(new Vegetation(item.zType))
      })
      return result
    })
    return { vegetations }
  },
  head: { title: 'VEGETATIONS' },
})
</script>
