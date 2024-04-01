<script>
    export let data
</script>

<svelte:head>
    <title>blog</title>
</svelte:head>

<h3>my blog</h3>
{#each data.blog as post}
    <a href = "/blog/{post.title}" style = "color: var(--color-secondary); text-decoration: none;">
        <div class = "card">
            {post.date} | {post.title}
        </div>
    </a>
{/each}