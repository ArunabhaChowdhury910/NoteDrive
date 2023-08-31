<template>
    <div class="bg-very_light w-screen h-screen ">
        <up_nav/>
        <NuxtLink to="/main">
            <!--There is gonna be some bars as added features-->
            <div class="bg-white m-8 flex justify-center items-center w-48 h-48">
                <div class="m-5 p-5 h-fit w-fit hover:shadow-xl  flex justify-center items-center  bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent rounded-lg hover:bg-gradient-to-l hover:from-blue-500 hover:via-purple-500 hover:to-pink-500">
                    <Icon name="material-symbols:add-box-outline-rounded" class="text-8xl text-white text-center "/>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
import up_nav from '/components/navbar/up_nav.vue';
</script>

<style scoped>

</style>