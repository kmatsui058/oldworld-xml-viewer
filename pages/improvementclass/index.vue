<template>
  <section class="section">
    <h2 class="title is-2">IMPROVEMENT CLASSES</h2>
    <div class="content">
      <div v-for="(improvementClassItem, key) in improvementClasses" :key="key">
        <ImprovementClassDetail
          :id="improvementClassItem.entry.zType"
          :z-type="improvementClassItem.entry.zType"
        />
        <hr v-if="key < improvementClasses.length - 1" :key="key" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import improvementClassData from '~/assets/data/xml/improvementClass'
import ImprovementClass from '~/classes/ImprovementClass'
import ImprovementClassDetail from '~/components/improvement-class/detail.vue'
export default defineComponent({
  name: 'ImprovementClassIndex',
  components: {
    ImprovementClassDetail,
  },
  setup() {
    const improvementClasses = computed((): ImprovementClass[] => {
      const result: ImprovementClass[] = []
      improvementClassData.Root.Entry.forEach((item) => {
        if (typeof item.zType === 'string') result.push(new ImprovementClass(item.zType))
      })
      return result
    })
    return { improvementClasses }
  },
})
</script>
