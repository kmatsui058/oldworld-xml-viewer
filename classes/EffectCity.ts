import IValueModifire from './IValue'

import BValue from './BValue'
import effectCities from '~/assets/data/xml/effectCity'

export default class EffectCity {
  readonly entry: Readonly<XmlEffectCity.Entry>

  constructor(zType: string | XmlEffectCity.ZType) {
    const targetEntry = effectCities.Root.Entry.find((entry) => entry.zType === zType)
    if (!targetEntry) throw new Error('invalid zType')
    this.entry = targetEntry
  }

  get zIndex(): string {
    return typeof this.entry.zType === 'string' ? this.entry.zType : ''
  }

  get name(): string {
    return this.zIndex
  }

  get iValues() {
    const result: IValueModifire[] = []
    for (const [key, value] of Object.entries(this.entry)) {
      if (!value) continue
      if (key.indexOf('ai') === 0 && typeof value !== 'string' && 'Pair' in value) {
        const pair = value.Pair
        if (Array.isArray(pair)) {
          const initPair: XmlEffectCity.Pair[] = []
          for (const item of pair) {
            if ('iValue' in item) initPair.push(item)
          }
          result.push(new IValueModifire(key, initPair))
        }
        if (pair && 'iValue' in pair) result.push(new IValueModifire(key, [pair]))
      }
    }
    return result
  }

  get bValues() {
    const result: BValue[] = []
    for (const [key, value] of Object.entries(this.entry)) {
      if (!value) continue
      if (key.indexOf('ab') === 0 && typeof value !== 'string' && 'Pair' in value) {
        const pair = value.Pair
        if (Array.isArray(pair)) {
          const initPair: XmlEffectCity.Pair2[] = []
          for (const item of pair) {
            if ('bValue' in item) initPair.push(item)
          }
          result.push(new BValue(key, initPair))
        }
        if (pair && 'bValue' in pair) result.push(new BValue(key, [pair]))
      }
    }
    return result
  }

  get freePromotion() {
    return this.entry.aeFreePromotion
  }
}
