<template>
  <div class="content">
    <h3>
      <img :src="yieldItem.icon" alt="" class="icon" />
      {{ title }}
    </h3>
    <PopupText :text="yieldItem.helpText" />
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

import Yield from '~/classes/Yield'
import PopupText from '~/components/PopupText.vue'
export default defineComponent({
  name: 'YieldDetail',
  components: { PopupText },
  props: {
    zType: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const yieldItem = computed(() => {
      return new Yield(props.zType)
    })

    const title = computed(() => {
      const items = yieldItem.value.name?.split(/.*\(.*\)/).join('')
      return items
    })

    return { yieldItem, title }
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

