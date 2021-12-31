<template>
  <section class="section">
    <h2 class="title is-2">UNITS</h2>
    <div class="content">
      <div v-for="(UnitItem, key) in units" :key="key">
        <UnitDetail :id="UnitItem.entry.zType" :z-type="UnitItem.entry.zType" />
        <hr v-if="key < units.length - 1" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import UnitData from '~/assets/data/xml/unit'
import Unit from '~/classes/Unit'
import UnitDetail from '~/components/unit/detail.vue'
export default defineComponent({
  name: 'UnitIndex',
  components: {
    UnitDetail,
  },
  setup() {
    const units = computed((): Unit[] => {
      const result: Unit[] = []
      UnitData.Root.Entry.forEach((item) => {
        if (typeof item.zType === 'string') result.push(new Unit(item.zType))
      })
      return result
    })
    return { units }
  },
})
</script>
