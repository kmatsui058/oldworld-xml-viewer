<template>
  <section class="section">
    <h2 class="title is-2">CONCEPTS</h2>
    <div class="content">
      <template v-for="(conceptItem, key) in concepts">
        <ConceptDetail :id="conceptItem.entry.zType" :key="key" :z-type="conceptItem.entry.zType" />
        <hr v-if="key < concepts.length - 1" :key="key" />
      </template>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import ConceptData from '~/assets/data/xml/concept'
import Concept from '~/classes/Concept'
import ConceptDetail from '~/components/concept/detail.vue'
export default defineComponent({
  name: 'ConceptIndex',
  components: {
    ConceptDetail,
  },
  setup() {
    const concepts = computed((): Concept[] => {
      const result: Concept[] = []
      ConceptData.Root.Entry.forEach((item) => {
        if (typeof item.zType === 'string') result.push(new Concept(item.zType))
      })
      return result
    })
    return { concepts }
  },
  head: { title: 'CONCEPTS' },
})
</script>
