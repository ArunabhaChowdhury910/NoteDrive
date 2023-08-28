<template>
  <div class="w-screen h-screen ">
      <div class="w-full h-screen p-2" ref="inputContainer" @input="handleInput" contenteditable="true">
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
.input-container {
  border: 1px solid #ccc;
  padding: 10px;
  max-width: 400px;
}
</style>
