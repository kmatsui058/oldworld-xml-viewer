<template>
  <section class="section">
    <h2 class="title is-2">CULTURES</h2>
    <div class="content">
      <div v-for="(cultureItem, key) in cultures" :key="key">
        <CultureDetail :id="cultureItem.entry.zType" :z-type="cultureItem.entry.zType" />
        <hr v-if="key < cultures.length - 1" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import CultureData from '~/assets/data/xml/culture'
import Culture from '~/classes/Culture'
import CultureDetail from '~/components/culture/detail.vue'
export default defineComponent({
  name: 'CultureIndex',
  components: {
    CultureDetail,
  },
  setup() {
    const cultures = computed((): Culture[] => {
      const result: Culture[] = []
      CultureData.Root.Entry.forEach((item) => {
        if (typeof item.zType === 'string') result.push(new Culture(item.zType))
      })
      return result
    })
    return { cultures }
  },
  head: { title: 'CULTURES' },
})
</script>
