import units from '~/assets/data/xml/unit'
import texts from '~/assets/data/xml/text-unit'
export default class Unit {
  readonly entry: XmlUnit.Entry
  constructor(zType: string | XmlUnit.ZType) {
    const targetEntry = units.Root.Entry.find((entry) => entry.zType === zType)
    if (!targetEntry) throw new Error('invalid zType')
    this.entry = targetEntry
  }

  get nameText(): string | null {
    const textObject = texts.Root.Entry.find((test) => test.zType === this.entry.Name)
    return typeof textObject?.['en-US'] === 'string' ? textObject['en-US'] : null
  }

  get name(): string {
    if (!this.nameText) throw new Error('name text not found' + this.entry.zType)
    return this.nameText.split('~')[0]
  }

  get singularName(): string {
    if (!this.nameText) throw new Error('name text not found' + this.entry.zType)
    return this.nameText.split('~')[1]
  }

  get pluralName(): string {
    if (!this.nameText) throw new Error('name text not found' + this.entry.zType)
    return this.nameText.split('~')[2]
  }

  get names(): string[] {
    if (!this.nameText) throw new Error('name text not found' + this.entry.zType)
    return this.nameText.split('~')
  }
}
