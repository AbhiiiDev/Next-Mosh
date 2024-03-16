import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

interface Props{
    params:{id:number}
}

export function GET(request:NextRequest)
{
    return NextResponse.json([
        { id:1, name:"Abhishek"},
        { id:2, name:"Aditya"}
    ])
}

export async function POST(request:NextRequest)
{
 const body=  await request.json();

 return NextResponse.json(body);
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

