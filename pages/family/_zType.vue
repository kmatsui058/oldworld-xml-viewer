<template>
  <section class="section">
    <h2 class="title is-2">
      Family: {{ family.name }}
    </h2>
    <section
      id="nation"
      class="section"
    >
      <h3 class="title">
        Nation
      </h3>
      <hr>
      <p>
        <nuxt-link
          :key="family.nation.zType"
          :to="`/nation/${family.nation.zType}`"
        >
          {{ family.nation.name }}
        </nuxt-link>
      </p>
    </section>
    <section
      id="family-class"
      class="section"
    >
      <h3 class="title">
        Family Class
      </h3>
      <hr>
      <p>
        <nuxt-link
          :key="family.familyClass.zType"
          :to="`/family-class/${family.familyClass.zType}`"
        >
          {{ family.familyClass.name }}
        </nuxt-link>
      </p>
    </section>
    <section
      id="abmitions"
      class="section"
    >
      <h3 class="title">
        Ambitions
      </h3>
      <hr>
      <ambition-table :goals="family.familyClass.ambitions" />
    </section>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import families from '~/assets/data/xml/family'
import Family from '~/classes/Family'
import AmbitionTable from '~/components/AmbitionTable.vue'

@Component({ components: { AmbitionTable } })
export default class Index extends Vue {
  get family (): Family {
    const entry = families.Root.Entry.find((item) => {
      return item.zType === this.$route.params.zType
    })
    if (!entry) {
      throw new Error('not found')
    }
    return new Family(entry)
  }
}
</script>
