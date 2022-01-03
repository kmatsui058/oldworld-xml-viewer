<template>
  <span>
    <span v-for="(improvement, key) in improvements" :key="key">
      <VTooltip>
        <nuxt-link :to="{ name: 'improvement', hash: '#' + improvement.entry.zType }">
          {{ improvement.name }}
        </nuxt-link>
        <template #popper>
          <ImprovementDetail :z-type="improvement.entry.zType" />
        </template>
      </VTooltip>
      <span v-if="key < improvements.length - 1"> and </span>
    </span>
    : {{ sign }}{{ value }}% Output.
  </span>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from '@nuxtjs/composition-api'
import Improvement from '~/classes/Improvement'
import IValue from '~/classes/IValue'
import ImprovementDetail from '~/components/improvement/detail.vue'
export default defineComponent({
  name: 'AiImprovementClasModifier',
  components: { ImprovementDetail },
  props: {
    iValue: {
      type: Object as PropType<IValue>,
      required: true,
    },
  },
  setup(props) {
    const improvements = computed(() => {
      return props.iValue.pair.map((item) => new Improvement(item.zIndex))
    })

    const sign = computed((): string => {
      return Number(props.iValue.pair[0].iValue) > 0 ? '+' : ''
    })

    const value = computed((): string => {
      return props.iValue.pair[0].iValue
    })
    return { improvements, sign, value }
  },
})
</script>
<style lang="scss" scoped>
.v-popper {
  display: inline;
}
</style>

