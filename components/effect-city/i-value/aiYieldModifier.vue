<template>
  <span>
    <span v-for="(pair, key) in pairs" :key="key">
      {{ pair.sign }}{{ pair.value }}%
      <YieldIcon :z-type="pair.zIndex" />
      <br v-if="key < pairs.length - 1" />
    </span>
  </span>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from '@nuxtjs/composition-api'
import IValue from '~/classes/IValue'
import YieldIcon from '~/components/yield/icon.vue'

export default defineComponent({
  name: 'AiYieldModifier',
  components: { YieldIcon },
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
          value: Number(pair.iValue),
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

