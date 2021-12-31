<template>
  <table class="table is-fullwidth">
    <thead>
      <tr>
        <th>Name</th>
        <th>Stating Tech</th>
        <th>Families</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="nation in nations">
        <tr :id="nation.entry.zType" :key="nation.entry.zType">
          <td>
            <nuxt-link :key="nation.zType" :to="`/nation/#${nation.zType}`">
              {{ nation.name }}
            </nuxt-link>
          </td>
          <td>
            <template v-for="(tech, index) in nation.teches">
              <nuxt-link :key="tech.zType" :to="`/tech/${tech.zType}`"> {{ tech.name }} </nuxt-link
              ><template v-if="index + 1 < nation.teches.length"> / </template>
            </template>
          </td>
          <td>
            <template v-for="(family, index) in nation.families">
              <nuxt-link :key="family.zType" :to="`/family/${family.zType}`">
                {{ family.name }}
              </nuxt-link>
              (<nuxt-link
                :key="family.familyClass.zType"
                :to="`/family-class/${family.familyClass.zType}`"
              >
                {{ family.familyClass.name }} </nuxt-link
              >)
              <template v-if="index + 1 < nation.families.length"> / </template>
            </template>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import Nation from '~/classes/Nation'

export default defineComponent({
  name: 'NationList',
  props: {
    nations: {
      type: Array as PropType<Nation[]>,
      required: true,
    },
  },
})
</script>
