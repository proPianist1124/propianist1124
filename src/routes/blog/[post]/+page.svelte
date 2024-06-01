<script>
    import Error from "../../+error.svelte"

    export let data
</script>

<svelte:head>
    <title>{data.post.title}</title>
</svelte:head>

{#if data.post != null}
    <main>
        <section>
            <h2 style = "display: flex; align-items: center;">
                My Blog
                <a href = "/" style = "margin-left: auto;">
                    <button >Go Back</button>
                </a>
            </h2>
            Welcome to my blog! Happy reading you fanum tax ohio sigma! 📚
        </section>
        <section>
            <h3>
                {data.post.date} | {data.post.title}
            </h3>
            <p style = "color: var(--color-secondary);">
                {data.post.content}
            </p>
        </section>
    </main>
{:else}
    <Error />
{/if}