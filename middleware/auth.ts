export default defineNuxtRouteMiddleware((to) => {
    const user = useSupabaseUser()
  
    if (!user.value && to.path === '/') {
      return navigateTo('/auth')
    } else if (user.value && to.path === '/auth') {
      return navigateTo('/')
    }
  })