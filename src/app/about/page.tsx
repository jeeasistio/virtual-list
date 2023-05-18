import { getServerSession } from 'next-auth'

export default async function About() {
    const session = await getServerSession()

    return (
        <main>
            <div>
                {session?.user?.name
                    ? `Hello, ${session.user.name}`
                    : 'User not authenticated'}
            </div>
        </main>
    )
}
