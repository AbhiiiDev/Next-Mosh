import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

interface Props{
    params:{id:string}
}


export async function GET(request: NextRequest,
   {params:{id}}:Props )
{

const user=await prisma.user.findUnique({
    where:{
        id: parseInt(id)
    }
})

if(user)
{
    return NextResponse.json(user,{status:200});
}
else 
return NextResponse.json({error:"user you requested is not present"},{status:400});

}


export async function DELETE(request:NextRequest,{params:{id}}:Props)
{
const body=await request.json();

if(!body)
{
    return NextResponse.json({error:'cant be empty'},{status:400});

}

if(id>10)
{
    return NextResponse.json({error:'User cant be found'},{status:404});

}

return NextResponse.json({});

}