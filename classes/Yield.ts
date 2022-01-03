import getSpriteIcons from '~/assets/Sprite/SpriteIcons'
import yields from '~/assets/data/xml/yield'
import yieldText from '~/assets/data/xml/text-yield'
export default class Yield {
  readonly entry: XmlYield.Entry
  constructor(zType: string | XmlYield.ZType) {
    const targetEntry = yields.Root.Entry.find((entry) => entry.zType === zType)
    if (!targetEntry) throw new Error('invalid zType')
    this.entry = targetEntry
  }

  get icon(): string | null {
    const zIndex = this.entry.zIconName
    if (typeof zIndex !== 'string') return null
    return getSpriteIcons[zIndex] || null
  }

  get nameText(): string | null {
    const textObject = yieldText.Root.Entry.find((test) => test.zType === this.entry.Name)
    return typeof textObject?.['en-US'] === 'string' ? textObject['en-US'] : null
  }

  get name(): string {
    if (!this.nameText) throw new Error('name text not found' + this.entry.zType)
    return this.nameText.split('~')[0]
  }

  get helpText(): string | null {
    const textObject = yieldText.Root.Entry.find((test) => test.zType === this.entry.Help)
    return typeof textObject?.['en-US'] === 'string' ? textObject['en-US'] : null
  }
}
