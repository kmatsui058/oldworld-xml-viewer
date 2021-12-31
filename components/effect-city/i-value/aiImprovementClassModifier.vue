<template>
  <span>
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
    : {{ sign }}{{ value }}% Output.
  </span>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from '@nuxtjs/composition-api'
import ImprovementClass from '~/classes/ImprovementClass'
import IValueModifier from '~/classes/IValueModifier'

export default defineComponent({
  name: 'AiImprovementClasModifier',
  components: { ImprovementClassDetail: () => import('~/components/improvement-class/detail.vue') },
  props: {
    iValueModifier: {
      type: Object as PropType<IValueModifier>,
      required: true,
    },
  },
  setup(props) {
    const improvementClasss = computed(() => {
      return props.iValueModifier.pair.map((item) => new ImprovementClass(item.zIndex))
    })
    const sign = computed((): string => {
      return Number(props.iValueModifier.pair[0].iValue) > 0 ? '+' : ''
    })

    const value = computed((): string => {
      return props.iValueModifier.pair[0].iValue
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

