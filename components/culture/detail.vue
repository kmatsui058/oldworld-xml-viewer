<template>
  <div class="content">
    <h3>
      {{ title }}
    </h3>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

import Culture from '~/classes/Culture'
export default defineComponent({
  name: 'CultureDetail',
  props: {
    zType: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const cultureItem = computed(() => {
      return new Culture(props.zType)
    })

    const title = computed(() => {
      const items = cultureItem.value.name?.split('~')[0]
      return items
    })

    return { cultureItem, title }
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

