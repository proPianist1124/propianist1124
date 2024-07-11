<script>
    import SvelteMarkdown from "svelte-markdown";

    export let data;

    const source = data.content;
</script>

<svelte:head>
    <title>post title</title>
</svelte:head>

<main>
    <section>
        <h2 style = "display: flex; align-items: center;">
            My Blog
            <a href = "/" style = "margin-left: auto;">
                <button >Go Back</button>
            </a>
        </h2>
        Welcome to my blog! Happy reading! 📚
    </section>
    <section>
        <h3>
            {data.date} | {data.title}
        </h3>
        <p style = "color: var(--color-secondary);">
            <SvelteMarkdown {source} />
        </p>
    </section>
</main>