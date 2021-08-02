<template>
  <nav class="main-nav navbar is-primary">
    <div class="container">
      <div class="navbar-start ">
        <nuxt-link class="navbar-item" to="/">
          <h1 class="title is-5">
            Bulmaswatch
          </h1>
        </nuxt-link>
        <a class="navbar-item " href="https://jenil.github.io/bulmaswatch/">Home</a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Themes
          </a>
          <div class="navbar-dropdown is-boxed">
            <div class="columns">
              <div class="column">
                <a class="navbar-item is-active" href="https://jenil.github.io/bulmaswatch/default"> Default </a>

                <a class="navbar-item " href="https://jenil.github.io/bulmaswatch/cerulean"> Cerulean </a>

                <a class="navbar-item " href="https://jenil.github.io/bulmaswatch/cosmo"> Cosmo </a>

                <a class="navbar-item " href="https://jenil.github.io/bulmaswatch/cyborg"> Cyborg </a>

                <a class="navbar-item " href="https://jenil.github.io/bulmaswatch/darkly"> Darkly </a>

                <a class="navbar-item " href="https://jenil.github.io/bulmaswatch/flatly"> Flatly </a>

                <a class="navbar-item " href="https://jenil.github.io/bulmaswatch/journal"> Journal </a>

                <a class="navbar-item " href="https://jenil.github.io/bulmaswatch/litera"> Litera </a>

                <a class="navbar-item " href="https://jenil.github.io/bulmaswatch/lumen"> Lumen </a>

                <a class="navbar-item " href="https://jenil.github.io/bulmaswatch/lux"> Lux </a>

                <a class="navbar-item " href="https://jenil.github.io/bulmaswatch/materia"> Materia </a>
              </div>
              <div class="column">
                <a class="navbar-item " href="https://jenil.github.io/bulmaswatch/minty"> Minty </a>

                <a class="navbar-item " href="https://jenil.github.io/bulmaswatch/nuclear"> Nuclear </a>

                <a class="navbar-item " href="https://jenil.github.io/bulmaswatch/pulse"> Pulse </a>

                <a class="navbar-item " href="https://jenil.github.io/bulmaswatch/sandstone"> Sandstone </a>

                <a class="navbar-item " href="https://jenil.github.io/bulmaswatch/simplex"> Simplex </a>

                <a class="navbar-item " href="https://jenil.github.io/bulmaswatch/slate"> Slate </a>

                <a class="navbar-item " href="https://jenil.github.io/bulmaswatch/solar"> Solar </a>

                <a class="navbar-item " href="https://jenil.github.io/bulmaswatch/spacelab"> Spacelab </a>

                <a class="navbar-item " href="https://jenil.github.io/bulmaswatch/superhero"> Superhero </a>

                <a class="navbar-item " href="https://jenil.github.io/bulmaswatch/united"> United </a>

                <a class="navbar-item " href="https://jenil.github.io/bulmaswatch/yeti"> Yeti </a>
              </div>
            </div>
          </div>
        </div>
        <a class="navbar-item " href="https://jenil.github.io/bulmaswatch/help/">Help</a>
      </div>
      <span class="navbar-toggle">
        <span />
        <span />
        <span />
      </span>
      <div class="navbar-end navbar-menu">
        <a href="https://github.com/jenil/bulmaswatch/stargazers" class="navbar-item">
          <img src="https://img.shields.io/github/stars/jenil/bulmaswatch.svg" alt="GitHub stars">
        </a>
        <a class="navbar-item" href="//github.com/jenil/bulmaswatch/issues" target="_blank" onclick="ga('send', 'event', 'nav', 'click', 'issue');">
          <i class="fa fa-bug" />&nbsp;Report an issue
        </a>
        <a class="navbar-item" href="//github.com/jenil/bulmaswatch" target="_blank" onclick="ga('send', 'event', 'nav', 'click', 'github');">
          <span class="icon"> <i class="fab fa-github" /> </span>
        </a>
        <a class="navbar-item" href="//twitter.com/geekGogari" target="_blank" onclick="ga('send', 'event', 'nav', 'click', 'twitter');">
          <span class="icon"> <i class="fab fa-twitter" /> </span>
        </a>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component
export default class CommonHeader extends Vue {
}
</script>
