import { NextRequest, NextResponse } from "next/server";

interface Props{
    params:{id:number}
}


export function GET(request: NextRequest,
   {params:{id}}:Props )
{

    if(id>10)
    {
        return NextResponse.json({error:'user not found'},{status:404})
    }

    else 
    {
        return NextResponse.json({id:1, name:'Mosh Hamdani'});

    }

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