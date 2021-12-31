import { mount } from '@vue/test-utils'
import popup from '@/components/yield/popup.vue'
import yields from '~/assets/data/xml/yield'

describe('yield popup', () => {
  test('mount', () => {
    const zType = yields.Root.Entry[1].zType
    mount(popup, {
      propsData: {
        zType,
      },
    })
  })
})
