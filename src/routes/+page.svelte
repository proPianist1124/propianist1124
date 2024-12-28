<script>
    import { onMount } from "svelte";
    import favicon from "$lib/assets/favicon.ico";
    import Review from "$lib/review.svelte";

    onMount(() => {
        const modal = document.getElementById("reviews");

        document.querySelector("img").addEventListener("click", () => {
            modal.showModal();
        });

        modal.addEventListener("click", (event) => {
            const rect = modal.getBoundingClientRect();
            const isInmodal =
                rect.top <= event.clientY &&
                event.clientY <= rect.top + rect.height &&
                rect.left <= event.clientX &&
                event.clientX <= rect.left + rect.width;
            if (!isInmodal) {
                modal.close();
            }
        });
    });
</script>

<svelte:head>
    <title>proPianist1124</title>
</svelte:head>

<main>
    <h2 style="display: flex; align-items: center;">
        proPianist1124
        <div class="tooltip">
            <img
                src={favicon}
                width="35"
                height="35"
                style="border: 1px solid #3e3e3e; border-radius: 50px; cursor: pointer;"
                alt="propianist1124 favicon"
            />
            <span class="tooltiptext">Leave a Review</span>
        </div>
    </h2>
    <hr />
    <h3 style="color: var(--accent-1);">about</h3>
    <p>
        I am a nextjs and sveltekit fullstack software developer. I enjoy
        developing and designing web applications.
    </p>
    <hr />
    <h3 style="color: var(--accent-2);">skillz</h3>
    <p>
        I started programming in 2021 and have been learning ever since. I am
        proficient in javascript - with this knowledge I use tools such as
        typescript, node.js, svelte & sveltekit, react & nextjs.
    </p>
    <p>
        I enjoy designing webapps and designing w/ pure CSS but occassionally
        TailwindCSS.
    </p>
    <hr />
    <h3 style="color: var(--accent-3);">socialz</h3>
    <div style="display: flex; align-items: center; gap: 0px 10px;">
        <a href="https://github.com/propianist1124" target="_blank">
            github<svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
            </svg>
        </a>
        <a href="https://x.com/propianist1124" target="_blank">
            twitter<svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
            </svg>
        </a>
        <a href="https://discord.com/users/844689790075011083" target="_blank">
            discord<svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
            </svg>
        </a>
        <a href="mailto:invisible.horse1124@proton.me" target="_blank">
            email<svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
            </svg>
        </a>
    </div>
    <hr />
    <h3 style="color: var(--accent-4);">contact</h3>
    <form>
        <div
            style="display: flex; align-items: center; width: 100%; gap: 10px;"
        >
            <input
                type="email"
                name="email"
                placeholder="john@doe.com"
                style="width: 100%;"
            />
            <input
                type="text"
                name="name"
                placeholder="name"
                style="width: 100%;"
            />
        </div>
        <textarea
            name="message"
            placeholder="what you want my g"
            style="width: 100%; margin-top: 10px;"
        ></textarea>
        <button
            type="submit"
            class="accent4"
            style="margin-top: 10px; width: 100%;">Submit</button
        >
    </form>
</main>
<dialog id="reviews" style="height: 350px;">
    <h2 style="margin-bottom: 1px;">Reviews</h2>
    <span style="display: block; font-style: italic; margin-bottom: 20px;"
        >Leave me a review, asshole.</span
    >
    <!-- <button class="accent2" style="margin: auto;">Sign in with Discord</button> -->
    <Review>hello there</Review>
    <Review>hello there</Review>
    <Review>hello there</Review>
    <Review>hello there</Review>
</dialog>
