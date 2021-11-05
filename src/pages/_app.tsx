import { SessionProvider } from "next-auth/react"
import { ChakraProvider } from "@chakra-ui/react"
import React from "react"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <ChakraProvider>
      <SessionProvider session={session}>
          <Component {...pageProps} />
      </SessionProvider>
    </ChakraProvider>
  )
}