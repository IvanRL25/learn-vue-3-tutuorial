<template>
  <div class="blog-post">
      <p>
          {{ message }}
      </p>
      <!-- display the id, title, and content of a blog post. -->
      <h2>{{ id }} - {{ blogPostTitle }}</h2>
      <div>
          Modify the title:
          <input type="text" v-model="blogPostTitle"></input>
      </div>
      <h4>{{ blogPostContent }}</h4>
      <div>
          Modify the content: 
          <input type="text" v-model="blogPostContent"></input>
      </div>
     <button @click="$emit('delete-blog-post', id)">Delete post 1</button>
     <button @click="emitDeletePostEvent(id)">Delete post 2</button>
  </div>
</template>

<script setup>
import {ref} from 'vue'

let message = ref('This is the BlogPost component.')
defineProps(['id'])
const emit = defineEmits(['delete-blog-post'])

function emitDeletePostEvent(id){
  emit('delete-blog-post', id)
}

let blogPostTitle = defineModel('blogPostTitle')
let blogPostContent = defineModel('blogPostContent') //is a reactive ref object


</script>

<style scoped>
.blog-post{
    background-color: aqua;
    padding: 10px;
    margin-bottom: 10px;
}

input{
    width: 100%;
}
</style>