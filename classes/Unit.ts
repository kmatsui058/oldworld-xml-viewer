import units from '~/assets/data/xml/unit'
import texts from '~/assets/data/xml/text-unit'
export default class Unit {
  readonly entry: XmlUnit.Entry
  constructor(zType: string | XmlUnit.ZType) {
    const targetEntry = units.Root.Entry.find((entry) => entry.zType === zType)
    if (!targetEntry) throw new Error('invalid zType')
    this.entry = targetEntry
  }

  get name(): string | null {
    const textObject = texts.Root.Entry.find((test) => test.zType === this.entry.Name)
    return typeof textObject?.['en-US'] === 'string' ? textObject['en-US'] : null
  }
}
