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
      <pre>{JSON.stringify(data,null,2)}</pre>
    </main>
  )
}
