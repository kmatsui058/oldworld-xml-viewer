import missions from '~/assets/data/xml/mission'
import texts from '~/assets/data/xml/text-mission'
export default class Mission {
  readonly entry: XmlMission.Entry
  constructor(zType: string | XmlMission.ZType) {
    const targetEntry = missions.Root.Entry.find((entry) => entry.zType === zType)
    if (!targetEntry) throw new Error('invalid zType')
    this.entry = targetEntry
  }

  get name(): string | null {
    const textObject = texts.Root.Entry.find((test) => test.zType === this.entry.Name)
    return typeof textObject?.['en-US'] === 'string' ? textObject['en-US'] : null
  }
}
