import { requireAuth } from "@/lib/auth-utils"


const Page =  async()=>{
   await requireAuth();
  return (
    <div className="text-red-700 justify-center items-center flex min-w-screen min-h-screen">
    protected server component 
    </div>
  )
 };

 export default Page ;
