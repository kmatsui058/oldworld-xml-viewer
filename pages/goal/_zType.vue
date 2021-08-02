<template>
  <section class="section">
    <h2 class="title is-2">
      <nuxt-link to="/goal/">
        Ambition
      </nuxt-link>/ {{ goal.name }}
    </h2>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import families from '~/assets/data/xml/goal'
import Goal from '~/classes/Goal'

@Component({})
export default class Index extends Vue {
  get goal (): Goal {
    const entry = families.Root.Entry.find((item) => {
      return item.zType === this.$route.params.zType
    })
    if (!entry) {
      throw new Error('not found')
    }
    return new Goal(entry)
  }
}
</script>
