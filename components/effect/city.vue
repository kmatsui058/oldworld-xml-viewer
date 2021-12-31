<template>
  <ul class="effect-city">
    <li v-for="(yieldItem, key) in yeilds" :key="key">
      <YieldIcon :z-type="yieldItem.pair.zIndex" class="icon" />
      {{ yieldItem.text }}
    </li>
  </ul>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from '@nuxtjs/composition-api'
import EffectCity from '~/classes/EffectCity'
import getSpriteIcons from '~/assets/Sprite/SpriteIcons'
import YieldIcon from '~/components/yeild/icon.vue'
export default defineComponent({
  name: 'EffectCity',
  components: {
    YieldIcon,
  },
  props: {
    effectCity: {
      type: Object as PropType<EffectCity>,
      required: true,
    },
  },
  setup(props) {
    const yeilds = computed(() => {
      return props.effectCity.yields
    })

    return { yeilds, getSpriteIcons }
  },
})
</script>
<style lang="scss" scoped>
.effect-city {
  margin: 0;
  list-style: none;
}
.icon {
  height: 1em;
  width: 1em;
  vertical-align: text-bottom;
}
</style>

