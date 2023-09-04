<template>
  <!-- THIS IS THE WHOLE BODY -->
  <div class="w-full h-screen bg-S_Blue">

    <!-- HEADING -->
     <div class="w-full h-fit fixed bg-P_Blue ">
      <up_nav/> 
      
    </div>

    <!-- MIDDLE -->
    <div class=" p-3 bg-S_Blue pt-16 space-x-1.5 h-full">         
      <!-- MIDDLE PANEL -->
      <textarea name="" id="" class=" bg-P_Blue p-3 text-slate-200 w-full h-full"></textarea>
    </div>

  </div>  
</template>

<script setup lang="ts">
//import { ref } from 'vue';
import up_nav from '/components/navbar/up_nav.vue';

// const data = ref("X");

// const updateData = (newData: string) => {
//   data.value = newData;
// };
</script>

<style scoped>
</style>
