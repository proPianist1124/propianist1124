import { json } from "@sveltejs/kit"
import { sql } from "$lib/postgres"
import { PRIVATE_ADMIN_CODE } from "$env/static/private"

export async function POST({ request, cookies }) {
    const formData = await request.json()

    if (cookies.get("admin") != PRIVATE_ADMIN_CODE) {
        return json({ error: "Unauthorized Access" })
    } else {
        await sql`DELETE FROM propianist1124_shop WHERE id = ${formData.id}`

        return json({ success: true })
    }
}