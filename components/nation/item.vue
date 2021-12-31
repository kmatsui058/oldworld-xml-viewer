<template>
  <table class="table is-bordered">
    <tr v-if="effectCity">
      <th>EffectCity</th>
      <td><EffectCity :effect-city="effectCity" /></td>
    </tr>
  </table>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from '@nuxtjs/composition-api'
import Nation from '~/classes/Nation'
import EffectCity from '~/components/effect/city.vue'

export default defineComponent({
  name: 'NationItem',
  components: {
    EffectCity,
  },
  props: {
    nation: {
      type: Object as PropType<Nation>,
      required: true,
    },
  },
  setup(props) {
    const effectCity = computed(() => {
      return props.nation.effectPlayer.effectCity
    })

    return {
      effectCity,
    }
  },
})
</script>
