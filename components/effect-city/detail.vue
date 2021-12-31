<template>
  <div class="content">
    <h3>
      {{ title }}
    </h3>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

import EffectCity from '~/classes/EffectCity'
export default defineComponent({
  name: 'EffectCityDetail',
  props: {
    zType: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const effectCityItem = computed(() => {
      return new EffectCity(props.zType)
    })

    const title = computed(() => {
      const items = effectCityItem.value.name?.split('~')[0]
      return items
    })

    return { effectCityItem, title }
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

