import { mount } from '@vue/test-utils'
import aiYieldRateOpinion from '@/components/effect-city/i-value/aiYieldRateOpinion.vue'
import effectCity from '~/assets/data/xml/effectCity'
import IValue from '~/classes/IValue'
describe('aiYieldRateOpinion', () => {
  test('負値の動作確認', () => {
    const effectCityItem = effectCity.Root.Entry.find(
      (entry) => entry.aiYieldRateOpinion && 'Pair' in entry.aiYieldRateOpinion
    )
    const pair = effectCityItem?.aiYieldRateOpinion?.Pair
    if (!pair) throw new Error('invalid pair structure' + effectCityItem?.aiYieldRateOpinion)
    const pairs = Array.isArray(pair) ? pair : [pair]
    const iValue = new IValue('aiYieldRateOpinion', pairs)
    pairs[0].iValue = '-10'
    mount(aiYieldRateOpinion, {
      propsData: {
        iValue,
      },
    })
  })
})
