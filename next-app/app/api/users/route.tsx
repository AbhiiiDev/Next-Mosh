import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";


// the request object is added to prevent caching of data

export async function GET(request:NextRequest)
{

    const users=await prisma.user.findMany();


    return NextResponse.json(users,{status:200});
}


export async function POST(request:NextRequest)
{
 const body=  await request.json();
 
 const validation=schema.safeParse(body);

 if(!validation.success){
    return NextResponse.json(validation.error.errors,{status:404});
 }

 const alreadyUser=await prisma.user.findUnique({
    where:{
        email:body.email
    }
 })
 
if(alreadyUser)
{
    return NextResponse.json({error:"user already existed"},{status:400});
}

 const user=await prisma.user.create({
    data:{
        name:body.name,
        email:body.email,
    }
 })

 return NextResponse.json(user,{status:201});
}


export async function PUT(request:NextRequest)
{
 const body=await request.json();
 const validation=schema.safeParse(body);

if(!validation.success){
    return NextResponse.json(validation.error.errors,{status:404});
}
else
{
if(body.id>10)
{
    return NextResponse.json({error:'user is not present'},{status:404});
}

return NextResponse.json({id:1,name:body.name});

}
}

