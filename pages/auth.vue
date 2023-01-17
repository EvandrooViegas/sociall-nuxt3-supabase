<script setup lang="ts">

definePageMeta({
    middleware: ["auth"]
})
const supabase = useSupabaseAuthClient()
const user = useSupabaseUser()

async function continueWithGoogle() {
    await supabase.auth.signInWithOAuth({
        provider: "google"
    })
}
onMounted(() => {
    watchEffect(() => {
        if(user.value) {
            navigateTo("/")
        }
    })
})

</script>

<template>
    <div class="font-semibold gap-8 flex flex-col items-center justify-center h-screen mx-auto max-w-[600px]">
        <h1 class="text-4xl">Authentication</h1>
        <button @click="continueWithGoogle()" class="flex items-center gap-2 bg-gray-1 px-3 py-2 rounded-lg">
            <span>Continue With Google</span>
            <span>
                <Icon name="gg:google" />
            </span>
        </button>
    </div>
</template>