<template>
  <ul class="effect-city">
    <li v-for="(iValue, key) in iValues" :key="'iValue' + key">
      <IValue :i-value="iValue" />
    </li>
    <li v-for="(bValue, key) in bValues" :key="'bValue' + key">
      <BValue :b-value="bValue" />
    </li>
  </ul>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from '@nuxtjs/composition-api'
import EffectCity from '~/classes/EffectCity'
import getSpriteIcons from '~/assets/Sprite/SpriteIcons'
import IValue from '~/components/effect-city/iValue.vue'
import BValue from '~/components/effect-city/bValue.vue'

export default defineComponent({
  name: 'EffectCityEffect',
  components: {
    IValue,
    BValue,
  },
  props: {
    effectCity: {
      type: Object as PropType<EffectCity>,
      required: true,
    },
  },
  setup(props) {
    const iValues = computed(() => {
      return props.effectCity.iValues
    })

    const bValues = computed(() => {
      return props.effectCity.bValues
    })
    return { iValues, bValues, getSpriteIcons }
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

