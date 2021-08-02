<template>
  <section class="section">
    <h2 class="title is-2">
      Menu
    </h2>
    <aside class="menu">
      <p class="menu-label">
        General
      </p>
      <GeneralNavigation />
    </aside>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Nation from '~/classes/Nation'
import nation from '~/assets/data/xml/nation'
import GeneralNavigation from '~/components/navigation/GeneralNavigation.vue'

@Component({ components: { GeneralNavigation } })
export default class Index extends Vue {
  get nations (): Nation[] {
    return nation.Root.Entry.map((item) => {
      return new Nation(item)
    }).filter(nation => nation.name)
  }
}
</script>
