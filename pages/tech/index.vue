<template>
  <section class="section">
    <h2 class="title is-2">
      TECHES
    </h2>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th> Name </th>
          <th> Cost </th>
          <th> Prerequisite </th>
        </tr>
      </thead>
      <tbody>
        <template v-for="tech in teches">
          <tr
            :id="tech.zType"
            :key="tech.zType"
          >
            <td>
              <nuxt-link
                :to="`/tech/${tech.zType}`"
              >
                {{ tech.name }}
              </nuxt-link>
            </td>
            <td>
              {{ tech.entry.iCost }}
            </td>
            <td>
              <template v-for="(preTech, index) in tech.techPreReq">
                <nuxt-link
                  :key="preTech.zType"
                  :to="`/tech/${preTech.zType}`"
                >
                  {{ preTech.name }}
                </nuxt-link>
                <template v-if="index + 1 < tech.techPreReq.length">
                  /
                </template>
              </template>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import teches from '~/assets/data/xml/tech'
import Tech from '~/classes/Tech'

@Component({
})
export default class Index extends Vue {
  get teches (): Tech[] {
    return teches.Root.Entry.map((item) => {
      return new Tech(item)
    }).filter(nation => nation.name)
  }
}
</script>
