import { sql } from "$lib/postgres"
import { PRIVATE_SHOP_PASSKEY } from "$env/static/private"

export async function load({ fetch, cookies }) {
    if (cookies.get("shop") != PRIVATE_SHOP_PASSKEY) {
        return {
            access: false
        }
    } else {
        /*let shop: any = await fetch("/shop/items.json")
        shop = await shop.json()*/
        const shop = await sql`SELECT * FROM propianist1124_shop`

        return {
            access: true,
            shop: shop.reverse()
        }
    }
}