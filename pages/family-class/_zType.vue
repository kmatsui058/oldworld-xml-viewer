<template>
  <section class="section">
    <h2 class="title is-2">
      <nuxt-link to="/family-class/"> Family Class </nuxt-link>/
      {{ familyClass.name }}
    </h2>
    <section id="family" class="section">
      <h3 class="title">Family</h3>
      <hr />
      <div class="content">
        <template v-for="(family, index) in familyClass.families">
          <nuxt-link :key="family.zType" :to="`/family/${family.zType}`">
            {{ family.name }}
          </nuxt-link>
          (<nuxt-link :key="family.nation.zType" :to="`/nation/${family.nation.zType}`">
            {{ family.nation.name }} </nuxt-link
          >)
          <template v-if="index + 1 < familyClass.families.length"> / </template>
        </template>
      </div>
    </section>
    <section id="effect-city" class="section">
      <h3 class="title">Effect City</h3>
      <hr />
      <div class="content">
        <EffectCity :effect-city="familyClass.effectCity" />
      </div>
    </section>
    <section id="abmitions" class="section">
      <h3 class="title">Ambitions</h3>
      <hr />
      <ambition-table :goals="familyClass.ambitions" />
    </section>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, useRoute } from '@nuxtjs/composition-api'
import familyClasses from '~/assets/data/xml/familyClass'
import FamilyClass from '~/classes/FamilyClass'
import AmbitionTable from '~/components/AmbitionTable.vue'
import EffectCity from '~/components/effect-city/effect.vue'

export default defineComponent({
  components: { AmbitionTable, EffectCity },
  setup() {
    const route = useRoute()
    const familyClass = computed((): FamilyClass => {
      const entry = familyClasses.Root.Entry.find((item) => {
        return item.zType === route.value.params.zType
      })
      if (!entry) {
        throw new Error('not found')
      }
      return new FamilyClass(entry)
    })
    return { familyClass }
  },
})
</script>
