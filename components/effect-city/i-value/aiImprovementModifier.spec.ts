import { mount } from '@vue/test-utils'
import aiImprovementModifier from '@/components/effect-city/i-value/aiImprovementModifier.vue'
import effectCity from '~/assets/data/xml/effectCity'
import IValue from '~/classes/IValue'
describe('aiImprovementModifier', () => {
  test('負値の動作確認', () => {
    const effectCityItem = effectCity.Root.Entry.find(
      (entry) => entry.aiImprovementModifier && 'Pair' in entry.aiImprovementModifier
    )
    const pair = effectCityItem?.aiImprovementModifier?.Pair
    if (!pair) throw new Error('invalid pair structure' + effectCityItem?.aiImprovementModifier)
    const pairs = Array.isArray(pair) ? pair : [pair]
    pairs[0].iValue = '-10'
    const iValue = new IValue('aiImprovementModifier', pairs)
    mount(aiImprovementModifier, {
      propsData: {
        iValue,
      },
    })
  })
})
