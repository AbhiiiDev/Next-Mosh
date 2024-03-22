import { NextRequest, NextResponse } from "next/server";
import productSchema from './schema';

export function GET(request:NextRequest)
{
    return NextResponse.json([
        {id:1,name:"Java",price:300},
        {id:2,name:"Bread",price:100},
        {id:3,name:"Butter",price:340},  
    ])
}

export async function POST(request:NextRequest)
{
    const body=await request.json(); //body parser
    const validation=productSchema.safeParse(body);

    if(!validation.success)
    {
        return NextResponse.json(validation.error.errors,
            {
                status:400
            })
    }
    
    return NextResponse.json(body);

}

