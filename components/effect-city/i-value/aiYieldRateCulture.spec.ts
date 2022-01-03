import { mount } from '@vue/test-utils'
import aiYieldRateCulture from '@/components/effect-city/i-value/aiYieldRateCulture.vue'
import effectCity from '~/assets/data/xml/effectCity'
import IValue from '~/classes/IValue'
describe('aiYieldRateCulture', () => {
  test('負値の動作確認', () => {
    const effectCityItem = effectCity.Root.Entry.find(
      (entry) => entry.aiYieldRateCulture && 'Pair' in entry.aiYieldRateCulture
    )
    const pair = effectCityItem?.aiYieldRateCulture?.Pair
    if (!pair) throw new Error('invalid pair structure' + effectCityItem?.aiYieldRateCulture)
    const pairs = Array.isArray(pair) ? pair : [pair]
    const iValue = new IValue('aiYieldRateCulture', pairs)
    pairs[0].iValue = '-10'
    mount(aiYieldRateCulture, {
      propsData: {
        iValue,
      },
    })
  })
})
