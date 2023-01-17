<script setup lang="tsx">
import getSupabase from '~~/lib/getSupabase';
import getUser from '~~/lib/getUser';

definePageMeta({
    middleware: ["auth"]
})
const supabase = await getSupabase()
const postDescription = ref<string>("")
const postImageUrl = ref<string>("")

async function handleUpload(e:any) {
    const image = e.target.files[0]
    const imageExt = image.name.split(".").pop()
    const imagePath = `${Math.random()}.${imageExt}`
    const { error, data } = await supabase.storage.from("images").upload(imagePath, image)
    postImageUrl.value = `https://ihksrmznxwuvbmazuwxj.supabase.co/storage/v1/object/public/images/${data?.path}`
}


async function handleSubmit() {
    const user = await getUser()
    try {
        
        const { data, error } = await supabase
        .from("post")
        .insert({
            image: postImageUrl.value,
            description:postDescription.value,
            uid: user?.id
        })
        navigateTo("/")
    } catch (error) {
        
    }
    
   
}
</script>

<template>
<section class="w-[90%] md:w-1/2  mx-auto flex flex-col justify-center items-center h-screen bg-dark text-white">
    <h1 class="text-4xl font-semibold mb-4">Create a Post</h1>
    <form @submit.prevent="handleSubmit()" class="border-[1px] border-gray-1 p-6 rounded-md w-full flex flex-col gap-2">
        <div class="flex gap-1 flex-col">
            <span class="text-sm">Post Description</span>
            <input v-model="postDescription" class="bg-gray-1 px-4 py-2 rounded-md w-full" />
        </div>
        <div class="flex gap-1 flex-col">
            <span class="text-sm">Image (opcional)</span>
            <input 
            @change="(e:any) => handleUpload(e)"
            type="file"
            accept="image/*"
            class="bg-gray-1 px-3 py-2 rounded-md w-1/2"
            />
            
            
        </div>
        <div class="flex gap-1 flex-col" v-if="postImageUrl">
            <span class="text-sm">Preview: </span>
            <img
            class="w-full h-60 object-cover"
            :src="postImageUrl" 
            />
        </div>
        <button class="bg-primary w-full py-2 rounded-md">
            Create
        </button>
    </form>
</section>
</template>