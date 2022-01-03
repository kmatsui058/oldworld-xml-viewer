<template>
  <ais-instant-search
    :search-client="searchClient"
    index-name="netlify_deec3b89-a661-4692-8e40-70f058b61ed2_master_all"
  >
    <ais-autocomplete :escape-html="false">
      <template #default="{ currentRefinement, indices, refine }">
        <input
          type="search"
          :value="currentRefinement"
          placeholder="Search"
          class="input"
          @input="refine($event.currentTarget.value)"
        />
        <div v-if="currentRefinement" class="dropdown is-active">
          <div v-for="(index, key) in indices" :key="key" class="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <template v-for="hit in index.hits">
                <p :key="'p' + hit.objectID" class="dropdown-item">
                  <nuxt-link :key="hit.objectID" :to="hit.url">
                    <h4>{{ hit.title }}</h4>
                  </nuxt-link>
                  <ais-snippet attribute="content" :hit="hit" />
                </p>

                <hr :key="'hr' + hit.objectID" class="dropdown-divider" />
              </template>
            </div>
          </div>
        </div>
      </template>
    </ais-autocomplete>
  </ais-instant-search>
</template>
<script lang="ts">
import { AisInstantSearch, AisAutocomplete, AisSnippet } from 'vue-instantsearch'
import algoliasearch from 'algoliasearch/lite'
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AlgoliaSearch',
  components: {
    AisInstantSearch,
    AisAutocomplete,
    AisSnippet,
  },
  setup() {
    const searchClient = ref(algoliasearch('2FPA423RX8', 'ad479f6701425e8b2645cf8c34997074'))
    return { searchClient }
  },
})
</script>
