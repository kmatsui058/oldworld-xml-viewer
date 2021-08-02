<template>
  <section class="section">
    <h2 class="title is-2">
      {{ nation.name }}
    </h2>
    <section id="nation" class="section">
      <h3 class="title">
        Starting Tech
      </h3>
      <hr>
      <template v-for="tech in nation.teches">
        <nuxt-link :key="tech.zType" :to="`/tech/${tech.zType}`">
          {{ tech.name }}
        </nuxt-link>
      </template>
    </section>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import nation from '~/assets/data/xml/nation'
import Nation from '~/classes/Nation'

@Component({})
export default class Index extends Vue {
  get nation (): Nation {
    const entry = nation.Root.Entry.find((item) => {
      return item.zType === this.$route.params.zType
    })
    if (!entry) {
      this.$nuxt.error({ statusCode: 404 })
      throw new Error('not found')
    }
    return new Nation(entry)
  }
}
</script>
