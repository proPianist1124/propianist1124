<script>
    import { onMount } from "svelte";

    const photos = [
        {
            name: "sequoia",
            src: "/photos/layer1/sequoia.jpeg",
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
    ];

    onMount(() => {
        // hide dialog on backdrop click
        const dialog = document.getElementById("photo-preview");
        dialog.addEventListener("click", function (event) {
            const rect = dialog.getBoundingClientRect();
            const isInDialog =
                rect.top <= event.clientY &&
                event.clientY <= rect.top + rect.height &&
                rect.left <= event.clientX &&
                event.clientX <= rect.left + rect.width;
            if (!isInDialog) {
                dialog.close();
            }
        });
    });

    function openModal(photo) {
        document.getElementById("photo-preview").showModal();
        document.querySelector("img#preview").src = photo;
    }
</script>

<svelte:head>
    <title>photos / proPianist1124</title>
</svelte:head>

<div class="grid">
    {#each photos as photo}
        <div class="item">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <img
                on:click={() => openModal(photo.src)}
                src={photo.src}
                alt={photo.name}
            />
        </div>
    {/each}
</div>
<dialog id="photo-preview">
    <img
        id="preview"
        style="object-fit: cover; width: 100%; height: 100%; border-radius: 10px;"
        alt="asdf"
    />
</dialog>

<style>
    dialog {
        width: fit-content;
        max-width: 500px;
        padding: 0px;
        outline: none;
        background-color: transparent;
        border: none;
        border-radius: 10px;
    }

    dialog::backdrop {
        background-color: rgba(0, 0, 0, 0.5);
    }

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
            "hero hero hero aside2 aside2 aside2"
            "hero hero hero aside2 aside2 aside2"
            "hero hero hero aside2 aside2 aside2"
            "hero hero hero aside2 aside2 aside2"
            "aside3 aside3 aside4 aside4 aside5 aside5 ";
    }

    div.grid div.item img {
        cursor: pointer;
        transition: 0.3s;
    }

    div.grid div.item img:hover {
        transform: scale(1.05);
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

    div.grid div.item:nth-child(1) {
        grid-area: hero;
    }

    div.grid div.item:nth-child(2) {
        grid-area: aside2;
    }

    div.grid div.item:nth-child(3) {
        grid-area: aside3;
    }

    div.grid div.item:nth-child(4) {
        grid-area: aside4;
    }

    div.grid div.item:nth-child(5) {
        grid-area: aside5;
    }

    /* mobile screens */
    @media screen and (max-width: 750px) {
        div.grid {
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
