<template>
  
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class View extends Vue 
{
  beforeRouteLeave() {
    console.log("Leaving Page");
  }
}
</script>
