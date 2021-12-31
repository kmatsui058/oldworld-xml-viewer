<template>
  <section class="section">
    <h2 class="title is-2">IMPROVEMENTS</h2>
    <div class="content">
      <div v-for="(improvementItem, key) in improvements" :key="key">
        <ImprovementDetail
          :id="improvementItem.entry.zType"
          :z-type="improvementItem.entry.zType"
        />
        <hr v-if="key < improvements.length - 1" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import improvementData from '~/assets/data/xml/improvement'
import Improvement from '~/classes/Improvement'
import ImprovementDetail from '~/components/improvement/detail.vue'
export default defineComponent({
  name: 'ImprovementIndex',
  components: {
    ImprovementDetail,
  },
  setup() {
    const improvements = computed((): Improvement[] => {
      const result: Improvement[] = []
      improvementData.Root.Entry.forEach((item) => {
        if (typeof item.zType === 'string') result.push(new Improvement(item.zType))
      })
      return result
    })
    return { improvements }
  },
})
</script>
