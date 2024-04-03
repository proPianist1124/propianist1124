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

    async function create_post() {
        alert("this feature is coming soon!")
    }
</script>

<svelte:head>
    <title>Admin Panel</title>
</svelte:head>

{#if data.access == false}
    <h3 style = "text-align: center;">Login to Admin Panel</h3>
    <form on:submit|preventDefault = {login} autocomplete = "off" spellcheck = "false" style = "display: flex; align-items: center; justify-content: center; overflow-x: auto;">
        <input name = "code" placeholder = "Enter code…" />
        <button type = "submit" style = "margin-left: 5px;">
            <svg xmlns = "http://www.w3.org/2000/svg" width = "16" height = "16" viewBox = "0 0 24 24" fill = "none" stroke = "currentColor" stroke-width = "2" stroke-linecap = "round" stroke-linejoin = "round">
                <circle cx = "7.5" cy = "15.5" r = "5.5" />
                <path d = "m21 2-9.6 9.6" />
                <path d = "m15.5 7.5 3 3L22 7l-3-3" />
            </svg>
            &nbsp;Shop
        </button>
    </form>
    <p style = "color: var(--danger">{error}</p>
{:else}
    <h3>Admin Panel</h3>
    <hr />
    <h4>New Blog Post</h4>
    <form on:submit|preventDefault = {create_post} autocomplete = "off">
        <input placeholder = "title" />
        <br><br>
        <textarea placeholder = "content"></textarea>
        <br><br>
        <button type = "submit">
            <svg xmlns = "http://www.w3.org/2000/svg" width = "16" height = "16" viewBox = "0 0 24 24" fill = "none" stroke = "currentColor" stroke-width = "2" stroke-linecap = "round" stroke-linejoin = "round">
                <path d = "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d = "M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z" />
            </svg>
            &nbsp;Create Blog Post
        </button>
    </form>
    <hr />
    <a href = "/api/logout" style = "text-decoration: none;">
        <button class = "danger">
            <svg xmlns = "http://www.w3.org/2000/svg" width = "16" height = "16" viewBox = "0 0 24 24" fill = "none" stroke = "currentColor" stroke-width = "2" stroke-linecap = "round" stroke-linejoin = "round">
                <path d = "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points = "16 17 21 12 16 7" />
                <line x1 = "21" x2 = "9" y1 = "12" y2 = "12"/>
            </svg>
            &nbsp;Logout of Admin Account
        </button>
    </a>
{/if}