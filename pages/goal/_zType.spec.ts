import { mount } from '@vue/test-utils'
import page from '@/pages/goal/_zType.vue'
import goalsRaw from '~/assets/data/xml/goal'

describe('基本動作確認', () => {
  const $route = {
    params: {
      zType: goalsRaw.Root.Entry[1].zType,
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
    }).toThrowError()
  })
})
