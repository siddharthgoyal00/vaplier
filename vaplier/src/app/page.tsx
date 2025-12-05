

// page.tsx default is a server component it wont accept the hooks like useEffect() 

import { getQueryClient, trpc } from '@/trpc/server';
import { Client } from './client';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';

const Page =  async()=>{
    const queryClient = getQueryClient();
    void queryClient.prefetchQuery(trpc.getUsers.queryOptions());
  return (
    <div className="text-red-700 justify-center items-center flex min-w-screen min-h-screen">
     <HydrationBoundary state = {dehydrate(queryClient)}>
        <Suspense fallback={<p>Loading...</p>}>
          <Client />
        </Suspense>
     </HydrationBoundary>
     
    </div>
  )
 };

 export default Page ;
