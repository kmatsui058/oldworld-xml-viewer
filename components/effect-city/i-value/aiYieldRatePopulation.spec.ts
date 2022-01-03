import { mount } from '@vue/test-utils'
import aiYieldRatePopulation from '@/components/effect-city/i-value/aiYieldRatePopulation.vue'
import effectCity from '~/assets/data/xml/effectCity'
import IValue from '~/classes/IValue'
describe('aiYieldRatePopulation', () => {
  test('負値の動作確認', () => {
    const effectCityItem = effectCity.Root.Entry.find(
      (entry) => entry.aiYieldRatePopulation && 'Pair' in entry.aiYieldRatePopulation
    )
    const pair = effectCityItem?.aiYieldRatePopulation?.Pair
    if (!pair) throw new Error('invalid pair structure' + effectCityItem?.aiYieldRatePopulation)
    const pairs = Array.isArray(pair) ? pair : [pair]
    const iValue = new IValue('aiYieldRatePopulation', pairs)
    pairs[0].iValue = '-10'
    mount(aiYieldRatePopulation, {
      propsData: {
        iValue,
      },
    })
  })
})
