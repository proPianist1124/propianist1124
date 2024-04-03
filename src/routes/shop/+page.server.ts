import { sql } from "$lib/postgres"
import { PRIVATE_SHOP_PASSKEY } from "$env/static/private"

export async function load({ cookies }) {
    if (cookies.get("shop") != PRIVATE_SHOP_PASSKEY) {
        return {
            access: false
        }
    } else {
        const shop = await sql`SELECT * FROM propianist1124_shop`

        return {
            access: true,
            shop: shop.reverse()
        }
    }
}