<script>
    import "./style.css"
</script>

<nav>
    <a href = "/">
        <h2 style = "display: flex; align-items: center; color: var(--color);">
            <img src = "/favicon.ico" width = "30" height = "30" alt = "favicon" />
            proPianist1124
        </h2>
    </a>
    <ul>
        <li>
            <a href = "/blog">Blog</a>
        </li>
        <li>
            <a href = "/shop">Shop</a>
        </li>
        <li>
            <a href = "/admin">Admin</a>
        </li>
    </ul>
</nav>
<main>
    <slot />
</main>