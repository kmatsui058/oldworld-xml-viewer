import { mount } from '@vue/test-utils'
import page from '@/pages/nation/_zType.vue'
import nationsRaw from '~/assets/data/xml/nation'

describe('基本動作確認', () => {
  const $route = {
    params: {
      zType: nationsRaw.Root.Entry[1].zType,
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
          $meta: {
            title: '',
          },
        },
      })
    }).toThrowError()
  })
})
