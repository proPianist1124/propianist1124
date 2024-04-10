import { json } from "@sveltejs/kit"
import { PRIVATE_ADMIN_CODE } from "$env/static/private"

export async function POST({ request, cookies }) {
    const formData = await request.json()

    if (formData.code != PRIVATE_ADMIN_CODE) {
        return json({ error: "Invalid code. Please try again." })
    } else {
        cookies.set("admin", PRIVATE_ADMIN_CODE, { path: "/", maxAge: 300 })
        return json({ success: true })
    }
}