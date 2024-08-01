<script>
    const photos = [
        {
            name: "ferrari",
            src: "/photos/layer1/ferrari.jpeg",
        },
        {
            name: "jordans",
            src: "/photos/layer1/jordans.jpeg",
        },
        {
            name: "boston",
            src: "/photos/layer2/boston.jpeg",
        },
        {
            name: "cactusjack",
            src: "/photos/layer2/cactusjack.jpeg",
        },
        {
            name: "plane",
            src: "/photos/layer2/plane.jpeg",
        },
        {
            name: "washington",
            src: "/photos/layer3/washington.jpeg",
        },
        {
            name: "arlington",
            src: "/photos/layer3/arlington.jpeg",
        },
        {
            name: "alexandria",
            src: "/photos/layer3/alexandria.jpeg",
        },
        {
            name: "statueofliberty",
            src: "/photos/layer3/statueofliberty.jpeg",
        },
        {
            name: "rockefeller",
            src: "/photos/layer3/rockefeller.jpeg",
        },
        {
            name: "timessquare",
            src: "/photos/layer3/timessquare.jpeg",
        },
    ]
</script>

<svelte:head>
    <title>photos / proPianist1124</title>
</svelte:head>

<div class="grid">
    {#each photos as photo}
        <div class="item">
            <img src={photo.src} alt={photo.name} />
        </div>
    {/each}
</div>

<style>
    div.grid {
        width: 100%;
        max-width: 1500px;
        height: 750px;
        display: grid;
        gap: 1.5vw;
        padding: 1vw;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: auto;
        grid-template-areas:
            "hero hero hero hero aside2 aside2"
            "hero hero hero hero aside2 aside2"
            "hero hero hero hero aside2 aside2"
            "hero hero hero hero aside2 aside2"
            "aside3 aside3 aside4 aside4 aside5 aside5 ";
    }
    div.item {
        border: 2px solid var(--bg-lightest);
        border-radius: 5px;
    }

    div.grid div.item {
        border-radius: 10px;
    }

    div.grid div.item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }

    .grid .item:nth-child(1) {
        grid-area: hero;
    }
    .grid .item:nth-child(2) {
        grid-area: aside2;
    }

    .grid .item:nth-child(3) {
        grid-area: aside3;
    }
    .grid .item:nth-child(4) {
        grid-area: aside4;
    }

    .grid .item:nth-child(5) {
        grid-area: aside5;
    }

    /* tablet screens */
    @media screen and (max-width: 1000px) {
        .grid {
            grid-template-columns: repeat(4, 1fr);
            grid-template-areas:
                "hero   hero   hero   hero"
                "hero   hero   hero   hero"
                "aside2 aside2 aside2 aside3"
                "aside4 aside4 aside5 aside5";
        }
    }

    /* mobile screens */
    @media screen and (max-width: 750px) {
        .grid {
            grid-template-columns: repeat(3, 1fr);
            grid-template-areas:
                "hero   hero   hero"
                "hero   hero   hero"
                "aside2 aside2 aside2"
                "aside3 aside3 aside3"
                "aside4 aside4 aside4"
                "aside5 aside5 aside5";
        }
    }
</style>
