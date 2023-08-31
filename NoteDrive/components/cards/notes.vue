<template>
  <div class="w-screen  overflow-y-scroll p-5 container-snap">
      <!-- <div class="w-full h-full :border-none text-lg text-Space px-8 py-6" ref="inputContainer" @input="handleInput" contenteditable="true">
      </div> -->
      <textarea type="text" class="bg-transparent w-full h-full p-5 focus:border-none " ref="textarea"
      @input="handleInput"></textarea>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, onMounted } from 'vue';
export default defineComponent({
  setup() {
    const textarea: Ref<HTMLTextAreaElement | null> = ref(null);

    const handleInput = () => {
      if (textarea.value) {
        textarea.value.style.height = 'auto';
        textarea.value.style.height = textarea.value.scrollHeight + 'px';
      }
    };

    /*onMounted(() => {
      if (textarea.value) {
        textarea.value.style.height = window.innerHeight-120  + 'px';
        textarea.value.addEventListener('input', handleInput);
      }
    });*/

    return {
      textarea,
      handleInput,
    };
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
