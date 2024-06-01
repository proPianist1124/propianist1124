<script>
    export let data;

    const socials = [
        {
            name: "Twitter",
            alias: "@proPianist1124",
            link: "https://twitter.com/proPianist1124",
        },
        {
            name: "Discord",
            alias: "chicken.poop",
            link: "https://discord.com/users/844689790075011083",
        },
        {
            name: "GitHub",
            alias: "proPianist1124",
            link: "https://github.com/proPianist1124",
        },
        {
            name: "Email",
            alias: "invisible.horse1124@proton.me",
            link: "mailto:invisible.horse1124@proton.me"
        }
    ]
</script>

<svelte:head>
    <title>proPianist1124</title>
</svelte:head>

<main>
    <section>
        <h2>
            proPianist1124
        </h2>
        I am a <a href = "https://nextjs.org" target = "_blank">nextjs</a> and <a href = "https://kit.svelte.dev" target = "_blank">sveltekit</a> fullstack software developer. I enjoy developing and designing web applications.
    </section>
    <section>
        <h3>
            Work
        </h3>
        I'm currently a freelance developer building a messenger app. I can build <b>you</b> a small webapp with
        <ul>
            <li>Express</li>
            <li>React</li>
            <li>Sveltekit</li>
            <li>Next.js</li>
            <li>HTML, CSS, JS</li>
        </ul>
        for a reasonable price (something along the lines of $15 - $30).
    </section>
    <section>
        <h3>
            Blog
        </h3>
        {#each data.blog as blog}
            <a href = "/blog/{blog.title}" style = "display: block; color: var(--secondary);">
                {blog.title}
            </a>
        {/each}
    </section>
    <section>
        <h3>
            Connect
        </h3>
        {#each socials as social}
            <p class = "">
                {social.name}
                <a href = {social.link} target = "_blank" style = "float:right">
                    {social.alias}
                </a>
            </p>
        {/each}
    </section>
</main>