<template>
  <span>
    New
    <span v-for="(unitTrait, key) in unitTraits" :key="key">
      <VTooltip>
        <nuxt-link :to="{ name: 'unittrait', hash: '#' + unitTrait.entry.zType }">
          {{ unitTrait.name }}
        </nuxt-link>
        <template #popper>
          <UnitTraitDetail :z-type="unitTrait.entry.zType" />
        </template>
      </VTooltip>
      <span v-if="key < unitTraits.length - 1"> and </span>
    </span>
    Units: {{ sign }}{{ value }} Level
  </span>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from '@nuxtjs/composition-api'
import UnitTrait from '~/classes/UnitTrait'
import IValue from '~/classes/IValue'
import UnitTraitDetail from '~/components/unit-trait/detail.vue'

export default defineComponent({
  name: 'AiUnitTraitXP',
  components: { UnitTraitDetail },
  props: {
    iValue: {
      type: Object as PropType<IValue>,
      required: true,
    },
  },
  setup(props) {
    const unitTraits = computed(() => {
      return props.iValue.pair.map((item) => new UnitTrait(item.zIndex))
    })
    const sign = computed((): string => {
      return Number(props.iValue.pair[0].iValue) > 0 ? '+' : ''
    })

    const value = computed((): string => {
      return props.iValue.pair[0].iValue
    })
    return { unitTraits, sign, value }
  },
})
</script>
<style lang="scss" scoped>
.v-popper {
  display: inline;
}
</style>

