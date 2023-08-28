<template>
     <div class=" w-screen flex  justify-between items-center">
        <div class=" space-y-6 lg:flex-row gap-8  lg:gap-20 mx-auto w-fit h-auto flex justify-between items-center rounded-3xl p-5">
            <div class="flex-col w-full h-auto hover:shadow-xl p-6 space-y-6  ">
                <h1 class="text-3xl w-full text-dark_main_color text-Space">{{heading}}</h1>
                <p class="h-auto items-stretch text-xl w-96 text-Space text-white hover:text-black ease-in duration-200">{{para}}</p>
            </div>
        </div>
    </div>


</template>

<style  scoped>
.container-snap::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.container-snap {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

</style>

<script setup lang="ts">
const { heading, para} = defineProps<{
    heading: string,
    para: string
}>();
</script>
