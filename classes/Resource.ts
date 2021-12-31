import Resources from '~/assets/data/xml/resource'
import texts from '~/assets/data/xml/text-infos'
export default class Resource {
  readonly entry: XmlResource.Entry
  constructor(zType: string | XmlResource.ZType) {
    const targetEntry = Resources.Root.Entry.find((entry) => entry.zType === zType)
    if (!targetEntry) throw new Error('invalid zType')
    this.entry = targetEntry
  }

  get name(): string | null {
    const textObject = texts.Root.Entry.find((test) => test.zType === this.entry.Name)
    return typeof textObject?.['en-US'] === 'string' ? textObject['en-US'] : null
  }
}
