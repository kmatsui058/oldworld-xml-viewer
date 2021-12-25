import { mount } from '@vue/test-utils'
import page from '@/pages/family-class/_zType.vue'
import familyClasssRaw from '~/assets/data/xml/familyClass'

describe('基本動作確認', () => {
  const $route = {
    params: {
      zType: familyClasssRaw.Root.Entry[1].zType,
    },
  }

  test('ページマウント可能か確認', () => {
    mount(page, {
      mocks: {
        $route,
      },
    })
  })
  test('404', () => {
    expect(() => {
      mount(page, {
        mocks: {
          $route: {
            params: {
              zType: 'hoge',
            },
          },
        },
      })
    }).toThrowError(new Error('not found'))
  })
})
