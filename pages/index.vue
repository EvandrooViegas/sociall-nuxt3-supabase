<script setup lang="tsx">


const user = useSupabaseUser()
definePageMeta({
    middleware: ["auth"]
})
const supabase = useSupabaseAuthClient()
async function logout() {
    console.log("..login out")
    await supabase.auth.signOut()
    console.log(user.value)
    console.log("logged out!")


}
onMounted(() => {
    watchEffect(() => {
        if(!user.value) {
            navigateTo("/auth")
        }
    })
})

</script>

<template>
    
    <h1 class="">Hello World</h1>
    <Icon name="ion:battery-full" />
    <button @click="logout">
        Logout
    </button>
</template>