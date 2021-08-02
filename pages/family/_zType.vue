<template>
  <section class="section">
    <h2 class="title is-2">
      {{ family.name }} family
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
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import families from '~/assets/data/xml/family'
import Family from '~/classes/Family'

@Component({})
export default class Index extends Vue {
  get family (): Family {
    const entry = families.Root.Entry.find((item) => {
      return item.zType === this.$route.params.zType
    })
    if (!entry) {
      this.$nuxt.error({ statusCode: 404 })
      throw new Error('not found')
    }
    return new Family(entry)
  }
}
</script>
