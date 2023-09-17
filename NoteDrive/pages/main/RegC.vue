<template>
    <div class="text-P_Blue relative flex bg-S_Blue flex-col justify-center min-h-screen w-screen overflow-hidden">
      <Uppernav2 class="bg-P_Blue w-screen"/>
    <div  class="w-full p-6 m-auto  bg-white border-t border-S_Blue rounded-lg shadow-2xl shadow-blue/50 lg:max-w-md">
      <h1 class="text-3xl font-semibold text-center text-Orange">PROFILE</h1>
        <form class="row flex-center mt-6" @submit.prevent="handleLogin">
          <div class="col-6">
              <input class="block w-full px-4 py-2 mt-2 text-P_Blue bg-white border rounded-md focus:border-purple-400 focus:ring-S_Blue focus:outline-none focus:ring focus:ring-opacity-40" required type="name" placeholder="Your Name" v-model="name" />
          </div>
           
          <div class="col-6">
              <input class="block w-full px-4 py-2 mt-2 text-P_Blue bg-white border rounded-md focus:border-purple-400 focus:ring-S_Blue focus:outline-none focus:ring focus:ring-opacity-40" required type="email" placeholder="Your email" v-model="email" />
          </div>

          <div class="mb-2.5">
            <input type="password" placeholder="Your Password" v-model="password" class="block w-full px-4 py-2 mt-2 text-P_Blue bg-white border rounded-md focus:border-purple-400 focus:ring-S_Blue focus:outline-none focus:ring focus:ring-opacity-40">
          </div>
          
          <div class="flex gap-4 text-xs mt-3">
            <input type="checkbox"><p class="hover:text-Orange ">TOR DATA CHURIR JONNO AMRA DAI NOI</p>
          </div>
          
          <div class="flex justify-center items-center" >
              <input
                type="submit"
                class="mt-6 border px-12 rounded-lg bg-P_Blue text-white hover:bg-S_Blue hover:text-P_Blue cursor-pointer"
                :value="loading ? 'Loading' : 'Update'"
                :disabled="loading"
                
              />
            </div>
        </form>
    </div>
</div>

</template>

<script setup>
 import Uppernav2 from '/components/navbar/uppernav2.vue';


import { reactive } from 'vue'
import { supabase } from "/src/lib/supabaseClient";
import { ref } from 'vue';

const loading = ref(false)
const email = ref('')
const password = ref('')
const name = ref('')

  const { data: { user } } = await supabase.auth.getUser();
 const id = user.id;

  console.log(id)

//  const { user, error } = await supabase.auth.api.getUser('PUqy7bOus+q731ay4F1IwhxMFkTyq2DrnSwtBqtziqZk1bn5F6a9V9EOCSpPcvczNTN0to0VLNnOoJQbWRJKhA==');
//  const id = user.id;

 if (error) {
  console.log(error.message);
} else {
  console.log(user.id);
}


let email_stringed = '';
let password_stringed = '';
let name_stringed = '';

// Watch for changes in the email variable
watch(email, (newValue) => {
  email_stringed = newValue;
});
watch(password, (newValue) => {
  password_stringed = newValue;
});
watch(name, (newValue) => {
  name_stringed = newValue;
});
/*http://localhost:3000/main/RegC et te direct giye kaj korbi for better results */ 


const handleLogin = async () => {
  try {
    loading.value = true

    const { data, error } = await supabase
      .from('profiles')
      .update({ 
        username : name_stringed,
        password : password_stringed,
        email : email_stringed
      })
      .eq('id', id)
      .select()


    if (error) throw error
    alert('Updated')
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message)
    }
  } finally {
    loading.value = false;
    window.location.href = "./notes";
    
    //const dataValue = ref('signed');
  }
}


</script>

<style lang="scss" scoped>

</style>