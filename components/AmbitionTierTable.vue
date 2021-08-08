<template>
  <div>
    <div class="field is-horizontal">
      <div class="field">
        <label class="label">Tier</label>
        <p class="control">
          <span class="select">
            <select v-model="filterTier">
              <option :value="null">
                -
              </option>
              <option v-for="tier in tiers" :key="tier" :value="tier">
                {{ tier }}
              </option>
            </select>
          </span>
        </p>
      </div>
      <div class="field">
        <label class="label">Tier</label>
        <p class="control">
          <span class="select">
            <select v-model="filterTier">
              <option :value="null">
                -
              </option>
              <option v-for="tier in tiers" :key="tier" :value="tier">
                {{ tier }}
              </option>
            </select>
          </span>
        </p>
      </div>
    </div>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th> Tier </th>
          <th> Ambitions </th>
          <th> Family Class Weight </th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item, index) in flattenArray">
          <tr
            v-if="!(filterTier && item.tier !== filterTier)"
            :key="index"
            :class="{'not-desired': !item.isDesired}"
          >
            <td v-if="item.isFirst" :rowspan="item.rowSpan">
              {{ item.tier }}
            </td>
            <td>
              <nuxt-link
                :to="`/goal/${item.goal.zType}`"
              >
                {{ item.goal.name }}
              </nuxt-link>
            </td>
            <td>
              <template v-for="familyClassWeights in item.goal.familyClassWeights">
                <nuxt-link
                  :key="familyClassWeights.zIndex"
                  :to="`/family-class/${familyClassWeights.zIndex}`"
                >
                  {{ familyClassWeights.name }}
                </nuxt-link>
                : {{ familyClassWeights.entry.iValue }}
              </template>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import Goal from '~/classes/Goal'

@Component
export default class AmbitionTierTable extends Vue {
  @Prop({ type: Array, required: true }) readonly goals!: Goal[]
  @Prop({ type: String, required: false, default: null }) readonly familyClassZType!: string | null

  filterTier: Tier | null = null

  get tiers (): Tier[] {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  }

  get amibitionByTier () {
    return this.tiers.map((tier) => {
      const result: Goal[] = []
      this.goals.forEach((goal) => {
        if (goal.minTier <= tier && tier <= goal.maxTier) {
          result.push(goal)
        }
      })
      return result
    })
  }

  get flattenArray (): {tier: number, goal: Goal, isFirst: boolean, rowSpan: number, isDesired: boolean}[] {
    const result: {tier: number, goal: Goal, isFirst: boolean, rowSpan: number, isDesired: boolean}[] = []
    this.amibitionByTier.forEach((goals, i) => {
      goals.forEach((goal, j) => {
        result.push({
          tier: i + 1,
          goal,
          isFirst: j === 0,
          rowSpan: goals.length,
          isDesired: !!goal.familyClassWeights.find(weight => weight.familyClass.zType === this.familyClassZType)
        })
      })
    })
    return result
  }
}
</script>
<style lang="scss" scoped>
.not-desired {
  opacity: 0.3;
}
</style>
