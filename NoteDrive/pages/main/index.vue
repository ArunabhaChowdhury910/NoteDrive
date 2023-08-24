<template>
    <div class="flex">
        <div class="bg-white h-screen w-fit p-1 shadow-lg">
            <ul class="mt-5 space-y-8 p-4 ">
                <li class="hidden">A</li>
                <li><Icon name="prime:plus" class="cursor-pointer my-3 text-3xl border border-dark_main_color "/></li>
                <li><img src="@/assets/svgs/chatgpt.svg" alt="ChatGPT SVG" /></li>
                <li><Icon name="material-symbols:nest-farsight-weather" class="cursor-pointer my-3 text-3xl "/></li>
                <li><Icon name="material-symbols:clock-loader-10" class="cursor-pointer my-3 text-3xl"/></li>
            </ul>
            <ul class="mt-56 w-full h-full flex-col justify-stretch items-end p-4 space-y-8">
                <li><Icon name="material-symbols:account-box" class="cursor-pointer my-3 text-3xl "/></li>
                <li><Icon name="solar:trash-bin-minimalistic-2-bold" class="cursor-pointer my-3 text-3xl "/></li>
            </ul>
        </div>  
        <div class="w-full h-full bg-white">
            <div class="ml-5 py-4 font-Berkshire  p-2 flex gap-32 text-3xl">
                <h1>Notes</h1>
                <h1>Todo-List</h1>
            </div> 
        </div>
        <div class="rounded-lg w-full h-full">

        </div>
    </div>
</template>

<script>
</script>

<style scoped>
</style>