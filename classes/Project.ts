import projects from '~/assets/data/xml/project'
import texts from '~/assets/data/xml/text-project'
export default class Project {
  readonly entry: XmlProject.Entry
  constructor(zType: string | XmlProject.ZType) {
    const targetEntry = projects.Root.Entry.find((entry) => entry.zType === zType)
    if (!targetEntry) throw new Error('invalid zType')
    this.entry = targetEntry
  }

  get name(): string | null {
    const textObject = texts.Root.Entry.find((test) => test.zType === this.entry.Name)
    return typeof textObject?.['en-US'] === 'string' ? textObject['en-US'] : null
  }
}
