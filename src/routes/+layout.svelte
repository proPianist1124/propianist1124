<script>
    import "./style.css";
    import { page } from "$app/stores";
</script>

<nav>
    <a href="/">
        <div>Home</div>
    </a>
    <a href="/photos">
        <div>Photos</div>
    </a>
    <a href="/contact">
        <div>Contact</div>
    </a>
    <a href="/guestbook">
        <div>Guestbook</div>
    </a>
</nav>
<main style={$page.url.pathname != "/photos" ? "max-width: 550px;" : "max-width: 1000px"}>
    <slot />
</main>

<style>
    nav {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
        border-radius: 50px;
        background-color: var(--bg-lighter);
        border: 2px solid var(--bg-lightest);
        max-width: 400px;
        margin-top: 20px;
        padding: 5px;
    }

    nav a {
        text-decoration: none;
    }

    nav div {
        margin-right: 10px;
        margin-left: 10px;
        cursor: pointer;
        color: var(--text);
        transition: 0.1s;
    }

    nav div:hover {
        color: var(--header);
    }

    main {
        margin: auto;
        padding: 25px;
    }
</style>
