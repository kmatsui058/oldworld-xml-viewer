<template>
  <VTooltip>
    <nuxt-link class="yield-icon" :to="{ name: 'yield', hash: `#${yieldItem.entry.zType}` }">
      <img :src="yieldItem.icon" alt="" class="icon" />
    </nuxt-link>
    <template #popper><YieldDetail :z-type="yieldItem.entry.zType" /></template>
  </VTooltip>
</template>
<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import YieldDetail from '~/components/yield/detail.vue'

import Yield from '~/classes/Yield'

const yieldDetail: any = YieldDetail

export default defineComponent({
  name: 'YieldIcon',
  components: { YieldDetail: yieldDetail },
  props: {
    zType: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const yieldItem = computed(() => {
      return new Yield(props.zType)
    })

    return { yieldItem }
  },
})
</script>
<style lang="scss" scoped>
.icon {
  height: 1em;
  width: 1em;
  vertical-align: text-bottom;
}
.v-popper {
  display: inline;
}
</style>

