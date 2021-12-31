<template>
  <div class="content">
    <h3>
      {{ title }}
    </h3>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

import Height from '~/classes/Height'
export default defineComponent({
  name: 'HeightDetail',
  props: {
    zType: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const HeightItem = computed(() => {
      return new Height(props.zType)
    })

    const title = computed(() => {
      const items = HeightItem.value.name?.split('~')[0]
      return items
    })

    return { HeightItem, title }
  },
})
</script>
<style lang="scss" scoped>
.effect-city {
  margin: 0;
  list-style: none;
}
.icon {
  height: 1em;
  width: 1em;
  vertical-align: text-bottom;
}
</style>

