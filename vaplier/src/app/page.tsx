
import { requireAuth } from "@/lib/auth-utils"
import { caller } from "@/trpc/server";
import { LogoutButton } from "./logout";


const Page =  async()=>{
   await requireAuth();
   const data = await caller.getUsers();
  return (
    <div className="text-red-700 flex-col gap-y-6justify-center items-center flex min-w-screen min-h-screen">
    protected server component 
   <div>
    {JSON.stringify(data,null,2)}
   </div>
   <LogoutButton/>
    </div>
  )
 };

 export default Page ;
