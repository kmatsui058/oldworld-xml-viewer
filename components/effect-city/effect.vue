<template>
  <ul class="effect-city">
    <li v-for="(yieldItem, key) in yields" :key="'yield' + key">
      <YieldIcon :z-type="yieldItem.pair.zIndex" class="icon" />
      {{ yieldItem.text }}
    </li>
    <li v-for="(iValue, key) in iValueModifiers" :key="'iValue' + key">
      <IValue :i-value-modifier="iValue" />
    </li>
  </ul>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from '@nuxtjs/composition-api'
import EffectCity from '~/classes/EffectCity'
import getSpriteIcons from '~/assets/Sprite/SpriteIcons'
import YieldIcon from '~/components/yield/icon.vue'
import IValue from '~/components/effect-city/iValue.vue'

export default defineComponent({
  name: 'EffectCityEffect',
  components: {
    YieldIcon,
    IValue,
  },
  props: {
    effectCity: {
      type: Object as PropType<EffectCity>,
      required: true,
    },
  },
  setup(props) {
    const yields = computed(() => {
      return props.effectCity.yields
    })

    const iValueModifiers = computed(() => {
      return props.effectCity.iValueModifiers
    })
    return { yields, iValueModifiers, getSpriteIcons }
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

