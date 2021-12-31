import Vegetations from '~/assets/data/xml/vegetation'
import texts from '~/assets/data/xml/text-infos'
export default class Vegetation {
  readonly entry: XmlVegetation.Entry
  constructor(zType: string | XmlVegetation.ZType) {
    const targetEntry = Vegetations.Root.Entry.find((entry) => entry.zType === zType)
    if (!targetEntry) throw new Error('invalid zType')
    this.entry = targetEntry
  }

  get name(): string | null {
    const textObject = texts.Root.Entry.find((test) => test.zType === this.entry.Name)
    return typeof textObject?.['en-US'] === 'string' ? textObject['en-US'] : null
  }
}
