<template>
  <div class="app">
      <Navigation></Navigation>
      <RouterView></RouterView>
  </div>
</template>

<script setup>
import Navigation from "@/components/Navigation.vue";


</script>

<style lang="scss" scoped>
.app{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

</style>