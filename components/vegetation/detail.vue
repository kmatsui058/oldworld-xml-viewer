<template>
  <div class="content">
    <h3>
      {{ title }}
    </h3>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

import Vegetation from '~/classes/Vegetation'
export default defineComponent({
  name: 'VegetationDetail',
  props: {
    zType: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const vegetationItem = computed(() => {
      return new Vegetation(props.zType)
    })

    const title = computed(() => {
      const items = vegetationItem.value.name?.split('~')[0]
      return items
    })

    return { vegetationItem, title }
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

