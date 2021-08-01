import textFamily from '~/assets/data/xml/text-family'

export default class Family {
  private readonly textFamily = textFamily.Root.Entry;

  readonly entry: Readonly<XmlFamily.Entry>

  constructor (entry: XmlFamily.Entry) {
    this.entry = entry
  }

  get name (): string {
    const test = this.textFamily.find(el => el.zType === this.entry.Name)
    return test ? test.English.toString().split('~')[0] : ''
  }

  get zType (): string {
    return typeof this.entry.zType === 'string' ? this.entry.zType : ''
  }
}
