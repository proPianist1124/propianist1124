import { json } from "@sveltejs/kit"
import { send_mail } from "$lib/resend"
import { sql } from "$lib/postgres"
import { PRIVATE_SHOP_PASSKEY } from "$env/static/private"

export async function POST({ request, cookies }: any) {
    const formData = await request.json()

    if (cookies.get("shop") != PRIVATE_SHOP_PASSKEY) {
        return json({ error: "Unauthorized Access" })
    } else {
        const item = await sql`SELECT * FROM propianist1124_shop WHERE id = ${formData.id}`
        await send_mail("Shop", `New $${item[0].price} purchase!`, `A new purchase has been made for <b>$${item[0].price}.00</b>! Item is <a href = "https://propianist1124.obl.ong/shop/${item[0].id}">${item[0].name}</a>. You can reach the buyer at <a href = "mailto:${formData.email}">${formData.email}</a>.`)
        return json({ success: true })
    }
}