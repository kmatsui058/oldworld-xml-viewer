<template>
  <section class="section">
    <h2 class="title is-2"><nuxt-link to="/tech/"> Tech </nuxt-link>/ {{ tech.name }}</h2>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, useMeta, useRoute } from '@nuxtjs/composition-api'
import families from '~/assets/data/xml/tech'
import Tech from '~/classes/Tech'

export default defineComponent({
  setup() {
    const route = useRoute()
    const tech = computed((): Tech => {
      const entry = families.Root.Entry.find((item) => {
        return item.zType === route.value.params.zType
      })
      if (!entry) {
        throw new Error('not found')
      }
      return new Tech(entry)
    })
    const meta = useMeta()
    meta.title.value = tech.value?.name
    return { tech }
  },
  head: { title: 'TECHES' },
})
</script>
