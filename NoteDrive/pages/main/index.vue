<template>
    <!-- THIS IS THE WHOLE BODY -->
    <div class="w-full h-full bg-Whitish">
  
      <!-- HEADING -->
      <div class="w-full h-fit bg-Dark">
        <div class="w-full px-3  font-Space flex items-center justify-between text-2xl">
          <NuxtLink to="/" class="cursor-pointer m-2 font-Inter text-Whitish">NOTEDRIVE</NuxtLink>
          
          <div class="flex space-x-2 text-Whitish">
            <p class="">Hello</p>
            <p>User_001</p>
          </div>
        </div> 
        <!-- <div class="flex p-1.5 bg-Light_Purple text-Charcoal_Gray">
          <ul class="items-center ml-3 justify-between gap-36 flex">
            <li @click="updateData('A')" class="cursor-pointer">File</li>
            <li @click="updateData('B')" class="cursor-pointer">Home</li>
            <li @click="updateData('C')" class="cursor-pointer">Insert</li>
            <li @click="updateData('D')" class="cursor-pointer">Draw</li>
            <li @click="updateData('E')" class="cursor-pointer">Time</li>
            <li @click="updateData('F')" class="cursor-pointer">Weather</li>
            <li @click="updateData('G')" class="cursor-pointer">ChatGpt</li>
          </ul>
        </div> -->
      </div>
  
      <!-- RIM UPPER -->
      <!-- <div class="flex justify-start items-center bg-halka_pink ">
        <ul v-if="data === 'A'" class="items-center justify-items-stretch  gap-24 w-fit flex px-5">
          <li class="cursor-pointer">Workspace</li>
          <li class="cursor-pointer">New</li>
          <li class="cursor-pointer">Open</li>
          <li class="cursor-pointer">Print</li>
          <li class="cursor-pointer">Save</li>
          <li class="cursor-pointer">Recent</li>
          <li class="cursor-pointer">Export As</li>
        </ul>
        <ul v-if="data === 'B'" class="items-center justify-items-stretch  gap-24 w-fit flex px-5">
          <li class="cursor-pointer">Paste</li>
          <li class="cursor-pointer">New</li>
          <li class="cursor-pointer">Open</li>
          <li class="cursor-pointer">Print</li>
          <li class="cursor-pointer">Save</li>
          <li class="cursor-pointer">Recent</li>
          <li class="cursor-pointer">Export As</li>
        </ul>
        <ul v-if="data === 'C'" class="items-center justify-items-stretch  gap-24 w-fit flex px-5">
          <li class="cursor-pointer">Picture</li>
          <li class="cursor-pointer">New</li>
          <li class="cursor-pointer">Open</li>
          <li class="cursor-pointer">Print</li>
          <li class="cursor-pointer">Save</li>
          <li class="cursor-pointer">Recent</li>
          <li class="cursor-pointer">Export As</li>
        </ul>
        <ul v-if="data === 'D'" class="items-center justify-items-stretch  gap-24 w-fit flex px-5">
          <li class="cursor-pointer">Pen</li>
          <li class="cursor-pointer">New</li>
          <li class="cursor-pointer">Open</li>
          <li class="cursor-pointer">Print</li>
          <li class="cursor-pointer">Save</li>
          <li class="cursor-pointer">Recent</li>
          <li class="cursor-pointer">Export As</li>
        </ul>
      </div> -->
      
      <!-- MIDDLE -->
      <div class="flex py-3 mx-2 space-x-1.5 ">         
        <!-- MIDDLE PANEL -->

        <div class="flex justify-center rounded-lg border w-9/12 h-full bg-very_light">
          <notes/>
        </div>
        <div class="flex justify-center rounded-lg border w-full h-screen ">
          <todolist/>
        </div>

        <!-- <div v-if="data === 'M'" class="flex justify-center rounded-lg border w-screen h-screen bg-sub_background">
          <notes/>
        </div>
        <div v-if="data === 'N'" class="flex justify-center rounded-lg border w-screen h-screen bg-sub_background">
            <todolist/>
        </div> -->
      </div>
    </div>  
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  import notes from '/components/cards/notes.vue';
  import todolist from '/components/cards/todolist.vue';
  
  
  const data = ref("X");
  
  const updateData = (newData: string) => {
    data.value = newData;
  };
  </script>
  
  <style scoped>
  </style>
  