import { mount } from '@vue/test-utils'
import convertedText from '@/components/ConvertedText.vue'

describe('converted text', () => {
  test('存在しないコンポーネントをマウントしたらエラーになる', () => {
    const text = 'link(HOGE_FUGA)'
    try {
      mount(convertedText, {
        propsData: {
          text,
        },
      })
    } catch (error: any) {
      expect(error.message).toMatch(/HOGE/)
    }
  })
})
