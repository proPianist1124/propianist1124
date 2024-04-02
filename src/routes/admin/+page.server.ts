import { PRIVATE_ADMIN_CODE } from "$env/static/private"

export async function load({ cookies }) {
    if (cookies.get("admin") != PRIVATE_ADMIN_CODE) {
        return {
            access: false
        }
    } else {
        return {
            access: true
        }
    }
}