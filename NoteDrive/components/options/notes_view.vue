<template>
    <div class="w-full p-5 min-h-full bg-S_Blue space-y-3">
        <div class="flex">
            <div class="h-32 w-32 bg-slate-200 flex items-center justify-center text-9xl text-P_Blue cursor-pointer rounded-lg">
                <nuxt-link @click="count">+</nuxt-link>
            </div>
        </div >
        <div class="bg-P_Blue w-full h-[1.5px]"></div>
        <div id="looping" v-for="index in data" :key="index" class="flex w-full">
            <div class="  hover:z-30 space-x-10 flex ">
                    <notes_details/>
    
            </div>
        </div>
    </div>
</template>

<script setup>
import notes_details from '/components/cards/notes_details.vue'

const data = ref(1); // Initialize data with an empty string

const count = () =>{
    data.value++;
}

</script>

<style lang="scss" scoped>

</style>