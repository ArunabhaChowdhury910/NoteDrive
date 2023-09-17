<template>
    <div class="text-P_Blue relative flex bg-S_Blue flex-col justify-center min-h-screen w-screen overflow-hidden">
       <Uppernav2 class="bg-P_Blue w-screen"/>
    <div  class="w-full p-6 m-auto  bg-white border-t border-S_Blue rounded-lg shadow-2xl shadow-blue/50 lg:max-w-md">
      <h1 class="text-3xl font-semibold text-center text-Orange">BASIC INFO</h1>
        <form class="row flex-center mt-6" @submit.prevent="handleLogin">
          <div class="col-6">
              <input class="block w-full px-4 py-2 mt-2 text-P_Blue bg-white border rounded-md focus:border-purple-400 focus:ring-S_Blue focus:outline-none focus:ring focus:ring-opacity-40" required type="text" placeholder="Your name" v-model="name" />
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

 
import { supabase } from "/src/lib/supabaseClient";
import { ref } from 'vue';

const loading = ref(false)
const name = ref('')



let name_stringed = '';


// Watch for changes in the email variable
watch(name , (newValue) => {
  name_stringed = newValue;
});




const { data: { user } } = await supabase.auth.getUser()
console.log(user)


// const userId = user.id; // Specify the user ID here
//copy paste these 3 lines to see the users obj

const handleLogin = async () => {
  try {
    loading.value = true
    // const { error } = await supabase.auth.signInWithOtp({
    //   email: email_stringed,    
    // })
    
     let { data: profiles, error } = await supabase
       .from('profiles')
      .update({ username : name_stringed})
       .eq('id' , user.id )
    
    if (error){
      console.log(error)
    }  
    if(data){
      console.log(data)
    }

    if (error) throw error
    alert('Signed In')
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message)
    }
  } finally {
    loading.value = false;
   // window.location.href = "/main/RegC";
    
    //const dataValue = ref('signed');
  }
}

</script>

<style lang="scss" scoped>

</style>