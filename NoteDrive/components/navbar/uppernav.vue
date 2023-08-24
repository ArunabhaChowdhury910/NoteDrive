<template>
    <div class="flex  bg-main_heading_background">
        <NuxtLink to="/" class="text-3xl max-md:h-3 text-white font-Inter font-normal p-5">NOTEDRIVE</NuxtLink>  
        <div class="flex justify-end items-center w-full gap-12 max-md:hidden">
            
            <NuxtLink to="/" class="text-xl text-white font-Inter font-normal p-5 hover:text-dark_main_color">About Us</NuxtLink>
            <NuxtLink to="/" class="text-xl text-white font-Inter font-normal p-5 hover:text-dark_main_color">Join Us</NuxtLink>
            <NuxtLink to="/" class="text-xl text-white font-Inter font-normal p-5 hover:text-dark_main_color mr-3">Login</NuxtLink>
        </div>
        <div class="md:hidden w-full left-1.5">
            <Icon name="prime:bars" class="flex ml-321 justify-end cursor-pointer my-3 w-full items-end text-5xl" @click="toggleMenu"/>
            <div v-if="isMenuOpen" class="  w-full justify-start items-start bg-main_heading_background mt-2 p-2">
                <NuxtLink to="/" class="block text-xl text-white font-Inter font-normal p-2 hover:text-dark_main_color">
                About Us</NuxtLink>
                <NuxtLink to="/" class="block text-xl  text-white font-Inter font-normal p-2 hover:text-dark_main_color">
                Join Us</NuxtLink>
                <NuxtLink to="/" class="block text-xl w-full text-left text-white font-Inter font-normal p-2 hover:text-dark_main_color"
                >Login</NuxtLink>
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