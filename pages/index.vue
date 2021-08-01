<template>
  <section class="section">
    <h2 class="title is-2">
      NATIONS
    </h2>
    <table class="table">
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
            <td>{{ nation.name }}</td>
            <td>
              <template v-for="tech in nation.teches">
                <nuxt-link
                  :key="tech.entry"
                  :to="`/tech/${tech.zType}`"
                >
                  {{ tech.name }}
                </nuxt-link>
              </template>
            </td>
            <td>
              <template v-for="family in nation.families">
                <nuxt-link
                  :key="family.entry"
                  :to="`/tech/${family.zType}`"
                >
                  {{ family.name }}
                </nuxt-link>
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
