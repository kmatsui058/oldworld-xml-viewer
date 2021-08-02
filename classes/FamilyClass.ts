import textInfos from '~/assets/data/xml/text-infos'
import goals from '~/assets/data/xml/goal'
import Goal from '~/classes/Goal'

export default class FamilyClass {
  private readonly textInfos = textInfos.Root.Entry;

  readonly entry: Readonly<XmlFamilyClass.Entry>

  constructor (entry: XmlFamilyClass.Entry) {
    this.entry = entry
  }

  get name (): string {
    const test = this.textInfos.find(el => el.zType === this.entry.Name)
    return test ? test.English.toString().split('~')[0] : ''
  }

  get zType (): string {
    return typeof this.entry.zType === 'string' ? this.entry.zType : ''
  }

  get ambitions (): Goal[] {
    return goals.Root.Entry.map((item) => {
      return new Goal(item)
    }).filter(goal => goal.familyClassWeights.find(test => test.familyClass.zType === this.zType))
  }
}
