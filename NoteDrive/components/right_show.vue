<template>
    <div class="w-full h-full" v-if="parsedat === 'N'">
        <todolist/>
    </div>
   <!-- <notes_view /> -->
</template>

<script setup>
import notes_view from '/components/options/notes_view.vue';
import todolist from '/components/options/todolist.vue'
const props = defineProps({
  parsedat: String,
});
// const { store } = useStore(); // Access the Vuex store

//   const dataValue = computed(() => store.state.data); // Retrieve the data value from the Vuex store

</script>

<style lang="scss" scoped>

</style>