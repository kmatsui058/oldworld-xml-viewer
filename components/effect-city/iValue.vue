<template>
  <component :is="component" :i-value="iValue" />
</template>
<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import IValue from '~/classes/IValue'
import aiImprovementClassModifier from '~/components/effect-city/i-value/aiImprovementClassModifier.vue'
import aiImprovementModifier from '~/components/effect-city/i-value/aiImprovementModifier.vue'
import aiUnitTraitXP from '~/components/effect-city/i-value/aiUnitTraitXP.vue'
import aiUnitTrainModifier from '~/components/effect-city/i-value/aiUnitTrainModifier.vue'
import aiYieldRate from '~/components/effect-city/i-value/aiYieldRate.vue'
import aiYieldRatePopulation from '~/components/effect-city/i-value/aiYieldRatePopulation.vue'
import aiYieldRateCulture from '~/components/effect-city/i-value/aiYieldRateCulture.vue'

export default defineComponent({
  name: 'EffectCityIValue',
  components: {
    aiImprovementClassModifier,
    aiImprovementModifier,
    aiUnitTraitXP,
    aiUnitTrainModifier,
    aiYieldRate,
    aiYieldRatePopulation,
    aiYieldRateCulture,
  },
  props: {
    iValue: {
      type: Object as PropType<IValue>,
      required: true,
    },
  },
  setup(props) {
    const getComponents = (iValueModifire: IValue) => {
      switch (iValueModifire.key) {
        case 'aiYieldRate':
          return 'aiYieldRate'
        case 'aiYieldRatePopulation':
          return 'aiYieldRatePopulation'
        case 'aiYieldRateCulture':
          return 'aiYieldRateCulture'
        case 'aiImprovementClassModifier':
          return 'aiImprovementClassModifier'
        case 'aiImprovementModifier':
          return 'aiImprovementModifier'
        case 'aiUnitTraitXP':
          return 'aiUnitTraitXP'
        case 'aiUnitTrainModifier':
          return 'aiUnitTrainModifier'
        default:
        // throw new Error('component not mount: ' + iValueModifire.key)
      }
    }
    const component = getComponents(props.iValue)
    return { component }
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

