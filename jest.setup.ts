import { config } from '@vue/test-utils'
export default function setup() {
  config.stubs.nuxt = { template: '<div />' }
  config.stubs['nuxt-link'] = { template: '<a><slot /></a>' }
  config.stubs['no-ssr'] = { template: '<span><slot /></span>' }
  config.stubs['font-awesome-icon'] = { template: '<span><slot /></span>' }
}
