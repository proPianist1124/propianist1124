import { db } from "$lib/postgres";

export async function load({ cookies }) {
    const token = cookies.get("token") || null;

    if (token) {
        const user = await db`SELECT discord_id, avatar, username FROM propianist1124_guestbook WHERE id = ${token};`;

        return {
            authenticated: true,
            ...user[0]
        }
    } else {
        return {
            authenticated: false
        }
    }
}