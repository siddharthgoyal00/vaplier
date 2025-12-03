import prisma from "@/lib/db";
import { Button } from "../components/ui/button"
// page.tsx default is a server component it wont accept the hooks like useEffect() 
const Page = async ()=>{
  const users = await prisma.user.findMany();
  return (
    <div className="text-red-700 ">
      hello world
      {JSON.stringify(users)}
      <Button >click me 
      </Button> 
    </div>
  )
 };

 export default Page ;
