<template>
  <VTooltip>
    <nuxt-link :to="{ name: 'concept', hash: `#${conceptItem.entry.zType}` }">
      {{ conceptItem.names[1] }}
    </nuxt-link>
    <template #popper><ConceptDetail :z-type="conceptItem.entry.zType" /></template>
  </VTooltip>
</template>
<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import ConceptDetail from '~/components/concept/detail.vue'

import Concept from '~/classes/Concept'

export default defineComponent({
  name: 'ConceptInlien',
  components: { ConceptDetail },
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

    return { conceptItem }
  },
})
</script>
<style lang="scss" scoped>
.v-popper {
  display: inline;
}
</style>

