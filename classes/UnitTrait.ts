import UnitTraits from '~/assets/data/xml/unitTrait'
import texts from '~/assets/data/xml/text-unitTrait'
export default class UnitTrait {
  readonly entry: XmlUnitTrait.Entry
  constructor(zType: string | XmlUnitTrait.ZType) {
    const targetEntry = UnitTraits.Root.Entry.find((entry) => entry.zType === zType)
    if (!targetEntry) throw new Error('invalid zType')
    this.entry = targetEntry
  }

  get name(): string | null {
    const textObject = texts.Root.Entry.find((test) => test.zType === this.entry.Name)
    return typeof textObject?.['en-US'] === 'string' ? textObject['en-US'] : null
  }
}
