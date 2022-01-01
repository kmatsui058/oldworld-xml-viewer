<template>
  <component :is="component" :i-value-modifier="iValueModifier" />
</template>
<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import IValueModifier from '~/classes/IValueModifier'
import aiImprovementClassModifier from '~/components/effect-city/i-value/aiImprovementClassModifier.vue'
import aiImprovementModifier from '~/components/effect-city/i-value/aiImprovementModifier.vue'
import aiUnitTraitXP from '~/components/effect-city/i-value/aiUnitTraitXP.vue'

export default defineComponent({
  name: 'EffectCityIValue',
  components: { aiImprovementClassModifier, aiImprovementModifier, aiUnitTraitXP },
  props: {
    iValueModifier: {
      type: Object as PropType<IValueModifier>,
      required: true,
    },
  },
  setup(props) {
    const getComponents = (iValueModifire: IValueModifier) => {
      switch (iValueModifire.key) {
        case 'aiImprovementClassModifier':
          return 'aiImprovementClassModifier'
        case 'aiImprovementModifier':
          return 'aiImprovementModifier'
        case 'aiUnitTraitXP':
          return 'aiUnitTraitXP'
        default:
          throw new Error('component not mount: ' + iValueModifire.key)
      }
    }
    const component = getComponents(props.iValueModifier)
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

