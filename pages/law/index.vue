<template>
  <section class="section">
    <h2 class="title is-2">LAWS</h2>
    <div class="content">
      <div v-for="(lawItem, key) in laws" :key="key">
        <LawDetail :id="lawItem.entry.zType" :z-type="lawItem.entry.zType" />
        <hr v-if="key < laws.length - 1" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import LawData from '~/assets/data/xml/law'
import Law from '~/classes/Law'
import LawDetail from '~/components/law/detail.vue'
export default defineComponent({
  name: 'LawIndex',
  components: {
    LawDetail,
  },
  setup() {
    const laws = computed((): Law[] => {
      const result: Law[] = []
      LawData.Root.Entry.forEach((item) => {
        if (typeof item.zType === 'string') result.push(new Law(item.zType))
      })
      return result
    })
    return { laws }
  },
})
</script>
