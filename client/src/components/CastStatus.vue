<template>
  <div class="box">
    <h1 class="title">{{cast.name}}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import Cast from '../store/cast';

@Component({})
export default class CastStatus extends Vue {
  @Prop()
  cast: Cast;
}
</script>
