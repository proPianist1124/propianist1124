<script>
    import { PUBLIC_DISCORD_REDIRECT } from "$env/static/public";

    export let data;
</script>

<svelte:head>
    <title>guestbook / proPianist1124</title>
</svelte:head>

<section>
    {#if !data.authenticated}
        <a href={PUBLIC_DISCORD_REDIRECT} style="text-decoration: none;">
            <button style="display: block; margin: auto; margin-top: 25px;"
                >Login with Discord</button
            >
        </a>
    {:else}
        <form
            style="display: flex; align-items: center; margin-bottom: 20px;"
            autocomplete="off"
        >
            <img
                src="https://cdn.discordapp.com/avatars/{data.discord_id}/{data.avatar}.webp"
                width="30"
                height="30"
                style="background-color: var(--bg-lighter);"
                alt="test"
            />
            <input
                type="text"
                name="message"
                placeholder="Your Message..."
                style="width: 100%; border-radius: 0px 10px 10px 0px;"
                required
            />
        </form>
        <div
            style="padding: 10px; border-radius: 10px; background-color: var(--bg-lighter); margin-bottom: 10px;"
        >
            <span style="color: var(--header); font-family: 'PT Serif', serif;"
                >chicken.poop:</span
            > test
        </div>
        <div
            style="padding: 10px; border-radius: 10px; background-color: var(--bg-lighter);"
        >
            <span style="color: var(--header); font-family: 'PT Serif', serif;"
                >chicken.poop:</span
            > test
        </div>
    {/if}
</section>
