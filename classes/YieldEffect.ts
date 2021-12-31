export default class YieldEffect {
  readonly key: string
  readonly pair: Readonly<XmlEffectCity.Pair>
  constructor(key: YieldEffect['key'], pair: YieldEffect['pair']) {
    this.key = key
    this.pair = pair
  }

  get unit(): string {
    return this.key.includes('Modifier') ? '%' : ' / Turn'
  }

  get text(): string {
    const value = this.key.includes('Modifier')
      ? Number(this.pair.iValue)
      : Number(this.pair.iValue) / 10
    const sign = value >= 0 ? '+' : '-'
    return sign + value + this.unit
  }
}
