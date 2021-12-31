<template>
  <div class="content">
    <h3>
      {{ title }}
    </h3>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

import Resource from '~/classes/Resource'
export default defineComponent({
  name: 'ResourceDetail',
  props: {
    zType: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const resourceItem = computed(() => {
      return new Resource(props.zType)
    })

    const title = computed(() => {
      const items = resourceItem.value.name?.split('~')[0]
      return items
    })

    return { resourceItem, title }
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

