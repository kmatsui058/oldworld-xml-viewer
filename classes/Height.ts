import Heights from '~/assets/data/xml/height'
import texts from '~/assets/data/xml/text-infos'
export default class Height {
  readonly entry: XmlHeight.Entry
  constructor(zType: string | XmlHeight.ZType) {
    const targetEntry = Heights.Root.Entry.find((entry) => entry.zType === zType)
    if (!targetEntry) throw new Error('invalid zType')
    this.entry = targetEntry
  }

  get name(): string | null {
    const textObject = texts.Root.Entry.find((test) => test.zType === this.entry.Name)
    return typeof textObject?.['en-US'] === 'string' ? textObject['en-US'] : null
  }
}
