<template>
  <table class="table is-fullwidth">
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
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import Goal from '~/classes/Goal'

@Component
export default class AmbitionTierTable extends Vue {
  @Prop({ type: Array, required: true }) readonly goals!: Goal[]
}
</script>
