<script>
    async function access(event) {
        console.log("lmfao")
    }
</script>

<svelte:head>
    <title>shop</title>
</svelte:head>

<h3 style = "text-align: center; color: var(--danger);">
    This is a Protected Page
</h3>
<form on:submit|preventDefault = {access} autocomplete = "off" spellcheck = "false" style = "display: flex; align-items: center; justify-content: center;">
    {#each Array(6) as _, i}
        <input name = {i} class = "key" required/>
    {/each}
    <button style = "height: 25px; border-radius: 0px;">
        Access
    </button>
</form>