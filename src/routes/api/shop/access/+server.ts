import { json } from "@sveltejs/kit"
import { sql } from "$lib/postgres"

export async function POST({ request, cookies }) {
    const formData = await request.json()

    const passkey = await sql`SELECT passkey FROM propianist1124_passkeys WHERE passkey = ${formData.passkey}`

    if (passkey == null || passkey.length === 0) {
        return json({ error: "Invalid passkey. Please try again." })
    } else {
        cookies.set("shop", formData.passkey, { path: "/", maxAge: 300 })
        return json({ success: true })
    }
}