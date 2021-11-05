import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { NextApiRequest, NextApiResponse } from "next"

export default async function auth(req: NextApiRequest, res: NextApiResponse<any>){
  return await NextAuth(req, res, {
    providers: [
      GoogleProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
      })
    ],
  })
}