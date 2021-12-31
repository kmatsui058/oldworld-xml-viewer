<template>
  <div class="content">
    <h3>
      {{ title }}
    </h3>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

import Terrain from '~/classes/Terrain'
export default defineComponent({
  name: 'TerrainDetail',
  props: {
    zType: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const terrainItem = computed(() => {
      return new Terrain(props.zType)
    })

    const title = computed(() => {
      const items = terrainItem.value.name?.split('~')[0]
      return items
    })

    return { terrainItem, title }
  },
})
</script>
<style lang="scss" scoped>
.effect-city {
  margin: 0;
  list-style: none;
}
.icon {
  height: 1em;
  width: 1em;
  vertical-align: text-bottom;
}
</style>

