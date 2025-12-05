import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { auth } from "./auth";


export const requireUnauth = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
};
 
export const requireAuth = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    if (!session){
    redirect("login");
    }

return session 
}