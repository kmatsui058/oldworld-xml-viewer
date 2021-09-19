<template>
  <section class="section">
    <h2 class="title is-2">
      NATIONS
    </h2>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th> Name </th>
          <th> Stating Tech </th>
          <th> Families </th>
        </tr>
      </thead>
      <tbody>
        <template v-for="nation in nations">
          <tr
            :id="nation.entry.zType"
            :key="nation.entry.zType"
          >
            <td>
              <nuxt-link
                :key="nation.zType"
                :to="`/nation/${nation.zType}`"
              >
                {{ nation.name }}
              </nuxt-link>
            </td>
            <td>
              <template v-for="(tech, index) in nation.teches">
                <nuxt-link
                  :key="tech.zType"
                  :to="`/tech/${tech.zType}`"
                >
                  {{ tech.name }}
                </nuxt-link><template v-if="index + 1 < nation.teches.length">
                  /
                </template>
              </template>
            </td>
            <td>
              <template v-for="(family, index) in nation.families">
                <nuxt-link
                  :key="family.zType"
                  :to="`/family/${family.zType}`"
                >
                  {{ family.name }}
                </nuxt-link>
                (<nuxt-link
                  :key="family.familyClass.zType"
                  :to="`/family-class/${family.familyClass.zType}`"
                >
                  {{ family.familyClass.name }}
                </nuxt-link>)
                <template v-if="index + 1 < nation.families.length">
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
import Nation from '~/classes/Nation'
import nation from '~/assets/data/xml/nation'

@Component({})
export default class Index extends Vue {
  get nations (): Nation[] {
    return nation.Root.Entry.map((item) => {
      return new Nation(item)
    }).filter(nation => nation.name)
  }
}
</script>
