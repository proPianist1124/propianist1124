import { sql } from "$lib/postgres"

export async function load({ params }) {
    const post = await sql`SELECT * FROM propianist1124_blog WHERE title = ${params.post}`

    if (post == null || post.length === 0) {
        return {
            post: null
        }
    }

    return {
        post: post[0]
    }
}