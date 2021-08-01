<template>
  <section class="section">
    <h2 class="title is-2">
      FAMILIES
    </h2>
    <table class="table">
      <thead>
        <tr>
          <th> Name </th>
        </tr>
      </thead>
      <tbody>
        <template v-for="item in families">
          <tr
            v-if="typeof item.Name === 'string'"
            :id="item.Name"
            :key="item.Name"
          >
            <td>{{ getName(item.Name.toString()) }}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Logo from '~/components/Logo.vue'
import nation from '~/assets/data/xml/nation'
import families from '~/assets/data/xml/family'
import textNation from '~/assets/data/xml/text-nation'
import law from '~/assets/data/xml/law'
import tech from '~/assets/data/xml/tech'
import textInfo from '~/assets/data/xml/text-infos'
import textFamily from '~/assets/data/xml/text-family'

// import name from '~/assets/data/xml/name'
@Component({
  components: {
    Logo
  }
})
export default class Index extends Vue {
  nations = nation.Root.Entry;
  textNations = textNation.Root.Entry;
  law = law.Root.Entry;
  tech = tech.Root.Entry;
  textInfo = textInfo.Root.Entry;
  textFamily = textFamily.Root.Entry;
  families = families.Root.Entry;

  getName (key: string): string {
    const test = this.textFamily.find(el => el.zType === key)
    return test ? test.English.toString().split('~')[0] : ''
  }
}
</script>
