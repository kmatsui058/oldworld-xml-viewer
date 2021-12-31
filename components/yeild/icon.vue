<template>
  <nuxt-link class="yield-icon" :to="{ name: 'yield', hash: `#${yieldItem.entry.zType}` }">
    <img :src="yieldItem.icon" alt="" class="icon" />
  </nuxt-link>
</template>
<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

import Yield from '~/classes/Yield'
export default defineComponent({
  name: 'YieldDetail',
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
</style>

