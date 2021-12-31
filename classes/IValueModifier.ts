export default class IValueModifire {
  readonly key: string
  readonly pair: Readonly<XmlEffectCity.Pair[]>
  constructor(key: IValueModifire['key'], pair: IValueModifire['pair']) {
    this.key = key
    this.pair = pair
  }
}
