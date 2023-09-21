<template>
    <div>
        <div class="text-P_Blue relative flex bg-S_Blue flex-col justify-center min-h-screen w-screen overflow-hidden">
       <Uppernav2 class="bg-P_Blue w-screen"/>
    <div  class="w-full p-6 m-auto  bg-white border-t border-S_Blue rounded-lg shadow-2xl shadow-blue/50 lg:max-w-md">
      <h1 class="text-3xl font-semibold text-center text-Orange">UPDATE PROFILE</h1>
        <form class="row flex-center mt-6" @submit.prevent="handleLogin">
          <!-- THIS IS AN EXP -->
          <div class="col-6">
              <input class="block w-full px-4 py-2 mt-2 text-P_Blue bg-white border rounded-md focus:border-purple-400 focus:ring-S_Blue focus:outline-none focus:ring focus:ring-opacity-40" required type="text" placeholder="Your name" v-model="name" />
          </div>
          <!-- TILL HERE -->
          <div class="col-6">
              <input class="block w-full px-4 py-2 mt-2 text-P_Blue bg-white border rounded-md focus:border-purple-400 focus:ring-S_Blue focus:outline-none focus:ring focus:ring-opacity-40" required type="date" v-model="dob" />
          </div>
        <div class="mb-2.5">
            <input type="text" placeholder="Sex" v-model="sex" class="block w-full px-4 py-2 mt-2 text-P_Blue bg-white border rounded-md focus:border-purple-400 focus:ring-S_Blue focus:outline-none focus:ring focus:ring-opacity-40">
        </div> 
        <div class="mb-4">
            <input type="text" placeholder="Profession" v-model="profession" class="block w-full px-4 py-2 mt-2 text-P_Blue bg-white border rounded-md focus:border-purple-400 focus:ring-S_Blue focus:outline-none focus:ring focus:ring-opacity-40">
        </div> 
        <div class=" mb-2.5 flex">
            <div class="flex gap-3 border w-full ">
                <input class="ml-3" type="checkbox" placeholder="Usage" v-model="password" >
                <p>Personal</p>         
            </div>
            <div class="flex gap-3 w-1/6"></div>
            <div class="flex gap-3 border w-full ">
                <input class="ml-3" type="checkbox" placeholder="Usage" v-model="password" >
                <p>Professional</p>         
            </div>
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
        apidjp
    </div>
</template>

<script setup>

import Uppernav2 from '/components/navbar/uppernav2.vue';
import { reactive } from 'vue'
import { supabase } from "/src/lib/supabaseClient";
import { ref } from 'vue';


const loading = ref(false)
const dob = ref('')
const sex = ref('')
const name = ref('')
const profession = ref('')


let name_stringed = '';
let dob_stringed = '';
let sex_stringed = '';
let profession_stringed = '';

// Watch for changes in the email variable
watch(sex, (newValue) => {
  sex_stringed = newValue;
});

watch(profession, (newValue) => {
  profession_stringed = newValue;
});

watch(name , (newValue) => {
  name_stringed = newValue;
});


const { data: { user } } = await supabase.auth.getUser()

const handleLogin = async () => {
  try {
    loading.value = true
    
    const { data, error } = await supabase
    .from('profiles')
    .update({ 
        name: name_stringed,
        sex: sex_stringed,
        profession: profession_stringed    
    })
    .eq('id', user.id)
    .select()

    if (error) throw error
    alert('Signed In')
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message)
    }
  } finally {  
    loading.value = false;
   
  }
}


</script>

<style lang="scss" scoped>

</style>