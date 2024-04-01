<script>
    import Error from "../../+error.svelte"

    export let data
</script>

<svelte:head>
    <title>{data.post.title}</title>
</svelte:head>

{#if data.post != null}
    <h3>
        {data.post.date} | {data.post.title}
    </h3>
    <p style = "color: var(--color-secondary);">
        {data.post.content}
    </p>
{:else}
    <Error />
{/if}