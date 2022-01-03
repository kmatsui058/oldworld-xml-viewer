<template>
  <section class="section">
    <h2 class="title is-2">SPECIALISTS</h2>
    <div class="content">
      <div v-for="(specialistItem, key) in specialists" :key="key">
        <SpecialistDetail :id="specialistItem.entry.zType" :z-type="specialistItem.entry.zType" />
        <hr v-if="key < specialists.length - 1" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import SpecialistData from '~/assets/data/xml/specialist'
import Specialist from '~/classes/Specialist'
import SpecialistDetail from '~/components/specialist/detail.vue'
export default defineComponent({
  name: 'SpecialistIndex',
  components: {
    SpecialistDetail,
  },
  setup() {
    const specialists = computed((): Specialist[] => {
      const result: Specialist[] = []
      SpecialistData.Root.Entry.forEach((item) => {
        if (typeof item.zType === 'string') result.push(new Specialist(item.zType))
      })
      return result
    })
    return { specialists }
  },
  head: { title: 'SPECIALISTS' },
})
</script>
