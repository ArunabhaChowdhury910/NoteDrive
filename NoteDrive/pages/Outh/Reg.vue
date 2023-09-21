<template>
    <div class="text-P_Blue relative flex bg-S_Blue flex-col justify-center min-h-screen w-screen overflow-hidden">
       <Uppernav2 class="bg-P_Blue w-screen"/>
    <div  class="w-full p-6 m-auto  bg-white border-t border-S_Blue rounded-lg shadow-2xl shadow-blue/50 lg:max-w-md">
      <h1 class="text-3xl font-semibold text-center text-Orange">SIGN UP</h1>
        <form class="row flex-center mt-6" @submit.prevent="handleLogin">
          <!-- THIS IS AN EXP -->
          <div class="col-6">
              <input class="block w-full px-4 py-2 mt-2 text-P_Blue bg-white border rounded-md focus:border-purple-400 focus:ring-S_Blue focus:outline-none focus:ring focus:ring-opacity-40" required type="text" placeholder="Your name" v-model="name" />
          </div>
          <!-- TILL HERE -->
          <div class="col-6">
              <input class="block w-full px-4 py-2 mt-2 text-P_Blue bg-white border rounded-md focus:border-purple-400 focus:ring-S_Blue focus:outline-none focus:ring focus:ring-opacity-40" required type="email" placeholder="Your email" v-model="email" />
          </div>
        <div class="mb-2.5">
            <input type="password" placeholder="Password" v-model="password" class="block w-full px-4 py-2 mt-2 text-P_Blue bg-white border rounded-md focus:border-purple-400 focus:ring-S_Blue focus:outline-none focus:ring focus:ring-opacity-40">
        </div> 
          <a href="#" class="text-xs  text-gray-600 hover:underline">Forget password?</a> 
          <div class="flex gap-4 text-xs mt-3">
            <input type="checkbox"><p class="hover:text-Orange ">TOR DATA CHURIR JONNO AMRA DAI NOI</p>
          </div>
          
          <div class="flex justify-center items-center" >
              <input
                type="submit"
                class="mt-6 border px-12 rounded-lg bg-P_Blue text-white hover:bg-S_Blue hover:text-P_Blue cursor-pointer"
                :value="loading ? 'Loading' : 'Send magic link'"
                :disabled="loading"
              />
          </div>
          <nuxt-link to="Login"><a class="text-xs hover:text-Orange text-P_Blue hover:underline">Now Login</a></nuxt-link>
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



let name_stringed = '';
let email_stringed = '';
let password_stringed = '';

// Watch for changes in the email variable
watch(email, (newValue) => {
  email_stringed = newValue;
});

watch(password, (newValue) => {
  password_stringed = newValue;
});

watch(name , (newValue) => {
  name_stringed = newValue;
});

const handleLogin = async () => {
  try {
    loading.value = true
    // const { error } = await supabase.auth.signInWithOtp({
    //   email: email_stringed,    
    // })
    let { data, error } = await supabase.auth.signUp({
      email: email_stringed,
      password: password_stringed,
      //experimental portion
      options:{
        data:{
           name_stringed,
        }
      }
    })
    if (error) throw error
    alert('Signed In')
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message)
    }
  } finally {
    
    // let { data, error } = await supabase.auth.signInWithPassword({
    //   email: email_stringed,
    //   password: password_stringed,
    //   //experimental portion
    //   options:{
    //     data: name_stringed
      
    //    }
    // })

    loading.value = false;
   // window.location.href = "/main/RegC";
    
    //const dataValue = ref('signed');
  }
}

</script>

<style lang="scss" scoped>

</style>