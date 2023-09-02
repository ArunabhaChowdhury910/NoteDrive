<template>
    <!-- THIS IS THE WHOLE BODY -->
    <div class="max-[367px]:w-fit w-full h-screen bg-S_Blue">
  
      <!-- HEADING -->
      <div class=" w-full h-fit">
        <up_nav/> 
        
      </div>
  
      <!-- MIDDLE -->
      <div class="flex py-3 mx-2 space-x-1.5 h-fit flex-grow  ">         
        <!-- MIDDLE PANEL -->

        <!-- <div class=" flex rounded-lg border w-9/12 bg-very_light h-[91.5vh]">
          <notes class="h-full"/>
        </div>
        <div class=" rounded-lg border w-full h-[91.5vh] ">
          <todolist class="h-full"/>
        </div> -->

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
  