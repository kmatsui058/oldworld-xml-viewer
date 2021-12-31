<template>
  <div class="content">
    <h3>
      {{ title }}
    </h3>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

import Rating from '~/classes/Rating'
export default defineComponent({
  name: 'RatingDetail',
  props: {
    zType: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const ratingItem = computed(() => {
      return new Rating(props.zType)
    })

    const title = computed(() => {
      const items = ratingItem.value.name?.split('~')[0]
      return items
    })

    return { ratingItem, title }
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

