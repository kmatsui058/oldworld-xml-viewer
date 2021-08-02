<template>
  <section class="section">
    <h2 class="title is-2">
      AMBITIONS
    </h2>
    <ambition-table :goals="goals" />
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import goals from '~/assets/data/xml/goal'
import Goal from '~/classes/Goal'
import AmbitionTable from '~/components/AmbitionTable.vue'
@Component({
  components: {
    AmbitionTable
  }
})
export default class Index extends Vue {
  get goals (): Goal[] {
    return goals.Root.Entry.map((item) => {
      return new Goal(item)
    }).filter(test => test.name)
  }
}
</script>
