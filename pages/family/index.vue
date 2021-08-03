<template>
  <section class="section">
    <h2 class="title is-2">
      FAMILIES
    </h2>
    <table class="table">
      <thead>
        <tr>
          <th> Name </th>
          <th> Nation </th>
          <th> Family Class </th>
        </tr>
      </thead>
      <tbody>
        <template v-for="family in families">
          <tr
            :id="family.zType"
            :key="family.zType"
          >
            <td>
              <nuxt-link
                :to="`/family/${family.zType}`"
              >
                {{ family.name }}
              </nuxt-link>
            </td>
            <td>
              <nuxt-link
                :to="`/nation/${family.nation.zType}`"
              >
                {{ family.nation.name }}
              </nuxt-link>
            </td>
            <td>
              <nuxt-link
                :to="`/family-class/${family.familyClass.zType}`"
              >
                {{ family.familyClass.name }}
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
import families from '~/assets/data/xml/family'
import Family from '~/classes/Family'

@Component({
})
export default class Index extends Vue {
  get families (): Family[] {
    return families.Root.Entry.map((item) => {
      return new Family(item)
    }).filter(nation => nation.name)
  }
}
</script>
