<template>
  <component :is="component" :b-value="bValue" />
</template>
<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import BValue from '~/classes/BValue'

export default defineComponent({
  name: 'EffectCityBValue',
  components: {},
  props: {
    bValue: {
      type: Object as PropType<BValue>,
      required: true,
    },
  },
  setup(props) {
    const getComponents = (bValue: BValue) => {
      switch (bValue.key) {
        default:
        // throw new Error('component not mount: ' + bValue.key)
      }
    }
    const component = getComponents(props.bValue)
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

