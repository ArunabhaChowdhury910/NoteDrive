<template>
  <div class="w-screen  overflow-y-scroll p-5 container-snap">
      <!-- <div class="w-full h-full :border-none text-lg text-Space px-8 py-6" ref="inputContainer" @input="handleInput" contenteditable="true">
      </div> -->
      <textarea type="text" class="bg-transparent w-full h-full p-5 focus:border-none "></textarea>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  methods: {
    handleInput(event: InputEvent) {
      const enteredText = (event.target as HTMLElement).textContent || '';
      console.log('Entered text:', enteredText);

      
    },
  },
});
</script>

<style scoped>

.container-snap::-webkit-scrollbar {
  display: none;
}

 .container-snap {
  -ms-overflow-style: none; /* IE and Edge*/ 
  scrollbar-width: none; /* Firefox */
} 


</style>
