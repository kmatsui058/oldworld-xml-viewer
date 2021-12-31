<template>
  <div class="content">
    <h3>
      {{ title }}
    </h3>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

import UnitTrait from '~/classes/UnitTrait'
export default defineComponent({
  name: 'UnitTraitDetail',
  props: {
    zType: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const unitTraitItem = computed(() => {
      return new UnitTrait(props.zType)
    })

    const title = computed(() => {
      const items = unitTraitItem.value.name?.split('~')[0]
      return items
    })

    return { unitTraitItem, title }
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

