<template>
  <section class="section">
    <h2 class="title is-2">
      AMBITIONS
    </h2>
    <table class="table">
      <thead>
        <tr>
          <th> Name </th>
          <th> Family Class: weight </th>
          <th> Min Tier </th>
          <th> Max Tier </th>
          <th> Ambition Class </th>
        </tr>
      </thead>
      <tbody>
        <template v-for="goal in goals">
          <tr
            :id="goal.zType"
            :key="goal.zType"
          >
            <td>
              <nuxt-link
                :key="goal.zType"
                :to="`/goal/${goal.zType}`"
              >
                {{ goal.name }}
              </nuxt-link>
            </td>
            <td>
              <template v-for="familyClassWeights in goal.familyClassWeights">
                <nuxt-link
                  :key="familyClassWeights.zIndex"
                  :to="`/family-class/${familyClassWeights.zIndex}`"
                >
                  {{ familyClassWeights.name }}
                </nuxt-link>
                : {{ familyClassWeights.entry.iValue }}
              </template>
            </td>
            <td>{{ goal.entry.iMinTier }}</td>
            <td>{{ goal.entry.iMaxTier }}</td>
            <td>{{ goal.entry.iAmbitionClass }}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import goals from '~/assets/data/xml/goal'
import Goal from '~/classes/Goal'

@Component({
})
export default class Index extends Vue {
  get goals (): Goal[] {
    return goals.Root.Entry.map((item) => {
      return new Goal(item)
    }).filter(test => test.name)
  }
}
</script>
