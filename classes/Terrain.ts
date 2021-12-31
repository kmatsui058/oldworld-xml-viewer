import Terrains from '~/assets/data/xml/terrain'
import texts from '~/assets/data/xml/text-infos'
export default class Terrain {
  readonly entry: XmlTerrain.Entry
  constructor(zType: string | XmlTerrain.ZType) {
    const targetEntry = Terrains.Root.Entry.find((entry) => entry.zType === zType)
    if (!targetEntry) throw new Error('invalid zType')
    this.entry = targetEntry
  }

  get name(): string | null {
    const textObject = texts.Root.Entry.find((test) => test.zType === this.entry.Name)
    return typeof textObject?.['en-US'] === 'string' ? textObject['en-US'] : null
  }
}
