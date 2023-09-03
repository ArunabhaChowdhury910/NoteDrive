<template>
  <!-- NAVBAE -->
  <div class="w-full h-fit max-[367px]:w-fit">
    <up_nav/>
  </div> 
  <!-- MIDDLE CANVAS -->
  <div class="border w-full p-3 bg-S_Blue ">
    <notes/>
  </div>   
</template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  import notes from '/components/cards/notes.vue';
  import todolist from '/components/cards/todolist.vue';
  import up_nav from '/components/navbar/up_nav.vue';
  
  // const data = ref("X");
  
  // const updateData = (newData: string) => {
  //   data.value = newData;
  // };

  

  </script>
  
  <style scoped>
  </style>
  