<template>
  <section class="section">
    <h2 class="title is-2">UNIT TRAITS</h2>
    <div class="content">
      <div v-for="(UnitTraitItem, key) in unitTraits" :key="key">
        <UnitTraitDetail :id="UnitTraitItem.entry.zType" :z-type="UnitTraitItem.entry.zType" />
        <hr v-if="key < unitTraits.length - 1" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import UnitTraitData from '~/assets/data/xml/unitTrait'
import UnitTrait from '~/classes/UnitTrait'
import UnitTraitDetail from '~/components/unit-trait/detail.vue'
export default defineComponent({
  name: 'UnitTraitIndex',
  components: {
    UnitTraitDetail,
  },
  setup() {
    const unitTraits = computed((): UnitTrait[] => {
      const result: UnitTrait[] = []
      UnitTraitData.Root.Entry.forEach((item) => {
        if (typeof item.zType === 'string') result.push(new UnitTrait(item.zType))
      })
      return result
    })
    return { unitTraits }
  },
  head: { title: 'UNIT TRAITS' },
})
</script>
