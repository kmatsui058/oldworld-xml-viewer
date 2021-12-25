<template>
  <section class="section">
    <h2 class="title is-2"><nuxt-link to="/family/"> Family </nuxt-link>/ {{ family.name }}</h2>
    <section id="nation" class="section">
      <h3 class="title">Nation</h3>
      <hr />
      <p>
        <nuxt-link :key="family.nation.zType" :to="`/nation/${family.nation.zType}`">
          {{ family.nation.name }}
        </nuxt-link>
      </p>
    </section>
    <section id="family-class" class="section">
      <h3 class="title">Family Class</h3>
      <hr />
      <p>
        <nuxt-link
          :key="family.familyClass.zType"
          :to="`/family-class/${family.familyClass.zType}`"
        >
          {{ family.familyClass.name }}
        </nuxt-link>
      </p>
    </section>
    <section id="effect-city" class="section">
      <h3 class="title">Effect City</h3>
      <hr />
      <div class="content">
        <h4>Yield</h4>
        <p v-if="family.familyClass.effectCity.yields.length">
          <template v-for="(yeild, index) in family.familyClass.effectCity.yields">
            {{ yeild.zIndex }}: {{ yeild.iValue }}
            <template v-if="index + 1 < family.familyClass.effectCity.yields.length"> / </template>
          </template>
        </p>
        <p v-else>-</p>
        <h4>Free Promotion</h4>
        <p>
          {{
            family.familyClass.effectCity.entry.aeFreePromotion
              ? family.familyClass.effectCity.entry.aeFreePromotion.zValue
              : '-'
          }}
        </p>
      </div>
    </section>
    <section id="abmitions" class="section">
      <h3 class="title">Ambitions Weight</h3>
      <hr />
      <ambition-tier-table :goals="goals" :family-class-z-type="family.familyClass.zType" />
    </section>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, useRoute } from '@nuxtjs/composition-api'
import families from '~/assets/data/xml/family'
import Family from '~/classes/Family'
import AmbitionTierTable from '~/components/AmbitionTierTable.vue'
import goalsRaw from '~/assets/data/xml/goal'
import Goal from '~/classes/Goal'
export default defineComponent({
  components: { AmbitionTierTable },
  setup() {
    const route = useRoute()
    const family = computed((): Family => {
      const entry = families.Root.Entry.find((item) => {
        return item.zType === route.value.params.zType
      })
      if (!entry) {
        throw new Error('not found')
      }
      return new Family(entry)
    })

    const goals = computed((): Goal[] => {
      return goalsRaw.Root.Entry.map((item) => {
        return new Goal(item)
      }).filter((test) => test.name)
    })
    return { family, goals }
  },
})
</script>
