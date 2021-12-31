<template>
  <section class="section">
    <h2 class="title is-2">EFFECT CITY</h2>
    <div class="content">
      <div v-for="(effectCityItem, key) in effectCitys" :key="key">
        <EffectCityDetail :id="effectCityItem.entry.zType" :z-type="effectCityItem.entry.zType" />
        <hr v-if="key < effectCitys.length - 1" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import EffectCityData from '~/assets/data/xml/effectCity'
import EffectCity from '~/classes/EffectCity'
import EffectCityDetail from '~/components/effect-city/detail.vue'
export default defineComponent({
  name: 'EffectCityIndex',
  components: {
    EffectCityDetail,
  },
  setup() {
    const effectCitys = computed((): EffectCity[] => {
      const result: EffectCity[] = []
      EffectCityData.Root.Entry.forEach((item) => {
        if (typeof item.zType === 'string') result.push(new EffectCity(item.zType))
      })
      return result
    })
    return { effectCitys }
  },
})
</script>
