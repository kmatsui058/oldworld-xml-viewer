<template>
  <div class="content">
    <h3>
      {{ title }}
    </h3>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

import Tech from '~/classes/Tech'
export default defineComponent({
  name: 'TechDetail',
  props: {
    zType: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const TechItem = computed(() => {
      return new Tech(props.zType)
    })

    const title = computed(() => {
      const items = TechItem.value.name?.split('~')[0]
      return items
    })

    return { TechItem, title }
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

