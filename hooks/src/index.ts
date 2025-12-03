import express from "express";
import {Prisma, PrismaClient} from "@prisma/client"
const client = new PrismaClient();
const app = express();


// https:// hooks.zapier.com/hooks/catch/23467816/187561
// password logic

app.post("/hooks.catch/:userId/:zapId", async(req, res) => {
    const userId = req.params.userId;
    const zapId = req.params.zapId ;
    const body = req.body ;

    // store in db a new trigger 

    await client.$transaction(async (tx: Prisma.TransactionClient)  =>{
        const run = await tx.zapRun.create({
        data : {
            zapId: zapId,
            metadata : body
        }
        });; 
        await tx.zapRunOutbox.create({
            data: {
                zapRunId :run.id
            }
        })
    }) 
    res.json({
        message : "Webhook received " 
    })
    
})
app.listen(3002);