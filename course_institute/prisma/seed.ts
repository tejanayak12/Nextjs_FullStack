// import { PrismaClient } from "@prisma/client";
const Prisma = require("@prisma/client");
const { PrismaClient } = Prisma;

const prisma = new PrismaClient();

const courses = require("./data/course")

// new Course (title, description)
// prisma.course.create({
//     data : {
//         title : "React Redux Course",
//         description : "State Management"
//     }
// })


// IIFE
courses.forEach((course : any) => {
    (async () => { 
        const newCourse = await prisma.course.create({
                data : {
                    title : course.name,
                    description : course.name
                }
            })
    })()
})
