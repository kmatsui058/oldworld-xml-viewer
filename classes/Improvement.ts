import improvements from '~/assets/data/xml/improvement'
import improvementText from '~/assets/data/xml/text-improvement'
export default class Improvement {
  readonly entry: XmlImprovement.Entry
  constructor(zType: string | XmlImprovement.ZType) {
    const targetEntry = improvements.Root.Entry.find((entry) => entry.zType === zType)
    if (!targetEntry) throw new Error('invalid zType')
    this.entry = targetEntry
  }

  get name(): string | null {
    const textObject = improvementText.Root.Entry.find((test) => test.zType === this.entry.Name)
    return typeof textObject?.['en-US'] === 'string' ? textObject['en-US'] : null
  }
}
