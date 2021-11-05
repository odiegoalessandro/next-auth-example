import { Button } from "@chakra-ui/react"
import { signIn, useSession, signOut } from "next-auth/react"
import { Layout } from "../components/layout"

export default function Home() {
  const { data: session } = useSession()

  console.log(session)

  if (session) {
    return (
      <Layout title="home">
        Signed in as {session.user.name} <br />
        <Button color="white" bgColor="black" onClick={() => signOut()}>Sign out</Button>
      </Layout>
    )
  }
  return (
    <Layout title="home">
      Not signed in <br />
      <Button color="white" bgColor="black" onClick={() => signIn()}>Sign in</Button>
    </Layout>
  )
}
