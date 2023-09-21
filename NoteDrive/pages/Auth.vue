<template>
    <div class="text-P_Blue relative flex bg-S_Blue flex-col justify-center min-h-screen w-full overflow-hidden">
    <Uppernav2 class="bg-P_Blue"/>
    <div class="container" >
      <!-- <Account v-if="session" :session="session" /> -->
      <!-- <Reg/> -->
      <Login/>
    </div>
</div>

</template>

<script setup>
    import Reg from '/pages/Outh/Reg.vue';
    import Login from '/pages/Outh/Login.vue';
</script>

<style lang="scss" scoped>

</style>