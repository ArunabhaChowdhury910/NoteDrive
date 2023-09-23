<template>
  <!-- THIS IS THE WHOLE BODY -->
  <div class="w-full h-screen bg-S_Blue">

    <!-- HEADING -->
     <div class="w-full h-fit fixed bg-P_Blue ">
      <up_nav/> 
      
    </div>


    <!-- MIDDLE -->
    <div class=" p-3  bg-S_Blue pt-12 space-x-1.5 h-full">       
      
  
      <!-- MIDDLE PANEL -->
      <!-- <textarea v-model="fileContent" type="file" class=" bg-P_Blue p-3 text-slate-200 w-full h-full" placeholder="click inside the blue box to save" ></textarea>
      <button @click="createFile">Save</button> -->
      <!-- <form class="row flex-center mt-6" @submit.prevent="handleLogin">
        <div class="w-full h-full">
            <input type="text" v-model="text" class="bg-P_Blue p-3 text-slate-200 w-full h-full">
        </div> 
      </form> -->

      <form @submit.prevent="handleLogin" class="w-full space-y-8 h-[85%] bg-S_Blue" >
        <div class="flex justify-start items-center" >
           <input
             type="submit"
             class="mt-6 border px-12 rounded-lg bg-P_Blue text-white hover:bg-S_Blue hover:text-P_Blue cursor-pointer"
             :value="loading ? 'Loading' : 'Update'"
             :disabled="loading"
           />
          </div>
         
        <textarea @click="saveToFile" placeholer="click to save " v-model="fileContent" class="bg-P_Blue p-3 text-slate-200 w-full h-full" placeholder="click inside the blue box to save"></textarea>
      </form>
    </div>

  </div>  
</template>

<script setup >

import up_nav from '/components/navbar/up_nav.vue';
import { ref } from 'vue';
import { supabase } from "/src/lib/supabaseClient";
const fileContent = ref('');

const saveToFile = () => {
  localStorage.setItem('savedFileContent', fileContent.value);
  //alert('Data saved to local storage.');
};



const savedFileContent = localStorage.getItem('savedFileContent');
 onMounted(() => {
  //  if (savedFileContent) {
  //    fileContent.value = savedFileContent;
  //}
 });



const { data: { user } } = await supabase.auth.getUser()


const loading = ref(false)

const handleLogin = async () => {
  try {
    loading.value = true

    const { data, error } = await supabase
      .from('profiles')
      .update({ notes1: savedFileContent })
      .eq('id', user.id)
      .select()


    if (error) throw error
    alert('Done')
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message)
    }
  } finally {
    loading.value = false;
   }
}

</script> 



<style scoped>
</style>
