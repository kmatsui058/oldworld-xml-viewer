<template>
  <section class="section">
    <h2 class="title is-2">FAMILY CLASSES</h2>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="familyClass in familyClasses">
          <tr :id="familyClass.zType" :key="familyClass.zType">
            <td>
              <nuxt-link :key="familyClass.zType" :to="`/family-class/${familyClass.zType}`">
                {{ familyClass.name }}
              </nuxt-link>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'
import familyClassesRaw from '~/assets/data/xml/familyClass'
import FamilyClass from '~/classes/FamilyClass'

export default defineComponent({
  name: 'FamilyClassIndex',
  setup() {
    const familyClasses = computed((): FamilyClass[] => {
      return familyClassesRaw.Root.Entry.map((item) => {
        return new FamilyClass(item)
      }).filter((nation) => nation.name)
    })
    return { familyClasses }
  },
  head: { title: 'FAMILY CLASSES' },
})
</script>
