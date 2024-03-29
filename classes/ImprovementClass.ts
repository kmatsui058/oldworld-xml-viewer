import improvementClasss from '~/assets/data/xml/improvementClass'
import improvementClassText from '~/assets/data/xml/text-improvementClass'
export default class ImprovementClass {
  readonly entry: XmlImprovementClass.Entry
  constructor(zType: string | XmlImprovementClass.ZType) {
    const targetEntry = improvementClasss.Root.Entry.find((entry) => entry.zType === zType)
    if (!targetEntry) throw new Error('invalid zType')
    this.entry = targetEntry
  }

  get nameText(): string | null {
    const textObject = improvementClassText.Root.Entry.find(
      (test) => test.zType === this.entry.Name
    )
    return typeof textObject?.['en-US'] === 'string' ? textObject['en-US'] : null
  }

  get name(): string {
    if (!this.nameText) throw new Error('name text not found' + this.entry.zType)
    return this.nameText.split('~')[0]
  }
}
