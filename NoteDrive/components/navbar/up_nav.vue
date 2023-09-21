<template>
    <div class="w-full px-3 bg-P_Blue  font-Space flex items-center justify-between text-2xl">
          <NuxtLink to="/main/page_selector" class="cursor-pointer m-2 font-Inter text-Whitish">NOTEDRIVE</NuxtLink>
          
          <NuxtLink class="flex space-x-2 text-Whitish" to="/Outh/Profile">
            <p class="">Hello</p>
            <p>{{ ID }}</p>
          </NuxtLink>          
    </div>
</template>

<script setup>
    import { reactive } from 'vue'
import { supabase } from "/src/lib/supabaseClient";
import { ref } from 'vue';
const { data: { user } } = await supabase.auth.getUser()
let uid = ref(user.id); 
const ID = computed(() => {
    // Check if the UID has at least 5 characters
    if (uid.value.length >= 5) {
      // Extract the first 5 digits from the UID
      return uid.value.slice(0, 5);
    } else {
      return '';
    }
  });
</script>

<style scoped>

</style>