<template>
  <div class="content">
    <h3>
      {{ title }}
    </h3>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

import Project from '~/classes/Project'
export default defineComponent({
  name: 'ProjectDetail',
  props: {
    zType: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const projectItem = computed(() => {
      return new Project(props.zType)
    })

    const title = computed(() => {
      const items = projectItem.value.name?.split('~')[0]
      return items
    })

    return { projectItem, title }
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

