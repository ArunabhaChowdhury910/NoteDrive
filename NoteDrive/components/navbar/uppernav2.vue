<template>
    <div class="p-1 w-full">
        <div class="flex">
            <NuxtLink to="/" class="text-3xl max-md:h-3 text-white font-Inter font-normal p-5">NOTEDRIVE</NuxtLink>  
            <div class="md:hidden flex justify-end w-full px-5">
                <Icon name="prime:bars" class=" text-white cursor-pointer my-3 items-end text-5xl" @click="toggleMenu"/>
            </div>
            <div class="flex justify-end items-center w-full gap-12 max-md:hidden">
                
                <NuxtLink to="/" class="text-xl text-white font-Inter font-normal p-5 hover:text-Orange">About Us</NuxtLink>
                <NuxtLink to="/AboutUs" class="text-xl text-white font-Inter font-normal p-5 hover:text-Orange">Join Us</NuxtLink>
                <NuxtLink to="/Auth" class="text-xl text-white font-Inter font-normal p-5 hover:text-Orange mr-3">Login</NuxtLink>
            </div>
        </div>
        <div class="md:hidden w-full left-1.5">
            
            <div v-if="isMenuOpen" class=" w-full flex-col justify-start items-start bg-main_heading_background mt-2 p-2">
                <div class="flex-col justify-start w-full">
                    <NuxtLink to="/" class="block text-xl text-white font-Inter font-normal p-2 hover:text-dark_main_color">
                    About Us</NuxtLink>
                    <NuxtLink to="/" class="block text-xl  text-white font-Inter font-normal p-2 hover:text-dark_main_color">
                    Join Us</NuxtLink>
                    <NuxtLink to="/Auth" class="block text-xl text-left text-white font-Inter font-normal p-2 hover:text-dark_main_color"
                    >Login</NuxtLink>
                </div>
            </div>
</div>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>

</style>