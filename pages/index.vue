<template>
  <section class="section">
    <h2 class="title is-2">
      Menu
    </h2>
    <aside class="menu">
      <p class="menu-label">
        General
      </p>
      <ul class="menu-list">
        <li>
          <nuxt-link
            :to="`/nation/`"
          >
            Nations
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            :to="`/tech/`"
          >
            Teches
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            :to="`/family/`"
          >
            Families
          </nuxt-link>
        </li>
      </ul>
    </aside>
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
