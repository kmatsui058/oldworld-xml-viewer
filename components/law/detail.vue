<template>
  <div class="content">
    <h3>
      {{ title }}
    </h3>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

import Law from '~/classes/Law'
export default defineComponent({
  name: 'LawDetail',
  props: {
    zType: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const LawItem = computed(() => {
      return new Law(props.zType)
    })

    const title = computed(() => {
      const items = LawItem.value.name?.split('~')[0]
      return items
    })

    return { LawItem, title }
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

