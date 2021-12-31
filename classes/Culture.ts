import cultures from '~/assets/data/xml/culture'
import texts from '~/assets/data/xml/text-infos'
export default class Culture {
  readonly entry: XmlCulture.Entry
  constructor(zType: string | XmlCulture.ZType) {
    const targetEntry = cultures.Root.Entry.find((entry) => entry.zType === zType)
    if (!targetEntry) throw new Error('invalid zType')
    this.entry = targetEntry
  }

  get name(): string | null {
    const textObject = texts.Root.Entry.find((test) => test.zType === this.entry.Name)
    return typeof textObject?.['en-US'] === 'string' ? textObject['en-US'] : null
  }
}
