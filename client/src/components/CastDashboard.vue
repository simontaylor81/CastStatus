<template>
  <div class="columns">
    <div class="column" v-for="cast in store.castSet.casts">
      <cast-status v-bind:cast="cast"></cast-status>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import CastStatus from './CastStatus';
import store from '../store/index';

@Component({
  components: { CastStatus }
})
export default class Hello extends Vue {
  store = store;
}
</script>

<style scoped>
</style>
