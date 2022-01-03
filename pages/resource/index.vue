<template>
  <section class="section">
    <h2 class="title is-2">RESOURCES</h2>
    <div class="content">
      <div v-for="(resourceItem, key) in resources" :key="key">
        <ResourceDetail :id="resourceItem.entry.zType" :z-type="resourceItem.entry.zType" />
        <hr v-if="key < resources.length - 1" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import ResourceData from '~/assets/data/xml/resource'
import Resource from '~/classes/Resource'
import ResourceDetail from '~/components/resource/detail.vue'
export default defineComponent({
  name: 'ResourceIndex',
  components: {
    ResourceDetail,
  },
  setup() {
    const resources = computed((): Resource[] => {
      const result: Resource[] = []
      ResourceData.Root.Entry.forEach((item) => {
        if (typeof item.zType === 'string') result.push(new Resource(item.zType))
      })
      return result
    })
    return { resources }
  },
  head: { title: 'RESOURCES' },
})
</script>
