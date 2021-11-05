import { Box } from "@chakra-ui/react"
import Head from "next/head"

export function Layout({ children, title }){
  return(
    <Box minH="100vh" bgColor="gray.800">
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </Box>
  )
}