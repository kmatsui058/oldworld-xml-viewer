import getSpriteIcons from '~/assets/Sprite/SpriteIcons'

export default class Yield {
  readonly key: string
  readonly pair: Readonly<XmlEffectCity.Pair>
  constructor(key: Yield['key'], pair: Yield['pair']) {
    this.key = key
    this.pair = pair
  }

  get icon(): string | null {
    const zIndex = this.pair.zIndex
    return getSpriteIcons[zIndex] || null
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
