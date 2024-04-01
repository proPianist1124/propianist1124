import { redirect } from "@sveltejs/kit"

export async function GET({ cookies }: any) {
    cookies.delete("admin", { path: "/" })
    redirect(302, "/admin")
}