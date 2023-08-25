<template>
    <!-- THIS IS THE WHOLE BODY -->
    <div class=" w-screen h-screen bg-white">

        <!-- HEADING -->
        <div class="w-full h-fit bg-white">
            <div class="w-full px-3  font-Berkshire flex items-center justify-between text-2xl">
                <h1 class="m-2">NOTES</h1>
                <div class="flex space-x-5">
                    <p class="">Hello</p>
                    <p>User_001</p>
                </div>
            </div> 
            <div class="flex p-1.5">
                <ul class="items-center ml-3 justify-between gap-36 flex">
                    <li class="cursor-pointer">File</li>
                    <li class="cursor-pointer">Home</li>
                    <li class="cursor-pointer">Insert</li>
                    <li class="cursor-pointer">Draw</li>
                    <li class="cursor-pointer">Time</li>
                    <li class="cursor-pointer">Weather</li>
                    <li class="cursor-pointer">ChatGpt</li>
                </ul>
            </div>
        </div>

        <!-- MIDDLE -->
        <div class="flex py-3 px-3">

            

            <!-- MIDDLE PANNEL -->
            <div class="flex justify-center rounded-lg border w-full h-screen bg-sub_background">
                <notes/>
            </div>
            
            
        </div>
        
    </div>  



</template>

<script setup lang="ts">
    import notes from '/components/cards/notes.vue';
</script>

<style scoped>
</style>