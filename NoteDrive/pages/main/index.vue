<template>
    <!-- THIS IS THE WHOLE BODY -->
    <div class="w-full h-full bg-Whitish">
  
      <!-- HEADING -->
      <div class="w-full h-fit bg-Dark">
        <up_nav/> 
        
      </div>
  
      <!-- MIDDLE -->
      <div class="flex py-3 mx-2 space-x-1.5 h-full flex-grow  ">         
        <!-- MIDDLE PANEL -->

        <div class=" flex rounded-lg border w-9/12 bg-very_light">
          <notes class="h-full"/>
        </div>
        <div class=" rounded-lg border w-full  ">
          <todolist class="h-full"/>
        </div>

      </div>

    </div>  
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  import notes from '/components/cards/notes.vue';
  import todolist from '/components/cards/todolist.vue';
  import up_nav from '/components/navbar/up_nav.vue';
  
  const data = ref("X");
  
  const updateData = (newData: string) => {
    data.value = newData;
  };
  </script>
  
  <style scoped>
  </style>
  