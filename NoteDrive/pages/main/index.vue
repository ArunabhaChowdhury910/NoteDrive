<template>
  <div class=" h-screen flex">
      <up_nav class=" fixed z-40"/>
      <!-- This is the left pannel part -->
      <div class="w-fit h-full max-[200px]:w-1/11">
        <div class="w-fit pt-4 pr-20 space-y-8  p-1 h-full  md:pr-24 max-[200px]:w-1/11  bg-slate-200 ">
        <ul class="flex-col space-y-4 p-3 mt-10  text-Orange">
            <li class="font-semibold flex items-center cursor-pointer"><Icon name="ic:sharp-home" class=" text-P_Blue mr-1 flex text-2xl items-center"></Icon>ACCOUNT</li>
            <li class=" flex items-center cursor-pointer"><Icon name="solar:add-circle-bold-duotone" class=" text-P_Blue mr-1 flex text-2xl items-center"></Icon>NEW PAGE</li>
            <li class=" flex items-center cursor-pointer"><Icon name="ph:magnifying-glass-duotone" class=" text-P_Blue mr-2 flex text-xl items-center"></Icon>SEARCH</li>
            <li class=" flex items-center cursor-pointer"><Icon name="material-symbols:settings" class=" text-P_Blue mr-1 flex text-2xl items-center"></Icon>SETTINGS</li>
            <li class=" flex items-center cursor-pointer"><Icon name="material-symbols:arrows-outward-rounded" class=" text-P_Blue mr-1 flex text-2xl items-center"></Icon>ARROWS</li>
        </ul>
        <div class="bg-P_Blue ml-2 w-full h-[1px]"></div>
        <ul class="flex-col space-y-4 p-3 text-Orange">
            <li class="cursor-pointer" @click="setParseData('N')"><Icon name="solar:book-2-bold-duotone" class="text-P_Blue mr-1 flex text-2xl items-center" ></Icon>NOTES</li>
            <li class="cursor-pointer flex" @click="setParseData('R')"><Icon name="ic:twotone-notifications-active" class="text-P_Blue mr-1 flex text-2xl items-center" ></Icon>REMINDERS</li>
            <li class="cursor-pointer"><Icon name="ri:openai-line" class="text-P_Blue mr-1 flex text-2xl items-center"></Icon>CHAT</li>
            <li class="cursor-pointer"><Icon name="fluent:weather-sunny-48-filled" class="text-P_Blue mr-1 flex text-2xl items-center" ></Icon>WEATHER</li>
            <li class="cursor-pointer"><Icon name="ic:round-access-time-filled" class="text-P_Blue mr-2 flex text-xl items-center"></Icon>TIME</li>
        </ul>
      </div>

      </div>
      
      <!-- THIS IS THE RIGHT PANNEL PART -->
      <div class="w-full h-full pt-10">
        
            <todolist v-if="datapass==='R'"/>
          
          
            <notes_view v-if="datapass==='N'"/>
          
      </div>
  </div>
</template>

<script setup>
import side_nave from '/components/navbar/side_nave.vue';
import up_nav from '/components/navbar/up_nav.vue';
import right_show from '/components/right_show.vue';
import notes_view from '/components/options/notes_view.vue';
import todolist from '/components/options/todolist.vue'

// Define a ref variable for datapass
const datapass = ref('');

// Function to set datapass based on the parameter
const setParseData = (value) => {
  datapass.value = value;
};
</script>

<style scoped>

</style>