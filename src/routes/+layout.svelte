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
            <a href = "/blog">blog</a>
        </li>
        <li>
            <a href = "/admin">admin</a>
        </li>
    </ul>
</nav>
<main>
    <slot />
</main>
<footer>
    Made with ❤️ by <a href = "https://github.com/propianist1124/propianist1124" target = "_blank">proPianist1124</a>
</footer>