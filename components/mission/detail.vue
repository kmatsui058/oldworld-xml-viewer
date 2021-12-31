<template>
  <div class="content">
    <h3>
      {{ title }}
    </h3>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

import Mission from '~/classes/Mission'
export default defineComponent({
  name: 'MissionDetail',
  props: {
    zType: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const missionItem = computed(() => {
      return new Mission(props.zType)
    })

    const title = computed(() => {
      const items = missionItem.value.name?.split('~')[0]
      return items
    })

    return { missionItem, title }
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

