<template>
  <section class="section">
    <h2 class="title is-2"><nuxt-link to="/goal/"> Ambition </nuxt-link>/ {{ goal.name }}</h2>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, useRoute } from '@nuxtjs/composition-api'
import families from '~/assets/data/xml/goal'
import Goal from '~/classes/Goal'

export default defineComponent({
  setup() {
    const route = useRoute()
    const goal = computed((): Goal => {
      const entry = families.Root.Entry.find((item) => {
        return item.zType === route.value.params.zType
      })
      if (!entry) {
        throw new Error('not found')
      }
      return new Goal(entry)
    })
    return { goal }
  },
})
</script>
