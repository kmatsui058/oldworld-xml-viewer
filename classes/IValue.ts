export default class IValue {
  readonly key: string
  readonly pair: Readonly<XmlEffectCity.Pair[]>
  constructor(key: IValue['key'], pair: IValue['pair']) {
    this.key = key
    this.pair = pair
  }
}
