import axios from "axios";
import { redirect } from "@sveltejs/kit";
import { v4 as uuid } from "uuid";
import { PRIVATE_DISCORD_CLIENT_ID, PRIVATE_DISCORD_CLIENT_SECRET } from "$env/static/private";
import { db } from "$lib/postgres";

export async function GET({ url, cookies }) {
    const formData = new URLSearchParams({
        client_id: PRIVATE_DISCORD_CLIENT_ID,
        client_secret: PRIVATE_DISCORD_CLIENT_SECRET,
        grant_type: "authorization_code",
        code: String(url.searchParams.get("code")),
        redirect_uri: "http://localhost:5173/api/discord"
    });

    const output = await axios.post("https://discord.com/api/v10/oauth2/token",
        formData, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }
    );

    if (output.data) {
        const access = output.data.access_token;

        const userInfo = await axios.get("https://discord.com/api/v10/users/@me", {
            headers: {
                "Authorization": `Bearer ${access}`
            }
        });

        const user = await db`SELECT id FROM propianist1124_guestbook WHERE discord_id = ${userInfo.data.id}`;

        if (user.length === 0) {
            const id = uuid();

            await db`INSERT INTO propianist1124_guestbook (id, discord_id, avatar, username, email) VALUES (${id}, ${userInfo.data.id}, ${userInfo.data.avatar}, ${userInfo.data.username}, ${userInfo.data.email});`;

            cookies.set("token", id, {
                path: "/"
            });
        } else {
            cookies.set("token", user[0].id, {
                path: "/"
            });
        }

        redirect(302, "/guestbook");
    } else {
        return new Response("Invalid code.");
    }
}