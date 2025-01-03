import { json } from "@sveltejs/kit";
import { ID, PASSWORD } from "$env/static/private";

export async function POST({ request }) {
    const formData = await request.json();

    if (formData.id !== ID || formData.password !== PASSWORD) return json({
        status: 401,
        message: "Unauthorized"
    });

    return json({
        status: 200,
        message: "whatchu want nigga"
    });
}