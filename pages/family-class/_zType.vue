<template>
  <section class="section">
    <h2 class="title is-2">
      {{ familyClass.name }}
    </h2>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import families from '~/assets/data/xml/familyClass'
import FamilyClass from '~/classes/FamilyClass'

@Component({})
export default class Index extends Vue {
  get familyClass (): FamilyClass {
    const entry = families.Root.Entry.find((item) => {
      return item.zType === this.$route.params.zType
    })
    if (!entry) {
      throw new Error('not found')
    }
    return new FamilyClass(entry)
  }
}
</script>
