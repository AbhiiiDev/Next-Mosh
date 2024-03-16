import { NextRequest, NextResponse } from "next/server";

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

if(!body.name){
    return NextResponse.json({error:'name cant be empty'},{status:404});
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

export async function DELETE(request:NextRequest,{params}:Props)
{
const body=await request.json();

if(!body)
{
    return NextResponse.json({error:'cant be empty'},{status:400});

}

if(body.id>10)
{
    return NextResponse.json({error:'User cant be found'},{status:404});

}

return NextResponse.json({});

}