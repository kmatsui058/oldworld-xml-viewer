import improvements from '~/assets/data/xml/improvement'
import improvementText from '~/assets/data/xml/text-improvement'
export default class Improvement {
  readonly entry: XmlImprovement.Entry
  constructor(zType: string | XmlImprovement.ZType) {
    const targetEntry = improvements.Root.Entry.find((entry) => entry.zType === zType)
    if (!targetEntry) throw new Error('invalid zType')
    this.entry = targetEntry
  }

  get nameText(): string | null {
    const textObject = improvementText.Root.Entry.find((test) => test.zType === this.entry.Name)
    return typeof textObject?.['en-US'] === 'string' ? textObject['en-US'] : null
  }

  get name(): string {
    if (!this.nameText) throw new Error('name text not found' + this.entry.zType)
    return this.nameText.split('~')[0]
  }
}
