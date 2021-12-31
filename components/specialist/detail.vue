<template>
  <div class="content">
    <h3>
      {{ title }}
    </h3>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

import Specialist from '~/classes/Specialist'
export default defineComponent({
  name: 'SpecialistDetail',
  props: {
    zType: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const specialistItem = computed(() => {
      return new Specialist(props.zType)
    })

    const title = computed(() => {
      const items = specialistItem.value.name?.split('~')[0]
      return items
    })

    return { specialistItem, title }
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

