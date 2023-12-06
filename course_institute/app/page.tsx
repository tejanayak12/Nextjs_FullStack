import CoursesList from "@/ui/cources/CourcesList";
import { PrismaClient } from "@prisma/client";


async function getData(){
  const prisma = new PrismaClient();
  const courses = await prisma.course.findMany({})
  return {
    coursesInfo : courses
  }
}

export default async function Home() {
  const data = await getData();
  return (
    <main className="">
      <h2>Welcome to NextJS</h2>
      <CoursesList list={data.coursesInfo} />
      <pre>{JSON.stringify(data,null,2)}</pre>
    </main>
  )
}
