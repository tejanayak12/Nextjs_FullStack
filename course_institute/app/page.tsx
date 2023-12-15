import SearchBar from "@/ui/components/SearchBar";
import CoursesList from "@/ui/cources/CourcesList";
import ExternalCourses from "@/ui/cources/ExternalCourses";
import { PrismaClient } from "@prisma/client";


async function getData(){
  const prisma = new PrismaClient();
  const courses = await prisma.course.findMany({})
  return {
    coursesInfo : courses
  }
}

const getExternalCourse = async () => {
  'use server'
   const externalAPI =  fetch('http://cms.fullstack.institute/rest/courses');
   const response = (await externalAPI).json();
      return response
}

export default async function Home() {
  const data = await getData();
  return (
    <main className="">
      <SearchBar search={ async (payload : string) => {
        'use server';
       const prisma = new PrismaClient();
        console.log('Server Acctions Execute',payload);
        return await prisma.course.findMany({
          where : {
            title : {
              contains : payload || ""
            }
          }
        })
      } }/>
      <h2>Welcome to NextJS</h2>
      <ExternalCourses getData={getExternalCourse} />
      <CoursesList list={data.coursesInfo} />
      <pre>{JSON.stringify(data,null,2)}</pre>
    </main>
  )
}
