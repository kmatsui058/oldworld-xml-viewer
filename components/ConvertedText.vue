<template>
  <div>
    <template v-for="(item, key) in items">
      <VTooltip v-if="item.type === 'link'" :key="key">
        <nuxt-link :to="{ name: item.name.toLowerCase(), hash: '#' + item.zType }">
          {{ item.text.toLowerCase() }}
        </nuxt-link>
        <template #popper> <component :is="item.component" :z-type="item.zType" /></template>
      </VTooltip>
      <VTooltip v-else-if="item.type === 'yield'" :key="key">
        <nuxt-link :to="{ name: 'yield', hash: '#' + item.zType }">
          {{ item.preText }}
          <img :src="item.yield.icon" alt="" class="icon" />
          {{ item.afterText }}
        </nuxt-link>
        <template #popper><YieldPopup :z-type="item.zType" /></template>
      </VTooltip>
      <span v-else-if="item.type === 'text'" :key="key">
        {{ item.text }}
      </span>
    </template>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import Yield from '~/classes/Yield'
import SpecialistDetail from '~/components/specialist/detail.vue'
import MissionDetail from '~/components/mission/detail.vue'
import ProjectDetail from '~/components/project/detail.vue'
import RatingDetail from '~/components/rating/detail.vue'
import CultureDetail from '~/components/culture/detail.vue'
import ImprovementClassDetail from '~/components/improvement-class/detail.vue'
import LawDetail from '~/components/law/detail.vue'
import EffectCityDetail from '~/components/effect-city/detail.vue'
import TerrainDetail from '~/components/terrain/detail.vue'
import ResourceDetail from '~/components/resource/detail.vue'
import HeightDetail from '~/components/height/detail.vue'
import VegetationDetail from '~/components/vegetation/detail.vue'
import UnitTraitDetail from '~/components/unit-trait/detail.vue'

export interface LinkItem {
  type: 'link'
  name: string
  zType: string
  text: string
  component: string
}

export interface YieldItem {
  type: 'yield'
  zType: string
  preText: string
  afterText: string
  yield: Yield
}

export interface TextItem {
  type: 'text'
  text: string
}

export type ConvertedTextItem = LinkItem | YieldItem | TextItem

export default defineComponent({
  name: 'ConvertedText',
  components: {
    ImprovementDetail: () => import('~/components/improvement/detail.vue'),
    ConceptDetail: () => import('~/components/concept/detail.vue'),
    UnitDetail: () => import('~/components/unit/detail.vue'),
    SpecialistDetail,
    MissionDetail,
    YieldPopup: () => import('~/components/yield/detail.vue') as any,
    ProjectDetail,
    RatingDetail,
    CultureDetail,
    ImprovementClassDetail,
    LawDetail,
    EffectCityDetail,
    TerrainDetail,
    ResourceDetail,
    HeightDetail,
    VegetationDetail,
    UnitTraitDetail,
  },
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const getComponent = (componentName: string): string => {
      switch (componentName) {
        case 'IMPROVEMENT':
          return 'ImprovementDetail'
        case 'CONCEPT':
          return 'ConceptDetail'
        case 'UNIT':
          return 'UnitDetail'
        case 'SPECIALIST':
          return 'SpecialistDetail'
        case 'MISSION':
          return 'MissionDetail'
        case 'YIELD':
          return 'YieldPopup'
        case 'PROJECT':
          return 'ProjectDetail'
        case 'RATING':
          return 'RatingDetail'
        case 'CULTURE':
          return 'CultureDetail'
        case 'IMPROVEMENTCLASS':
          return 'ImprovementClassDetail'
        case 'LAW':
          return 'LawDetail'
        case 'EFFECTCITY':
          return 'EffectCityDetail'
        case 'TERRAIN':
          return 'TerrainDetail'
        case 'RESOURCE':
          return 'ResourceDetail'
        case 'HEIGHT':
          return 'HeightDetail'
        case 'VEGETATION':
          return 'VegetationDetail'
        case 'UNITTRAIT':
          return 'UnitTraitDetail'
        default:
          throw new Error(`invalid component name "${componentName}"`)
      }
    }
    const items = computed((): ConvertedTextItem[] => {
      const items = props.text.split(/(link\(.*?\))|(\S*\{.*?\}\S*)/).filter(Boolean)
      return items.map((item) => {
        if (item.match(/link\(.*?\)/)) {
          const componentName = /link\((.*?)\)/.exec(item)?.[1].split('_')[0] || ''
          const result: LinkItem = {
            type: 'link',
            name: componentName,
            zType: /link\((.*?)\)/.exec(item)?.[1].split(',')[0] || '',
            text: /link\((.*?)\)/.exec(item)?.[1].split(/,|_/)[1] || '',
            component: getComponent(componentName),
          }
          return result
        }
        if (item.match(/\S*\{.*?\}\S*/)) {
          const result: YieldItem = {
            type: 'yield',
            zType: /\S*\{(.*?)\}\S*/.exec(item)?.[1] || '',
            preText: /(\S*)\{.*?\}\S*/.exec(item)?.[1] || '',
            afterText: /\S*\{.*?\}(\S*)/.exec(item)?.[1] || '',
            yield: new Yield(/\S*\{(.*?)\}\S*/.exec(item)?.[1] || ''),
          }
          return result
        }
        const result: TextItem = {
          type: 'text',
          text: item,
        }
        return result
      })
    })

    return { items }
  },
})
</script>
<style lang="scss" scoped>
.icon {
  height: 1em;
  width: 1em;
  vertical-align: text-bottom;
}
.v-popper {
  display: inline;
}
</style>

