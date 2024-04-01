import { PRIVATE_ADMIN_CODE } from "$env/static/private"

export async function load({ cookies }) {
    if (cookies.get("admin") != PRIVATE_ADMIN_CODE) {
        return {
            admin: false
        }
    } else {
        return {
            admin: true
        }
    }
}