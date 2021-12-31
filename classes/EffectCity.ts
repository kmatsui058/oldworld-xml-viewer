import YieldEffect from './YieldEffect'
import IValueModifire from './IValueModifier'

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

  get yields(): YieldEffect[] {
    const result: YieldEffect[] = []
    for (const [key, value] of Object.entries(this.entry)) {
      if (!value) continue
      if (key.includes('aiYield') && typeof value !== 'string' && 'Pair' in value) {
        const pair = value.Pair
        if (Array.isArray(pair)) {
          for (const item of pair) {
            if ('iValue' in item) {
              result.push(new YieldEffect(key, item))
            }
          }
        }
        if (pair && 'iValue' in pair) {
          result.push(new YieldEffect(key, pair))
        }
      }
    }
    return result
  }

  get iValueModifiers() {
    const result: IValueModifire[] = []
    for (const [key, value] of Object.entries(this.entry)) {
      if (!value) continue
      if (
        !key.includes('aiYield') &&
        key.indexOf('ai') === 0 &&
        typeof value !== 'string' &&
        'Pair' in value
      ) {
        const pair = value.Pair
        if (Array.isArray(pair)) {
          const initPair: XmlEffectCity.Pair[] = []
          for (const item of pair) {
            if ('iValue' in item) initPair.push(item)
          }
          result.push(new IValueModifire(key, initPair))
        }
      }
    }
    return result
  }

  get freePromotion() {
    return this.entry.aeFreePromotion
  }
}
