import { PrismaClient } from "@/generated/prisma/client";   


// global is for solving the hot reload issue 
// it wont let it creat new prismaClient 
// it only afftect at the development time 
// not in production 
// for production just do this 
// const prisma = new PrismaClient(); 


const globalForPrisma = global as unknown as {
    prisma : PrismaClient ;
};

const prisma = globalForPrisma.prisma || new PrismaClient(); 

if (process.env.NODE_ENV !== "production"){
    globalForPrisma.prisma = prisma ;
}

export default prisma;