<script>
    let error = ""

    export let data

    async function login(event) {
        let res = await fetch("/api/admin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                code: event.currentTarget.code.value
            })
        })
        res = await res.json()

        if (res.error) {
            error = res.error
        } else {
            window.location.reload()
        }
    }
</script>

<svelte:head>
    <title>Admin Panel</title>
</svelte:head>

<h3>Admin Panel</h3>
{#if data.admin == false}
    <form on:submit|preventDefault = {login} autocomplete = "off" spellcheck = "false">
        <input name = "code" placeholder = "Enter code…"/>
        <button type = "submit">Login</button>
    </form>
    <p style = "color: var(--danger">{error}</p>
{:else}
    <hr />
    <h4>New Blog Post</h4>
    <form autocomplete = "off">
        <input placeholder = "title" />
    </form>
{/if}