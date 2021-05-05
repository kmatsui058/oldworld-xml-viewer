<template>
  <section class="section">
    <h2 class="title is-2">
      NATIONS
    </h2>
    <table class="table">
      <thead>
        <tr>
          <th> Name </th>
          <th> Stating Tech </th>
        </tr>
      </thead>
      <tbody>
        <template v-for="item in nations">
          <tr v-if="typeof item.Name === 'string'" :id="item.Name" :key="item.Name">
            <td>{{ getName(item.Name.toString()) }}</td>
            <td>{{ getTech(item.aeStartingTech) }}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { DefaultApi } from '~/api'
import Logo from '~/components/Logo.vue'
import nation from '~/assets/data/xml/nation'
import textNation from '~/assets/data/xml/text-nation'
import law from '~/assets/data/xml/law'
import tech from '~/assets/data/xml/tech'
import textInfo from '~/assets/data/xml/text-infos'
// import name from '~/assets/data/xml/name'
@Component({
  components: {
    Logo
  }
})
export default class Index extends Vue {
  nations = nation.Root.Entry
  textNations = textNation.Root.Entry
  law = law.Root.Entry
  tech = tech.Root.Entry
  textInfo = textInfo.Root.Entry

  getName (key: string): string {
    const test = this.textNations.find(el => el.zType === key)
    return test ? test.English.toString().split('~')[0] : ''
  }

  getTechName (key: string): string {
    const test = this.textInfo.find(el => el.zType === key)
    return test ? test.English.toString().split('~')[0] : ''
  }

  getTech (obj: XmlNation.AeStartingTech): string {
    const result: string[] = []
    const keys = obj.zValue ? obj.zValue : []
    keys.forEach((key) => {
      const test = this.tech.find(el => el.zType === key)
      if (test && typeof test.Name === 'string') { result.push(this.getTechName(test.Name)) }
    })

    return result.join(', ')
  }

  created () {
    new DefaultApi({
      basePath: 'http://localhost:8080/api'
    }).authGoogleRedirectGet()
  }
}
</script>
