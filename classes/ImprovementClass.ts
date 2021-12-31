import improvementClasss from '~/assets/data/xml/improvementClass'
import improvementClassText from '~/assets/data/xml/text-improvementClass'
export default class ImprovementClass {
  readonly entry: XmlImprovementClass.Entry
  constructor(zType: string | XmlImprovementClass.ZType) {
    const targetEntry = improvementClasss.Root.Entry.find((entry) => entry.zType === zType)
    if (!targetEntry) throw new Error('invalid zType')
    this.entry = targetEntry
  }

  get name(): string | null {
    const textObject = improvementClassText.Root.Entry.find(
      (test) => test.zType === this.entry.Name
    )
    return typeof textObject?.['en-US'] === 'string' ? textObject['en-US'] : null
  }
}
