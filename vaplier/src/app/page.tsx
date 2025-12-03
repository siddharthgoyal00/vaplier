"use-client ";

import { useQuery } from "@tanstack/react-query";

// page.tsx default is a server component it wont accept the hooks like useEffect() 



const Page =  ()=>{
     const trpc:any = useTrpc();
     const {data:users} = useQuery(trpc.getUsers.queryOptions());

  return (
    <div className="text-red-700 justify-center items-center flex min-w-screen min-h-screen">
     siddha
      {JSON.stringify(users)}
     
    </div>
  )
 };

 export default Page ;
function useTrpc() {
  throw new Error("Function not implemented.");
}

