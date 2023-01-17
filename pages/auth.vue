<script setup lang="tsx">
import getUser from '~~/lib/getUser';


definePageMeta({
    middleware: "auth"
})

const supabase = useSupabaseAuthClient()

async function continueWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google"
    })

}

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