import { mount } from '@vue/test-utils'
import aiUnitTraitLevel from '@/components/effect-city/i-value/aiUnitTraitLevel.vue'
import effectCity from '~/assets/data/xml/effectCity'
import IValue from '~/classes/IValue'
describe('aiUnitTraitLevel', () => {
  test('負値の動作確認', () => {
    const effectCityItem = effectCity.Root.Entry.find(
      (entry) => entry.aiUnitTraitLevel && 'Pair' in entry.aiUnitTraitLevel
    )
    const pair = effectCityItem?.aiUnitTraitLevel?.Pair
    if (!pair) throw new Error('invalid pair structure' + effectCityItem?.aiUnitTraitLevel)
    const pairs = Array.isArray(pair) ? pair : [pair]
    const iValue = new IValue('aiUnitTraitLevel', pairs)
    pairs[0].iValue = '-10'
    mount(aiUnitTraitLevel, {
      propsData: {
        iValue,
      },
    })
  })
})
