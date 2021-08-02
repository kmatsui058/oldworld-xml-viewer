import Nation from './Nation'
import textFamily from '~/assets/data/xml/text-family'
import nation from '~/assets/data/xml/nation'

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

  get nation (): Nation {
    const test = nation.Root.Entry.find(entry => entry.zType === this.entry.Nation)
    if (!test) { throw new Error('not found') }
    return new Nation(test)
  }
}
