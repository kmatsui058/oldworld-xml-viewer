<template>
  <section class="section">
    <h2 class="title is-2"><nuxt-link to="/nation/"> Nation </nuxt-link>/ {{ nation.name }}</h2>
    <section id="nation" class="section">
      <h3 class="title">Starting Tech</h3>
      <hr />
      <template v-for="tech in nation.teches">
        <nuxt-link :key="tech.zType" :to="`/tech/${tech.zType}`">
          {{ tech.name }}
        </nuxt-link>
      </template>
    </section>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, useRoute, useMeta } from '@nuxtjs/composition-api'
import nationRaw from '~/assets/data/xml/nation'
import Nation from '~/classes/Nation'

export default defineComponent({
  setup() {
    const route = useRoute()
    const nation = computed((): Nation => {
      const entry = nationRaw.Root.Entry.find((item) => {
        return item.zType === route.value.params.zType
      })
      if (!entry) {
        throw new Error('not found')
      }
      return new Nation(entry)
    })
    const meta = useMeta()
    meta.title.value = nation?.value?.name || ''
    return { nation }
  },
  head: { title: 'NATIONS' },
})
</script>
