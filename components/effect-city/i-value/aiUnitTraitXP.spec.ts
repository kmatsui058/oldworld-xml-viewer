import { mount } from '@vue/test-utils'
import aiUnitTraitXP from '@/components/effect-city/i-value/aiUnitTraitXP.vue'
import effectCity from '~/assets/data/xml/effectCity'
import IValue from '~/classes/IValue'
describe('aiUnitTraitXP', () => {
  test('負値の動作確認', () => {
    const effectCityItem = effectCity.Root.Entry.find(
      (entry) => entry.aiUnitTraitXP && 'Pair' in entry.aiUnitTraitXP
    )
    const pair = effectCityItem?.aiUnitTraitXP?.Pair
    if (!pair) throw new Error('invalid pair structure' + effectCityItem?.aiUnitTraitXP)
    const pairs = Array.isArray(pair) ? pair : [pair]
    const iValue = new IValue('aiUnitTraitXP', pairs)
    pairs[0].iValue = '-10'
    mount(aiUnitTraitXP, {
      propsData: {
        iValue,
      },
    })
  })
})
