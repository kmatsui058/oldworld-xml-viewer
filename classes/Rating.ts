import raitings from '~/assets/data/xml/rating'
import texts from '~/assets/data/xml/text-infos'
export default class Rating {
  readonly entry: XmlRating.Entry
  constructor(zType: string | XmlRating.ZType) {
    const targetEntry = raitings.Root.Entry.find((entry) => entry.zType === zType)
    if (!targetEntry) throw new Error('invalid zType')
    this.entry = targetEntry
  }

  get name(): string | null {
    const textObject = texts.Root.Entry.find((test) => test.zType === this.entry.Name)
    return typeof textObject?.['en-US'] === 'string' ? textObject['en-US'] : null
  }
}
