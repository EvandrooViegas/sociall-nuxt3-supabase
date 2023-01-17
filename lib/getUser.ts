import IUser from "~~/types/IUser"
import getSupabase from "./getSupabase"
export default async function getUser():Promise<IUser | null> {
    const supabase = getSupabase()
    const user = await supabase.auth.getUser()

    const formatedUser = user.data.user 
    ? {
        id: user.data.user?.id,
        email: user.data.user?.email,
        name: user.data.user?.user_metadata.name,
        image: user.data.user?.user_metadata.picture
    }
    : null
 
    return formatedUser 
}