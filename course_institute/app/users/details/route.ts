import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json({
        data: [1,2,3]
    })
}