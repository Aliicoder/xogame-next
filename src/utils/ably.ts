import { Realtime } from "ably"

const client = new Realtime({
  key: process.env.NEXT_PUBLIC_ABLY_KEY,
  authUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/ably`,
})

export default client
