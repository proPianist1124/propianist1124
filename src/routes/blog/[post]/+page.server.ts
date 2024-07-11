import fs from "fs";

export async function load({ params }) {
    const date = fs.readdirSync("src/lib/blog").filter(post => post === params.post)[0];

    return {
        date,
        title: fs.readdirSync(`src/lib/blog/${date}`)[0].split(".md")[0],
        content: fs.readFileSync(`src/lib/blog/${date}/${fs.readdirSync(`src/lib/blog/${date}`)}`, "utf-8")
    }
}