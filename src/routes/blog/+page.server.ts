import { sql } from "$lib/postgres"

export async function load() {
    const posts = await sql`SELECT * FROM propianist1124_blog`
    
    return {
        blog: posts.reverse()
    }
}