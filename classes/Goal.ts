import FamilyClassWeight from './FamilyClassWeight'
import textInfo from '~/assets/data/xml/text-infos'

export default class Goal {
  readonly entry: Readonly<XmlGoal.Entry>

  constructor (entry: XmlGoal.Entry) {
    this.entry = entry
  }

  get textInfo () {
    return textInfo.Root.Entry
  }

  get name (): string {
    const test = this.textInfo.find(el => el.zType === this.entry.Name)
    return test ? test.English.toString().split('~')[0] : ''
  }

  get zType (): string {
    return typeof this.entry.zType === 'string' ? this.entry.zType : ''
  }

  get familyClassWeights (): FamilyClassWeight[] {
    const pair = this.entry.aiFamilyClassWeight?.Pair
    if (!pair) { return [] }
    if (Array.isArray(pair)) {
      return pair.map(el => new FamilyClassWeight(el))
    }
    return [new FamilyClassWeight(pair)]
  }
}
