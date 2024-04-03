<script>
    import Modal from "$lib/ui/modal.svelte"

    export let data

    const inputs = ["name", "description", "price"]
    const categories = ["physical", "information", "video", "service", "article", "site", "download", "code"]
    let showModal = false
    let error = ""

    async function access() {
        let passkey = []

        for (let i = 0; i < 5; i ++) {
            passkey.push(eval(`event.currentTarget.key_${i}.value`))
        }

        let res = await fetch("/api/shop/access", {
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
            error = ""
            window.location.reload()
        }
    }
    
    async function sell_item(event) {
        if (event.currentTarget.name.value == "" || event.currentTarget.description.value == "" || event.currentTarget.price.value == "" || event.currentTarget.category.value == "") {
            error = "Please fill out all fields."
        } else if (event.currentTarget.price.value.length >= 4) {
            error = "Price must be less than 4 digits."
        } else {
            let res = await fetch("/api/shop/sell", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(Object.fromEntries(new FormData(event.target)))
            })
            res = await res.json()

            if (res.success) {
                error = ""
                window.location.reload()
            }
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
    <p style = "margin-top: 50px; text-align: center; color: var(--color-secondary);">
        Become an affliate! <a href = "mailto:invisible.horse1124@proton.me">Contact us</a> to learn more!
    </p>
{:else}
    <h3 style = "display: flex; align-items: center;">
        Shop
        <select style = "margin-left: auto;">
            <option value = "all">all</option>
            {#each categories as category}
                <option value = {category}>{category}</option>
            {/each}
        </select>
    </h3>
    <div class = "grid">
        {#each data.shop as item}
            <a href = "/shop/{item.id}" style = "color: currentColor; text-decoration: none;">
                <div class = "card" style = "margin-right: 10px;">
                    <h3 style = "text-align: center;">
                        <span style = "color: var(--success);">
                            ${item.price}
                        </span>
                        | {item.date} | {item.name}
                    </h3>
                    <img src = {item.image} width = "150" height = "150" alt = {item.name} style = "display: block; margin: auto; border: 1px solid var(--background-lightest);" />
                    <div style = "display: flex; align-items: center; justify-content: center;">
                        <p style = "color: var(--color-secondary);">
                            {item.description}
                        </p>
                        <div class = "badge" style = "margin-left: 10px;">
                            {item.category}
                        </div>
                    </div>
                </div>
            </a>
        {/each}
    </div>
    <button on:click = {() => showModal = true} style = "margin-top: 45px;">
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
        <form on:submit|preventDefault = {sell_item} autocomplete = "off">
            {#each inputs as input}
                <input type = {input == "price" ? "number" : "text"} name = {input} placeholder = {input} style = "margin-top: 10px; width: 100%;" />
                <br>
            {/each}
            <input type = "url" name = "image" placeholder = "image url" style = "margin-top: 10px; width: 100%;" />
            <select name = "category" style = "margin-top: 10px; width: 100%;">
                <option value = "" hidden selected>category</option>
                {#each categories as category}
                    <option value = {category}>{category}</option>
                {/each}
            </select>
            <button type = "submit" style = "margin-top: 20px; width: 100%;">
                <svg xmlns = "http://www.w3.org/2000/svg" width = "16" height = "16" viewBox = "0 0 24 24" fill = "none" stroke = "currentColor" stroke-width = "2" stroke-linecap = "round" stroke-linejoin = "round">
                    <circle cx = "12" cy = "12" r = "10" />
                    <path d = "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                    <path d = "M12 18V6" />
                </svg>
                &nbsp;Sell Item
            </button>
        </form>
        <p style = "color: var(--danger);">
            {error}
        </p>
    </Modal>
{/if}

<style>
    div.grid {
        display: grid;
        grid-template-columns: auto auto auto;
        overflow-x: auto;
    }
    @media screen and (max-width: 800px) {
        div.grid {
            display: block;
        }
    }
</style>