import { mount } from '@vue/test-utils'
import aiYieldModifier from '@/components/effect-city/i-value/aiYieldModifier.vue'
import effectCity from '~/assets/data/xml/effectCity'
import IValue from '~/classes/IValue'
describe('aiYieldModifier', () => {
  test('負値の動作確認', () => {
    const effectCityItem = effectCity.Root.Entry.find(
      (entry) => entry.aiYieldModifier && 'Pair' in entry.aiYieldModifier
    )
    const pair = effectCityItem?.aiYieldModifier?.Pair
    if (!pair) throw new Error('invalid pair structure' + effectCityItem?.aiYieldModifier)
    const pairs = Array.isArray(pair) ? pair : [pair]
    const iValue = new IValue('aiYieldModifier', pairs)
    pairs[0].iValue = '-10'
    mount(aiYieldModifier, {
      propsData: {
        iValue,
      },
    })
  })
})
