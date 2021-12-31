import { mount } from '@vue/test-utils'
import Index from '@/pages/improvementclass/index.vue'
describe('基本動作確認', () => {
  test('ページマウント可能か確認', () => {
    mount(Index)
  })
})
