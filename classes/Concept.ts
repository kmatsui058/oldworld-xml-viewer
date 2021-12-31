import concepts from '~/assets/data/xml/concept'
import texts from '~/assets/data/xml/text-infos'
export default class Concept {
  readonly entry: XmlConcept.Entry
  constructor(zType: string | XmlConcept.ZType) {
    const targetEntry = concepts.Root.Entry.find((entry) => entry.zType === zType)
    if (!targetEntry) throw new Error('invalid zType')
    this.entry = targetEntry
  }

  get name(): string | null {
    const textObject = texts.Root.Entry.find((test) => test.zType === this.entry.Name)
    return typeof textObject?.['en-US'] === 'string' ? textObject['en-US'] : null
  }
}
