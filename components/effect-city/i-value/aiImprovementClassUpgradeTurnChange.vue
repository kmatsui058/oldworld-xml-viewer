<template>
  <span>
    {{ sign }}{{ value }} Upgrade Years for
    <span v-for="(improvementClass, key) in improvementClasss" :key="key">
      <VTooltip>
        <nuxt-link :to="{ name: 'improvementclass', hash: '#' + improvementClass.entry.zType }">
          {{ improvementClass.name }}
        </nuxt-link>
        <template #popper>
          <ImprovementClassDetail :z-type="improvementClass.entry.zType" />
        </template>
      </VTooltip>
      <span v-if="key < improvementClasss.length - 1"> and </span>
    </span>
    Improvement
  </span>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from '@nuxtjs/composition-api'
import ImprovementClass from '~/classes/ImprovementClass'
import IValue from '~/classes/IValue'
import ImprovementClassDetail from '~/components/improvement-class/detail.vue'
export default defineComponent({
  name: 'AiImprovementClassClasModifier',
  components: { ImprovementClassDetail },
  props: {
    iValue: {
      type: Object as PropType<IValue>,
      required: true,
    },
  },
  setup(props) {
    const improvementClasss = computed(() => {
      return props.iValue.pair.map((item) => new ImprovementClass(item.zIndex))
    })

    const sign = computed((): string => {
      return Number(props.iValue.pair[0].iValue) > 0 ? '+' : ''
    })

    const value = computed((): string => {
      return props.iValue.pair[0].iValue
    })
    return { improvementClasss, sign, value }
  },
})
</script>
<style lang="scss" scoped>
.v-popper {
  display: inline;
}
</style>

