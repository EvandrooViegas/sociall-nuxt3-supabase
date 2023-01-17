// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/supabase", "nuxt-icon"],
    tailwindcss: {
        config: {
            theme: {
                extend: {
                    colors: {
                        "primary": "#7635FF",
                        "gray-1": "#3E3E3E",
                        "gray-2": "#5B5B5B",
                        "dark": "#171717"

                    }
                }
            }
        }
    }
})
