<template>
  <div id="app">
    <section class="hero is-light is-bold is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <img src="./assets/logo.png">
          <hello></hello>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Hello from './components/Hello';

@Component({
  components: { Hello }
})
export default class App extends Vue {
}
</script>

<style lang="scss">
@import "~bulma/bulma";
html {
  overflow-y: hidden;
}
</style>
