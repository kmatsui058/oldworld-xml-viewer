<template>
  <section class="section">
    <h2 class="title is-2">NATIONS</h2>
    <div class="content">
      <NationList :nations="nations" />
      <div v-for="(nation, key) in nations" :key="key">
        <h3 :id="nation.zType">{{ nation.name }}</h3>
        <NationItem :nation="nation" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import NationList from '@/components/nation/list.vue'
import NationItem from '@/components/nation/item.vue'
import Nation from '~/classes/Nation'
import nation from '~/assets/data/xml/nation'

export default defineComponent({
  name: 'NationIndex',
  components: {
    NationList,
    NationItem,
  },
  setup() {
    const nations = computed((): Nation[] => {
      return nation.Root.Entry.map((item) => {
        return new Nation(item)
      }).filter((nation) => nation.name)
    })
    return { nations }
  },
})
</script>
