<template>
    <div class=" p-1 h-full w-fit pr-24 md:pr-24 max-[200px]:w-1/11 space-y-8 bg-slate-200 ">
        <div class="h-[1px]"></div>
        <ul class="flex-col space-y-2 p-3 text-Orange">
            <li class="font-semibold flex items-center cursor-pointer"><Icon name="ic:sharp-home" class=" text-P_Blue mr-1 flex text-2xl items-center"></Icon>ACCOUNT</li>
            <li class=" flex items-center cursor-pointer"><Icon name="solar:add-circle-bold-duotone" class=" text-P_Blue mr-1 flex text-2xl items-center"></Icon>NEW PAGE</li>
            <li class=" flex items-center cursor-pointer"><Icon name="ph:magnifying-glass-duotone" class=" text-P_Blue mr-2 flex text-xl items-center"></Icon>SEARCH</li>
            <li class=" flex items-center cursor-pointer"><Icon name="material-symbols:settings" class=" text-P_Blue mr-1 flex text-2xl items-center"></Icon>SETTINGS</li>
            <li class=" flex items-center cursor-pointer"><Icon name="material-symbols:arrows-outward-rounded" class=" text-P_Blue mr-1 flex text-2xl items-center"></Icon>ARROWS</li>
        </ul>
        
        <ul class="flex-col space-y-4 p-3 text-Orange">
            <div class="bg-P_Blue w-full h-[1px]"></div>
            <li class="cursor-pointer" ><Icon name="solar:book-2-bold-duotone" class="text-P_Blue mr-1 flex text-2xl items-center" ></Icon>NOTES</li>
            <li class="cursor-pointer" ><Icon name="ic:twotone-notifications-active" class="text-P_Blue mr-1 flex text-2xl items-center" ></Icon>REMINDERS</li>
            <li class="cursor-pointer"><Icon name="ri:openai-line" class="text-P_Blue mr-1 flex text-2xl items-center"></Icon>CHAT</li>
            <li class="cursor-pointer"><Icon name="fluent:weather-sunny-48-filled" class="text-P_Blue mr-1 flex text-2xl items-center" ></Icon>WEATHER</li>
            <li class="cursor-pointer"><Icon name="ic:round-access-time-filled" class="text-P_Blue mr-2 flex text-xl items-center"></Icon>TIME</li>
            <!-- <li class="cursor-pointer"><Icon name="ic:round-access-time-filled" class="text-P_Blue mr-2 flex text-xl items-center" @click="changeData('T')"></Icon>TIME</li> -->
            
        </ul>
    </div>
    
</template>

<script setup >
    import { ref } from 'vue';

// const data = ref('X'); // Initialize data with an empty string

// const { store } = useStore(); // Access the Vuex store

//   const changeData = (newValue) => {
//     store.commit('setData', newValue); // Update the data variable using Vuex
//   };


</script>

<style scoped>

</style>