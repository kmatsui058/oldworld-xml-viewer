<template>
  <section class="section">
    <h2 class="title is-2">TERRAINS</h2>
    <div class="content">
      <div v-for="(terrainItem, key) in terrains" :key="key">
        <TerrainDetail :id="terrainItem.entry.zType" :z-type="terrainItem.entry.zType" />
        <hr v-if="key < terrains.length - 1" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import TerrainData from '~/assets/data/xml/terrain'
import Terrain from '~/classes/Terrain'
import TerrainDetail from '~/components/terrain/detail.vue'
export default defineComponent({
  name: 'TerrainIndex',
  components: {
    TerrainDetail,
  },
  setup() {
    const terrains = computed((): Terrain[] => {
      const result: Terrain[] = []
      TerrainData.Root.Entry.forEach((item) => {
        if (typeof item.zType === 'string') result.push(new Terrain(item.zType))
      })
      return result
    })
    return { terrains }
  },
  head: { title: 'TERRAINS' },
})
</script>
