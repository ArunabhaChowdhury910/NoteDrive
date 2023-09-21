<template>
    <div v-if="user.id">
        <p>User is Present</p>
    </div>
    <div v-else>
        <p>Absent Sir</p>
    </div>
</template>

<script setup>
    import { reactive } from 'vue'
import { supabase } from "/src/lib/supabaseClient";
import { ref } from 'vue';
const { data: { user } } = await supabase.auth.getUser()

</script>

<style lang="scss" scoped>

</style>