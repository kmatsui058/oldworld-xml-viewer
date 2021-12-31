import EffectCity from './EffectCity'
import effectPlayers from '~/assets/data/xml/effectPlayer'

export default class EffectPlayer {
  readonly entry: Readonly<XmlEffectPlayer.Entry>

  constructor(zType: string | XmlEffectPlayer.ZType) {
    const targetEntry = effectPlayers.Root.Entry.find((entry) => entry.zType === zType)
    if (!targetEntry) throw new Error('invalid zType')
    this.entry = targetEntry
  }

  get zType(): string {
    return typeof this.entry.zType === 'string' ? this.entry.zType : ''
  }

  get effectCity(): EffectCity | null {
    return this.entry.EffectCity ? new EffectCity(this.entry.EffectCity) : null
  }
}
