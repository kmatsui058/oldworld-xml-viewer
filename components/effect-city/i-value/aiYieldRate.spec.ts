import { mount } from '@vue/test-utils'
import aiYieldRate from '@/components/effect-city/i-value/aiYieldRate.vue'
import effectCity from '~/assets/data/xml/effectCity'
import IValue from '~/classes/IValue'
describe('aiYieldRate', () => {
  test('負値の動作確認', () => {
    const effectCityItem = effectCity.Root.Entry.find(
      (entry) => entry.aiYieldRate && 'Pair' in entry.aiYieldRate
    )
    const pair = effectCityItem?.aiYieldRate?.Pair
    if (!pair) throw new Error('invalid pair structure' + effectCityItem?.aiYieldRate)
    const pairs = Array.isArray(pair) ? pair : [pair]
    const iValue = new IValue('aiYieldRate', pairs)
    pairs[0].iValue = '-10'
    mount(aiYieldRate, {
      propsData: {
        iValue,
      },
    })
  })
})
