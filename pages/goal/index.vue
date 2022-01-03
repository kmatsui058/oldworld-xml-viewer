<template>
  <section class="section">
    <h2 class="title is-2">AMBITIONS</h2>
    <ambition-table :goals="goals" />
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'
import goalsRaw from '~/assets/data/xml/goal'
import Goal from '~/classes/Goal'
import AmbitionTable from '~/components/AmbitionTable.vue'
export default defineComponent({
  name: 'GoalIndex',
  components: {
    AmbitionTable,
  },
  setup() {
    const goals = computed((): Goal[] => {
      return goalsRaw.Root.Entry.map((item) => {
        return new Goal(item)
      }).filter((test) => test.name)
    })
    return { goals }
  },
  head: { title: 'AMBITIONS' },
})
</script>
