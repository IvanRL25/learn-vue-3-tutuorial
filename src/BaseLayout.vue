<template>
 <div>
     <header>
         <!-- we want header content here --> 
         <slot name="header"></slot>
     </header>
     <main>
         <!-- we want main content here --> 
         <slot name="main"></slot>
     </main>
     <footer>
         <!-- we want footer content here --> 
         <slot name="footer"></slot>
     </footer>
 </div>
</template>

<script setup>

</script>

<style  scoped>

</style>