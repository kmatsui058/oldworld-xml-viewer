<template>
  <div class="content">
    <h3>
      {{ title }}
    </h3>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

import Improvement from '~/classes/Improvement'
export default defineComponent({
  name: 'ImprovementDetail',
  props: {
    zType: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const improvementItem = computed(() => {
      return new Improvement(props.zType)
    })

    const title = computed(() => {
      const items = improvementItem.value.name?.split('~')[0]
      return items
    })

    return { improvementItem, title }
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

