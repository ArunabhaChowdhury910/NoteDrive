<template>
  <div class="w-screen h-full focus ">
      <div class="w-full h-screen :border-none text-lg text-Space px-8 py-6" ref="inputContainer" @input="handleInput" contenteditable="true">
      </div>
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

</style>
