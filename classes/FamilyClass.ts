import textInfos from '~/assets/data/xml/text-infos'

export default class FamilyClass {
  private readonly textInfos = textInfos.Root.Entry;

  readonly entry: Readonly<XmlFamilyClass.Entry>

  constructor (entry: XmlFamilyClass.Entry) {
    this.entry = entry
  }

  get name (): string {
    const test = this.textInfos.find(el => el.zType === this.entry.Name)
    return test ? test.English.toString().split('~')[0] : ''
  }

  get zType (): string {
    return typeof this.entry.zType === 'string' ? this.entry.zType : ''
  }
}
