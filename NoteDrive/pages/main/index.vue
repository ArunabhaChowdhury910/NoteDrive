<template>
  <div class="  h-screen ">
      <up_nav class="fixed z-40"/>
      <div class="flex h-full">
        <side_nave class="pt-12 fixed w-1/6"/>
        <right_show class="ml-60 pl-10 pt-20 "/>
        
      </div>
  </div>
</template>

<script setup lang="ts">
import side_nave from '/components/navbar/side_nave.vue';
import up_nav from '/components/navbar/up_nav.vue';
import right_show from '/components/right_show.vue';
</script>

<style scoped>

</style>W