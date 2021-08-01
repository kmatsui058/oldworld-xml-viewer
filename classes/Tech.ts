import textInfo from '~/assets/data/xml/text-infos'

export default class Tech {
  private readonly textInfo = textInfo.Root.Entry;

  readonly entry: Readonly<XmlTech.Entry>

  constructor (entry: XmlTech.Entry) {
    this.entry = entry
  }

  get name (): string {
    const test = this.textInfo.find(el => el.zType === this.entry.Name)
    return test ? test.English.toString().split('~')[0] : ''
  }

  get zType (): string {
    return typeof this.entry.zType === 'string' ? this.entry.zType : ''
  }
}
