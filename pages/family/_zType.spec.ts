import { mount } from '@vue/test-utils'
import page from '@/pages/family/_zType.vue'
import familysRaw from '~/assets/data/xml/family'

describe('基本動作確認', () => {
  const $route = {
    params: {
      zType: familysRaw.Root.Entry[1].zType,
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
