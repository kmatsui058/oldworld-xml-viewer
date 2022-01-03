import { mount } from '@vue/test-utils'
import aiImprovementClassUpgradeTurnChange from '@/components/effect-city/i-value/aiImprovementClassUpgradeTurnChange.vue'
import effectCity from '~/assets/data/xml/effectCity'
import IValue from '~/classes/IValue'
describe('aiImprovementClassUpgradeTurnChange', () => {
  test('正値の動作確認', () => {
    const effectCityItem = effectCity.Root.Entry.find(
      (entry) =>
        entry.aiImprovementClassUpgradeTurnChange &&
        'Pair' in entry.aiImprovementClassUpgradeTurnChange
    )
    const pair = effectCityItem?.aiImprovementClassUpgradeTurnChange?.Pair
    if (!pair)
      throw new Error(
        'invalid pair structure' + effectCityItem?.aiImprovementClassUpgradeTurnChange
      )
    const pairs = Array.isArray(pair) ? pair : [pair]
    pairs[0].iValue = '10'
    const iValue = new IValue('aiImprovementClassUpgradeTurnChange', pairs)
    mount(aiImprovementClassUpgradeTurnChange, {
      propsData: {
        iValue,
      },
    })
  })
})
