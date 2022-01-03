import { mount } from '@vue/test-utils'
import aiYieldRateSpecialist from '@/components/effect-city/i-value/aiYieldRateSpecialist.vue'
import effectCity from '~/assets/data/xml/effectCity'
import IValue from '~/classes/IValue'
describe('aiYieldRateSpecialist', () => {
  test('負値の動作確認', () => {
    const effectCityItem = effectCity.Root.Entry.find(
      (entry) => entry.aiYieldRateSpecialist && 'Pair' in entry.aiYieldRateSpecialist
    )
    const pair = effectCityItem?.aiYieldRateSpecialist?.Pair
    if (!pair) throw new Error('invalid pair structure' + effectCityItem?.aiYieldRateSpecialist)
    const pairs = Array.isArray(pair) ? pair : [pair]
    const iValue = new IValue('aiYieldRateSpecialist', pairs)
    pairs[0].iValue = '-10'
    mount(aiYieldRateSpecialist, {
      propsData: {
        iValue,
      },
    })
  })
})
