<template>
    <!-- <ButtonCounter></ButtonCounter> 
    <ButtonCounter></ButtonCounter>
    
    <Button-Counter></Button-Counter>
    <hr /> -->
    
    <div style="background-color: orange; padding: 5px">
        This is the root component.
    </div>
    
    <ComponentA></ComponentA>
    <ComponentA></ComponentA>
</template>

<script setup>
//buttons above are two instance of a class called buttoncounter and therefor do not interfer
import ButtonCounter from './ButtonCounter.vue';
import ComponentA from '@/ComponentA.vue';


</script>

<style scoped> </style>