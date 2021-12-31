<template>
  <section class="section">
    <h2 class="title is-2">RATINGS</h2>
    <div class="content">
      <div v-for="(ratingItem, key) in ratings" :key="key">
        <RatingDetail :id="ratingItem.entry.zType" :z-type="ratingItem.entry.zType" />
        <hr v-if="key < ratings.length - 1" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import RatingData from '~/assets/data/xml/rating'
import Rating from '~/classes/Rating'
import RatingDetail from '~/components/rating/detail.vue'
export default defineComponent({
  name: 'RatingIndex',
  components: {
    RatingDetail,
  },
  setup() {
    const ratings = computed((): Rating[] => {
      const result: Rating[] = []
      RatingData.Root.Entry.forEach((item) => {
        if (typeof item.zType === 'string') result.push(new Rating(item.zType))
      })
      return result
    })
    return { ratings }
  },
})
</script>
