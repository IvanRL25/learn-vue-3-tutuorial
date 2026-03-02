<template>
  <h1>{{ message }}</h1>
  <p>
    What has keys but can't open locks, space but no room, and you can enter but
    can't go outside? What am I?
  </p>

  <button style="width: 200px" @click="showAnswer = !showAnswer">
    {{ !showAnswer ? 'Show me the anser!' : 'Hide the asnwer!' }}
  </button>

  
  <div v-if="showAnswer">A keyboard.</div>

  <div v-show="showAnswer">A keyboard.</div>
  <!-- an element with show is always in the tree but has display mode changed when shown-->
  <!-- v-f does not include div into the tree of the page unless it is needed to be shown-->

  <!--<div v-if="Math.random() > 0.5">Now you see me</div>-->
  <!--<div v-else>Now you don't</div>-->
</template>

<script setup>
import { ref } from 'vue'

let message = ref('Hello, v-if!')

let showAnswer = ref(false)

</script>

<style scoped></style>