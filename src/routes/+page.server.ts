import fs from "node:fs";

export async function load() {
    const blog = fs.readdirSync("src/lib/blog").map((date: string) => {
        return {
            title: fs.readdirSync(`src/lib/blog/${date}`)[0].split(".md")[0],
            date
        };
    });

    return {
        blog
    }
}