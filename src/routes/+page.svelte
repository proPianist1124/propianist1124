<script>
    const socials = [
        {
            name: "Twitter",
            link: "https://twitter.com/proPianist1124"
        },
        {
            name: "Discord",
            link: "https://discord.com/users/844689790075011083"
        },
        {
            name: "Spotify",
            link: "https://open.spotify.com/user/31vq6ry37tfa2qntvk6yjcf32cry"
        },
        {
            name: "GitHub",
            link: "https://github.com/proPianist1124"
        }
    ]
</script>

<svelte:head>
    <title>proPianist1124</title>
</svelte:head>

<h3>
    Welcome to my site!
</h3>
<p style = "color: var(--color-secondary);">
    I am a nextjs and sveltekit fullstack software developer. I enjoy developing web applications/PWAs. This is my third year programming and I am still learning new things everyday.
</p>
{#each socials as social}
    <a href = {social.link} style = "text-decoration: none; margin-right: 5px;">
        <button>
            {social.name}
        </button>
    </a>
{/each}