<template>
  <p>
    <template v-for="(item, key) in items">
      <nuxt-link
        v-if="item.type === 'link'"
        :key="key"
        :to="{ name: item.name, hash: '#' + item.hash }"
      >
        {{ item.text.toLowerCase() }}
      </nuxt-link>
      <nuxt-link
        v-else-if="item.type === 'yield'"
        :key="key"
        :to="{ name: 'yield', hash: '#' + item.zType }"
      >
        {{ item.preText }}
        <YieldIcon :key="key" :z-type="item.zType" />
        {{ item.afterText }}
      </nuxt-link>
      <span v-else-if="item.type === 'text'" :key="key">
        {{ item.text }}
      </span>
    </template>
  </p>
</template>
<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import YieldIcon from '~/components/yeild/icon.vue'
export interface LinkItem {
  type: 'link'
  name: string
  hash: string
  text: string
}

export interface YieldItem {
  type: 'yield'
  zType: string
  preText: string
  afterText: string
}

export interface TextItem {
  type: 'text'
  text: string
}

export type ConvertedTextItem = LinkItem | YieldItem | TextItem

export default defineComponent({
  name: 'ConvertedText',
  components: { YieldIcon },
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const items = computed((): ConvertedTextItem[] => {
      const items = props.text.split(/(link\(.*?\))|(\S*\{.*?\}\S*)/).filter(Boolean)
      return items.map((item) => {
        if (item.match(/link\(.*?\)/)) {
          const result: LinkItem = {
            type: 'link',
            name: /link\((.*?)\)/.exec(item)?.[1].split('_')[0].toLowerCase() || '',
            hash: /link\((.*?)\)/.exec(item)?.[1] || '',
            text: /link\((.*?)\)/.exec(item)?.[1].split(/,|_/)[1] || '',
          }
          return result
        }
        if (item.match(/\S*\{.*?\}\S*/)) {
          const result: YieldItem = {
            type: 'yield',
            zType: /\S*\{(.*?)\}\S*/.exec(item)?.[1] || '',
            preText: /(\S*)\{.*?\}\S*/.exec(item)?.[1] || '',
            afterText: /\S*\{.*?\}(\S*)/.exec(item)?.[1] || '',
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

</style>

