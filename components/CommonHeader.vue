<template>
  <nav class="main-nav navbar is-primary">
    <div class="container">
      <div class="navbar-start ">
        <nuxt-link class="navbar-item" to="/">
          <h1 class="title is-5">
            Old World XML Viewer
          </h1>
        </nuxt-link>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            General
          </a>
          <div class="navbar-dropdown is-boxed">
            <GeneralNavigation />
          </div>
        </div>
      </div>
      <span class="navbar-toggle">
        <span />
        <span />
        <span />
      </span>
      <div class="navbar-end navbar-menu">
        <a href="https://github.com/kmatsui058/oldworld-xml-viewer/stargazers" class="navbar-item">
          <img src="https://img.shields.io/github/stars/kmatsui058/oldworld-xml-viewer.svg" alt="GitHub stars">
        </a>
        <a class="navbar-item" href="//github.com/kmatsui058/oldworld-xml-viewer/issues" target="_blank" onclick="ga('send', 'event', 'nav', 'click', 'issue');">
          <font-awesome-icon :icon="['fa', 'bug']" />&nbsp;Report an issue
        </a>
        <a class="navbar-item" href="//github.com/kmatsui058/oldworld-xml-viewer" target="_blank" onclick="ga('send', 'event', 'nav', 'click', 'github');">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a class="navbar-item" href="//twitter.com/km058Okoha" target="_blank" onclick="ga('send', 'event', 'nav', 'click', 'twitter');">
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </a>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import GeneralNavigation from '~/components/navigation/GeneralNavigation.vue'
@Component({ components: { GeneralNavigation } })
export default class CommonHeader extends Vue {
}
</script>
