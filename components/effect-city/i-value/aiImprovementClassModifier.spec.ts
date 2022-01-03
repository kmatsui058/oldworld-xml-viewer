import { mount } from '@vue/test-utils'
import aiImprovementClassModifier from '@/components/effect-city/i-value/aiImprovementClassModifier.vue'
import effectCity from '~/assets/data/xml/effectCity'
import IValue from '~/classes/IValue'
describe('aiImprovementClassModifier', () => {
  test('負値の動作確認', () => {
    const effectCityItem = effectCity.Root.Entry.find(
      (entry) => entry.aiImprovementClassModifier && 'Pair' in entry.aiImprovementClassModifier
    )
    const pair = effectCityItem?.aiImprovementClassModifier?.Pair
    if (!pair)
      throw new Error('invalid pair structure' + effectCityItem?.aiImprovementClassModifier)
    const pairs = Array.isArray(pair) ? pair : [pair]
    pairs[0].iValue = '-10'
    const iValue = new IValue('aiImprovementClassModifier', pairs)
    mount(aiImprovementClassModifier, {
      propsData: {
        iValue,
      },
    })
  })
})
