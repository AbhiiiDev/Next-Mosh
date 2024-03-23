import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props{
    params:{id:string}
}

//GET PARTICULAR USER

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

//UPDATE PARTICULAR USER

export async function PUT(request:NextRequest, {params:{id}}:Props )
{
 const body=await request.json();
 const validation=schema.safeParse(body);

if(!validation.success){
    return NextResponse.json(validation.error.errors,{status:404});
}
else
{
const user=await prisma.user.findUnique({
    where:{
        id:parseInt(id)
    },
})
if(user)
{
const updatedUser=await prisma.user.update({
    where:{
        id:parseInt(id)
    },
    data:{
        name:body.name,
        email:body.email,
    }
})

return NextResponse.json(updatedUser,{status:200});
}
else {
    return NextResponse.json({error:'cannot find requested user'},{status:400})
}

}
}



//DELETE PARTICULAR USER

export async function DELETE(request:NextRequest,{params:{id}}:Props)
{
const body=await request.json();

if(!body)
{
    return NextResponse.json({error:'cant be empty'},{status:400});

}

if(parseInt(id)>10)
{
    return NextResponse.json({error:'User cant be found'},{status:404});

}

return NextResponse.json({});

}