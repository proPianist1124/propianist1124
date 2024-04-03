import { sql } from "$lib/postgres"
import { PRIVATE_SHOP_PASSKEY, PRIVATE_ADMIN_CODE } from "$env/static/private"

export async function load({ params, cookies }: any) {
    if (cookies.get("shop") != PRIVATE_SHOP_PASSKEY) {
        return {
            access: false
        }
    } else {
        const item = await sql`SELECT * FROM propianist1124_shop WHERE id = ${params.item}`

        return {
            access: true,
            item: item[0],
            admin: cookies.get("admin") == PRIVATE_ADMIN_CODE ? true : false
        }
    }
}