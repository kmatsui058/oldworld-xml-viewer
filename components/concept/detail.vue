<template>
  <div class="content">
    <h3>
      {{ title }}
    </h3>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

import Concept from '~/classes/Concept'
export default defineComponent({
  name: 'ConceptDetail',
  props: {
    zType: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const conceptItem = computed(() => {
      return new Concept(props.zType)
    })

    const title = computed(() => {
      const items = conceptItem.value.names[0]
      return items
    })

    return { conceptItem, title }
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

