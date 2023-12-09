import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client"; 

export async function GET(request : NextRequest ){
    const { searchParams } = new URL(request.url);
    const searchText = searchParams.get('query');
    console.log(":: COURSE CALL API ::" , searchText);

    const prisma = new PrismaClient();
    let courses : any = [];
    if(searchText){
        courses = await prisma.course.findMany({
            where : {
                title : {
                    contains : searchText
                }
            }
        })
    } else {
         courses = await prisma.course.findMany({});
    }
    // const courses = await prisma.course.findMany({}); 
    return NextResponse.json({
        status : 'Ok',
        data : courses
    })
}

export async function POST(){
    return NextResponse.json({
        status : "ok",
        data : 'its a Post Call'
    })
}