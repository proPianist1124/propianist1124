import { sql } from "$lib/postgres";

export async function load() {
    const blog = await sql`SELECT * FROM propianist1124_blog;`;

    return {
        blog: blog.reverse()
    }
}