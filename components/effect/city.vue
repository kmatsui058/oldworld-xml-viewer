<template>
  <ul class="effect-city">
    <li v-for="(yieldItem, key) in yeilds" :key="key">
      <img :src="yieldItem.icon" alt="" class="icon" />
      {{ yieldItem.text }}
    </li>
  </ul>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from '@nuxtjs/composition-api'
import EffectCity from '~/classes/EffectCity'
import getSpriteIcons from '~/assets/Sprite/SpriteIcons'
export default defineComponent({
  name: 'EffectCity',
  props: {
    effectCity: {
      type: Object as PropType<EffectCity>,
      required: true,
    },
  },
  setup(props) {
    const yeilds = computed(() => {
      return props.effectCity.yields
    })

    return { yeilds, getSpriteIcons }
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

