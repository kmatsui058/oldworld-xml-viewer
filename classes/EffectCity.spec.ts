import effectCities from '~/assets/data/xml/effectCity'
import getSpriteIcons from '~/assets/Sprite/SpriteIcons'

describe('testEffectCity', () => {
  test('aiYield系列はYIELDのアイコンがある', () => {
    effectCities.Root.Entry.forEach((effectCity, index) => {
      if (!index) return
      for (const [key, value] of Object.entries(effectCity)) {
        if (!value) continue
        if (key.includes('aiYield')) {
          expect(value).toHaveProperty('Pair')
          const pair = value.Pair
          if (Array.isArray(pair)) {
            pair.forEach((item) => {
              expect(getSpriteIcons).toHaveProperty(item.zIndex)
            })
          }
        }
      }
    })
  })
})
