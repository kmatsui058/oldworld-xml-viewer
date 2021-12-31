<template>
  <div class="content">
    <h3>
      {{ title }}
    </h3>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

import ImprovementClass from '~/classes/ImprovementClass'
export default defineComponent({
  name: 'ImprovementClassDetail',
  props: {
    zType: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const improvementClassItem = computed(() => {
      return new ImprovementClass(props.zType)
    })

    const title = computed(() => {
      const items = improvementClassItem.value.name?.split('~')[0]
      return items
    })

    return { improvementClassItem, title }
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

