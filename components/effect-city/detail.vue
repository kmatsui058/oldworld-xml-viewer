<template>
  <div class="content">
    <h3>
      {{ title }}
    </h3>
    <EffectCityEffect :effect-city="effectCityItem" />
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

import EffectCity from '~/classes/EffectCity'
import EffectCityEffect from '~/components/effect-city/effect.vue'

export default defineComponent({
  name: 'EffectCityDetail',
  components: { EffectCityEffect },
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
      const items = effectCityItem.value.name
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

