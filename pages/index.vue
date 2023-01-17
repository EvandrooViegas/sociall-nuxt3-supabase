<script setup lang="tsx">
import getUser from '~~/lib/getUser';

definePageMeta({
    middleware: "auth"
})
const supabase = useSupabaseClient()
async function logout() {
    await supabase.auth.signOut()
    if(!await getUser()) navigateTo("/auth")
}

</script>

<template>
    
    <h1 class="">Hello World</h1>
    <Icon name="ion:battery-full" />
    <button @click="logout">
        Logout
    </button>
</template>