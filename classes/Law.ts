import Laws from '~/assets/data/xml/law'
import texts from '~/assets/data/xml/text-law'
export default class Law {
  readonly entry: XmlLaw.Entry
  constructor(zType: string | XmlLaw.ZType) {
    const targetEntry = Laws.Root.Entry.find((entry) => entry.zType === zType)
    if (!targetEntry) throw new Error('invalid zType')
    this.entry = targetEntry
  }

  get name(): string | null {
    const textObject = texts.Root.Entry.find((test) => test.zType === this.entry.Name)
    return typeof textObject?.['en-US'] === 'string' ? textObject['en-US'] : null
  }
}
