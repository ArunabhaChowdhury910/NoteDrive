<template>
    <div class="w-full px-3 bg-P_Blue  font-Space flex items-center justify-between text-2xl">
      
        <NuxtLink to="/" class="cursor-pointer m-2 font-Inter text-Whitish">NOTEDRIVE</NuxtLink>
          
          <button @click="handleLogout" class="text-white">LOGOUT</button>
          <div>
            <NuxtLink class="flex space-x-2 text-Whitish" to="/Outh/Profile">
              <p class="">Hello</p>
              <p v-if="name">{{ name }}</p>
              <p v-if="!name">{{ ID }}</p>
            </NuxtLink>          
          </div>
    </div>
</template>

<script setup>
    import { reactive } from 'vue'
import { supabase } from "/src/lib/supabaseClient";
import { ref } from 'vue';
const { data: { user } } = await supabase.auth.getUser()
let uid = ref(user.id); 

const name = ref('');

onMounted(async () => {
  
let { data, error } = await supabase
  .from('profiles')
  .select('username');

    

  if (error) {
    console.error(error);
  } else {
    // data.value = fetchData;
    // console.log(data[0].username)
    name.value = data[0].username;
    
  }
});


const ID = computed(() => {
    // Check if the UID has at least 5 characters
    if (uid.value.length >= 5) {
      // Extract the first 5 digits from the UID
      return uid.value.slice(0, 5);
    } else {
      return '';
    }
  });

  const handleLogout = async () => {
  try {
    
    
    
let { error } = await supabase.auth.signOut()

    
    if (error) throw error
    alert('Signed Out')
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message)
    }
  } finally {  
    loading.value = false;
   
  }
}

console.log(name)

</script>

<style scoped>

</style>