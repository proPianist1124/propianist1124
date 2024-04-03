<script>
    import Modal from "$lib/ui/modal.svelte"

    export let data

    let showModal = false
    let success = ""

    async function delete_item() {
        await fetch("/api/shop/delete", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id: data.item.id })
        })

        window.location.href = "/shop"
    }

    async function purchase(event) {
        let res = await fetch("/api/shop/purchase", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Object.fromEntries(new FormData(event.target)))
        })
        res = await res.json()

        if (res.success) {
            success = "Your purchase was successful. You will be contacted shortly."
        }
    }
</script>

<svelte:head>
    <title>{data.item.name}</title>
</svelte:head>

<h3 style = "text-align: center;">
    <span style = "color: var(--success);">${data.item.price}</span> | {data.item.name} | {data.item.date}
</h3>
<div style = "display: flex; align-items: center; justify-content: center;">
    <p style = "color: var(--color-secondary); margin-right: 10px;">
        posted by {data.item.author}
    </p>
    <div class = "badge">
        {data.item.category}
    </div>
</div>
<img src = {data.item.image} width = "300" height = "300" alt = {data.item.name} style = "display: block; margin: auto;" />
<p style = "text-align: center; color: var(--color-secondary);">{data.item.description}</p>
<div style = "display: flex; align-items: center; justify-content: center; margin-top: 20px;">
    {#if data.admin == true}
        <button on:click = {delete_item} class = "danger" style = "margin-right: 8px;">
            <svg xmlns = "http://www.w3.org/2000/svg" width = "16" height = "16" viewBox = "0 0 24 24" fill = "none" stroke = "currentColor" stroke-width = "2" stroke-linecap = "round" stroke-linejoin = "round">
                <path d = "M3 6h18" />
                <path d = "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                <path d = "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                <line x1 = "10" x2 = "10" y1 = "11" y2 = "17" />
                <line x1 = "14" x2 = "14" y1 = "11" y2 = "17" />
            </svg>
            &nbsp;Delete
        </button>
    {/if}
    <button on:click = {() => showModal = true} style = "margin-right: 8px;">
        <svg xmlns = "http://www.w3.org/2000/svg" width = "16" height = "16" viewBox = "0 0 24 24" fill = "none" stroke = "currentColor" stroke-width = "2" stroke-linecap = "round" stroke-linejoin = "round">
            <circle cx = "12" cy = "12" r = "10" />
            <path d = "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
            <path d = "M12 18V6" />
        </svg>
        &nbsp;Purchase Right Now
    </button>
    <button on:click = {() => alert("this feature is not yet available!")}>
        <svg xmlns = "http://www.w3.org/2000/svg" width = "16" height = "16" viewBox = "0 0 24 24" fill = "none" stroke = "currentColor" stroke-width = "2" stroke-linecap = "round" stroke-linejoin = "round">
            <path d = "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
            <path d = "M13 5v2" />
            <path d = "M13 17v2" />
            <path d = "M13 11v2" />
        </svg>
        &nbsp;Bid / Offer
    </button>
</div>
<Modal bind:showModal>
    <h3 style = "text-align: center;">Purchase "{data.item.name}"</h3>
    {#if success != ""}
        <p style = "text-align: center; color: var(--success);">
            {success}
        </p>
    {:else}
        <form on:submit|preventDefault = {purchase} autocomplete = "off">
            <input name = "id" value = {data.item.id} type = "hidden" />
            <input type = "email" name = "email" placeholder = "your email" style = "width: 100%;" required />
            <br><br>
            <button type = "submit" style = "width: 100%;">
                <svg xmlns = "http://www.w3.org/2000/svg" width = "16" height = "16" viewBox = "0 0 24 24" fill = "none" stroke = "currentColor" stroke-width = "2" stroke-linecap = "round" stroke-linejoin = "round">
                    <circle cx = "12" cy = "12" r = "10" />
                    <path d = "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                    <path d = "M12 18V6" />
                </svg>
                &nbsp;Purchase Right Now
            </button>
        </form>
    {/if}
</Modal>