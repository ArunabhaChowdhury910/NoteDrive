<template>
  <div class="w-full h-screen p-2">
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

      // Save the selection range
      const selection = window.getSelection()!;
      const range = selection.getRangeAt(0).cloneRange();

      // Perform any processing you need with the entered text

      // Restore the selection range
      selection.removeAllRanges();
      selection.addRange(range);
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
