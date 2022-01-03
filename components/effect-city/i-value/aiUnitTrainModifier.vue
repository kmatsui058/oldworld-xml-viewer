<template>
  <span>
    {{ sign }}{{ value }}% Production Time For
    <span v-for="(Unit, key) in Units" :key="key">
      <VTooltip>
        <nuxt-link :to="{ name: 'unit', hash: '#' + Unit.entry.zType }">
          {{ Unit.pluralName }}
        </nuxt-link>
        <template #popper>
          <UnitDetail :z-type="Unit.entry.zType" />
        </template>
      </VTooltip>
      <span v-if="key < Units.length - 1"> and </span>
    </span>
  </span>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from '@nuxtjs/composition-api'
import Unit from '~/classes/Unit'
import IValue from '~/classes/IValue'
import UnitDetail from '~/components/unit/detail.vue'

export default defineComponent({
  name: 'AiUnitTrainModifier',
  components: { UnitDetail },
  props: {
    iValue: {
      type: Object as PropType<IValue>,
      required: true,
    },
  },
  setup(props) {
    const Units = computed(() => {
      return props.iValue.pair.map((item) => new Unit(item.zIndex))
    })
    const sign = computed((): string => {
      return Number(props.iValue.pair[0].iValue) > 0 ? '+' : ''
    })

    const value = computed((): string => {
      return props.iValue.pair[0].iValue
    })
    return { Units, sign, value }
  },
})
</script>
<style lang="scss" scoped>
.v-popper {
  display: inline;
}
</style>

