<template>
  <section class="section">
    <h2 class="title is-2">MISSIONS</h2>
    <div class="content">
      <div v-for="(missionItem, key) in missions" :key="key">
        <MissionDetail :id="missionItem.entry.zType" :z-type="missionItem.entry.zType" />
        <hr v-if="key < missions.length - 1" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import MissionData from '~/assets/data/xml/mission'
import Mission from '~/classes/Mission'
import MissionDetail from '~/components/mission/detail.vue'
export default defineComponent({
  name: 'MissionIndex',
  components: {
    MissionDetail,
  },
  setup() {
    const missions = computed((): Mission[] => {
      const result: Mission[] = []
      MissionData.Root.Entry.forEach((item) => {
        if (typeof item.zType === 'string') result.push(new Mission(item.zType))
      })
      return result
    })
    return { missions }
  },
})
</script>
