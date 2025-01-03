<script>
    let error = "";

    function checkIdLength(e) {
        let input = e.target.value;

        input.length != 6
            ? (error = "ID must be exactly 6 digits long")
            : (error = false);
    }

    async function login(e) {
        const data = Object.fromEntries(new FormData(e.target));

        data.id.length != 6
            ? (error = "ID must be exactly 6 digits long")
            : (error = false);

        const res = await fetch("/api/admin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then(res => res.json());

        if (res.status == 401) error = "Invalid credentials";
    }
</script>

<svelte:head>
    <title>admin</title>
</svelte:head>

<main>
    <h2>login as admin</h2>
    {#if error}
        <div class="alert">{error}</div>
    {/if}
    <form on:submit|preventDefault={login}>
        <div
            style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;"
        >
            <input
                on:input={checkIdLength}
                type="number"
                name="id"
                placeholder="id"
            />
            <input type="password" name="password" placeholder="password" />
        </div>
        <button type="submit" class="accent4" style="width: 100%;">
            login
        </button>
    </form>
</main>

<style>
    input {
        width: 100%;
    }
</style>
