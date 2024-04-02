<script>
    import Modal from "$lib/ui/modal.svelte"

    export let data

    const inputs = ["name", "description", "price"]
    let showModal = false
    let error = ""

    async function access() {
        let passkey = []

        for (let i = 0; i < 5; i ++) {
            passkey.push(eval(`event.currentTarget.key_${i}.value`))
        }

        let res = await fetch("/api/shop", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                passkey: passkey.join("")
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
    <title>shop</title>
</svelte:head>

{#if data.access == false}
    <h3 style = "text-align: center;">
        This is a Protected Page
    </h3>
    <form on:submit|preventDefault = {access} autocomplete = "off" spellcheck = "false" style = "display: flex; align-items: center; justify-content: center;">
        {#each Array(5) as _, i}
            <input name = "key_{i}" class = "key" maxlength = "1" required/>
        {/each}
        <button style = "height: 25px; border-radius: 0px;">
            Access
        </button>
    </form>
    <p style = "text-align: center; color: var(--danger);">
        {error}
    </p>
{:else}
    <h3>Shop</h3>
    <div style = "display: grid; grid-template-columns: auto auto auto; overflow-x: auto;">
        {#each data.shop as item}
            <a href = "/shop/items/{item.name.replaceAll(" ", "-")}" style = "color: currentColor; text-decoration: none;">
                <div class = "card" style = "margin-right: 10px;">
                    <h3 style = "text-align: center;">
                        <span style = "color: var(--success);">
                            ${item.price}
                        </span>
                        | {item.date} | {item.name}
                    </h3>
                    <img src = {item.image} width = "150" height = "150" alt = {item.name} style = "display: block; margin: auto;" />
                    <p style = "text-align: center; color: var(--color-secondary);">
                        {item.description}
                    </p>
                </div>
            </a>
        {/each}
    </div>
    <button on:click = {() => showModal = true}>
        <svg xmlns = "http://www.w3.org/2000/svg" width = "16" height = "16" viewBox = "0 0 24 24" fill = "none" stroke = "currentColor" stroke-width = "2" stroke-linecap = "round" stroke-linejoin = "round">
            <circle cx = "12" cy = "12" r = "10" />
            <path d = "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
            <path d = "M12 18V6" />
        </svg>
        &nbsp;Sell an Item
    </button>
    <Modal bind:showModal>
        <h3>Sell an Item</h3>
        <p style = "color: var(--color-secondary);">If items are confiscated, there will be no refunds.</p>
        <form autocomplete = "off">
            {#each inputs as input}
                <input name = {input} placeholder = {input} style = "margin-top: 10px; width: 100%;"/>
                <br>
            {/each}
            <button style = "margin-top: 20px; width: 100%;">
                <svg xmlns = "http://www.w3.org/2000/svg" width = "16" height = "16" viewBox = "0 0 24 24" fill = "none" stroke = "currentColor" stroke-width = "2" stroke-linecap = "round" stroke-linejoin = "round">
                    <circle cx = "12" cy = "12" r = "10" />
                    <path d = "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                    <path d = "M12 18V6" />
                </svg>
                &nbsp;Sell Item
            </button>
        </form>
    </Modal>
{/if}