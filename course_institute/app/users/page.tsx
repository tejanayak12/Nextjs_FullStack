import { PrismaClient } from "@prisma/client"


async function getUserList(){
    const db = new PrismaClient()
    const list = await db.user.findMany({})
    return {
        users : list
    }
}


export default async function Page(){
    const users = await getUserList()
    return <section>
        <h2>Users</h2>
        <pre>
            {JSON.stringify(users , null , 2)}
        </pre>
    </section>
}