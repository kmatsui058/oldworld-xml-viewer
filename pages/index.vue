<template>
  <div class="container">
    <h2 class="title is-2">
      NATIONS
    </h2>
    <table class="table">
      <thead>
        <tr>
          <th> Name </th>
          <th> Stating Law </th>
        </tr>
      </thead>
      <tbody>
        <template v-for="item in nations">
          <tr v-if="typeof item.Name === 'string'" :id="item.Name" :key="item.Name">
            <td>{{ getName(item.Name.toString()) }}</td>
            <td>{{ getLaw(item.aeStartingLaw) }}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Logo from '~/components/Logo.vue'
import nation from '~/assets/data/xml/nation'
import textNation from '~/assets/data/xml/text-nation'
import law from '~/assets/data/xml/law'
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
  getName (key: string): string {
    const test = this.textNations.find(el => el.zType === key)
    return test ? test.English.toString().split('~')[0] : ''
  }

  getLaw (obj: XmlNation.AeStartingLaw): string {
    const key = obj.Pair ? obj.Pair.zValue : ''
    const test = this.law.find(el => el.zType === key)
    return test ? test.zName.toString() : ''
  }
}
</script>
