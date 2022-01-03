<template>
  <VTooltip>
    <nuxt-link class="yield-icon" :to="{ name: 'yield', hash: `#${yieldItem.entry.zType}` }">
      {{ yieldItem.name }}
    </nuxt-link>
    <template #popper><YieldPopup :z-type="yieldItem.entry.zType" /></template>
  </VTooltip>
</template>
<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import YieldPopup from '~/components/yield/popup.vue'

import Yield from '~/classes/Yield'

export default defineComponent({
  name: 'YieldInlien',
  components: { YieldPopup },
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
.v-popper {
  display: inline;
}
</style>

