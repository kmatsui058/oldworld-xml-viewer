<template>
  <section class="section">
    <h2 class="title is-2">
      TECHES
    </h2>
    <table class="table">
      <thead>
        <tr>
          <th> Name </th>
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
                :key="tech.entry"
                :to="`/tech/${tech.zType}`"
              >
                {{ tech.name }}
              </nuxt-link>
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
