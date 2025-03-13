import { Realtime } from "ably"

export async function GET() {
  try {
    const clientId = `player-${Math.random().toString(36).slice(2, 11)}`
    const client = new Realtime({ key: process.env.NEXT_PUBLIC_ABLY_KEY })
    const tokenRequest = await client.auth.createTokenRequest({ clientId })
    return new Response(JSON.stringify(tokenRequest), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Error generating token request" }),
      { status: 500 }
    )
  }
}
