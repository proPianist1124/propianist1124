<script>
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
            link: "mailto:invisible.horse1124@proton.me",
        },
    ];
</script>

<svelte:head>
    <title>contact / proPianist1124</title>
</svelte:head>

<section>
    <h3>Connect</h3>
    {#each socials as social}
        <p>
            {social.name}
            <a href={social.link} target="_blank" class="primary" style="float: right;">
                {social.alias}
            </a>
        </p>
    {/each}
</section>
<section>
    <h3>Further Inquiries?</h3>
    <form autocomplete="off">
        <input type="text" placeholder="name" required />
        <textarea placeholder="message" required></textarea>
        <button>Submit</button>
    </form>
</section>

<style>
    input, textarea {
        width: 60%;
        margin-bottom: 10px;
    }
    textarea {
        height: 100px;
    }

    @media screen and (max-width: 750px) {
        input, textarea {
            width: 100%;
        }
    }
</style>