<script>
    import favicon from "$lib/assets/favicon.ico";
    import "$lib/assets/style.css";
</script>

<svelte:head>
    <link rel="icon" type="image/x-icon" href={favicon}>
</svelte:head>

<slot />