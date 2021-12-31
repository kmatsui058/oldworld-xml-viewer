<template>
  <section class="section">
    <h2 class="title is-2">PROJECTS</h2>
    <div class="content">
      <div v-for="(projectItem, key) in projects" :key="key">
        <ProjectDetail :id="projectItem.entry.zType" :z-type="projectItem.entry.zType" />
        <hr v-if="key < projects.length - 1" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import ProjectData from '~/assets/data/xml/project'
import Project from '~/classes/Project'
import ProjectDetail from '~/components/project/detail.vue'
export default defineComponent({
  name: 'ProjectIndex',
  components: {
    ProjectDetail,
  },
  setup() {
    const projects = computed((): Project[] => {
      const result: Project[] = []
      ProjectData.Root.Entry.forEach((item) => {
        if (typeof item.zType === 'string') result.push(new Project(item.zType))
      })
      return result
    })
    return { projects }
  },
})
</script>
