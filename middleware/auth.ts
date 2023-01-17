import getUser from "~~/lib/getUser"

export default defineNuxtRouteMiddleware(async({ path }) => {
    const supabase = useSupabaseAuthClient()
    const response = await supabase.auth.getUser()
    const user = await getUser()
    console.log(user)
    const protectedRoutes = [
        "/",
        "/create"
    ]
    if(!!(path == "/auth" && user)) return navigateTo("/")
    else if(!!(protectedRoutes.includes(path) && !user)) return navigateTo("/auth")
})