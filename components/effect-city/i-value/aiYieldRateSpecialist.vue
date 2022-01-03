<template>
  <span>
    <span v-for="(pair, key) in pairs" :key="key">
      {{ pair.sign }}{{ pair.value }}
      <YieldIcon :z-type="pair.zIndex" />
      /Turn per <ConceptInline z-type="CONCEPT_SPECIALIST" :name-index="0" />
      <br v-if="key < pairs.length - 1" />
    </span>
  </span>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from '@nuxtjs/composition-api'
import IValue from '~/classes/IValue'
import YieldIcon from '~/components/yield/icon.vue'
import ConceptInline from '~/components/concept/inline.vue'

export default defineComponent({
  name: 'AiYieldRateSpecialist',
  components: { YieldIcon, ConceptInline },
  props: {
    iValue: {
      type: Object as PropType<IValue>,
      required: true,
    },
  },
  setup(props) {
    const pairs = computed(() => {
      return props.iValue.pair.map((pair) => {
        return {
          sign: Number(pair.iValue) > 0 ? '+' : '',
          value: Number(pair.iValue) / 10,
          zIndex: pair.zIndex,
        }
      })
    })

    return { pairs }
  },
})
</script>
<style lang="scss" scoped>
.v-popper {
  display: inline;
}
</style>

