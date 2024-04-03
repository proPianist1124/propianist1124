import { v4 as uuidv4 } from "uuid"
import { json } from "@sveltejs/kit"
import { sql } from "$lib/postgres"
import { date } from "$lib/misc"
import { PRIVATE_ADMIN_CODE, PRIVATE_SHOP_PASSKEY } from "$env/static/private"

export async function POST({ request, cookies }: any) {
    const formData = await request.json()

    if (cookies.get("shop") == PRIVATE_SHOP_PASSKEY) {
        await sql`INSERT INTO propianist1124_shop VALUES(${uuidv4()}, ${date()}, ${formData.name}, ${formData.description}, ${formData.image}, ${formData.category}, ${cookies.get("admin") == PRIVATE_ADMIN_CODE ? "proPianist1124" : "anonymous"}, ${formData.price})`
        return json({ success: true })
    } else {
        return json({ error: "Unauthorized Access" })
    }
}