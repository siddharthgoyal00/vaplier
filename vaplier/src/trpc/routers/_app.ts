
import { inngest } from '@/inngest/client';
import { protectedProcedure, createTRPCRouter } from '../init';
import prisma from '@/lib/db';
export const appRouter = createTRPCRouter({

  getWorkflows: protectedProcedure.query(({ctx}) => {
    
      return prisma.workflow.findMany()
    }),
    createWorkflow: protectedProcedure.mutation(async() => {
      await inngest.send({
        name: "test/hello.world",
        data: {
          email: "test@example.com",
        },
      });
      return {success: true, message: "job Queued"}
    })
});

export type AppRouter = typeof appRouter;