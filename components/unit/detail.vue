<template>
  <div class="content">
    <h3>
      {{ title }}
    </h3>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

import Unit from '~/classes/Unit'
export default defineComponent({
  name: 'UnitDetail',
  props: {
    zType: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const UnitItem = computed(() => {
      return new Unit(props.zType)
    })

    const title = computed(() => {
      const items = UnitItem.value.name?.split('~')[0]
      return items
    })

    return { UnitItem, title }
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

