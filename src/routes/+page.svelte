<script>
  const skillset = [
    "Express",
    "React",
    "Sveltekit",
    "Next.js",
    "HTML, CSS, JS",
  ];
</script>

<svelte:head>
  <title>home / proPianist1124</title>
</svelte:head>

<section>
  <h2>proPianist1124</h2>
  I am a
  <a href="https://nextjs.org" target="_blank" class="primary"> nextjs </a> and
  <a href="https://kit.svelte.dev" target="_blank" class="primary">sveltekit</a>
  fullstack software developer. I enjoy developing and designing web applications.
</section>
<section>
  <h3>Work</h3>
  I'm a freelance developer at
  <a href="https://github.com/diaboli-systems" target="_blank" class="primary">
    Diaboli Systems
  </a>. Join us!
</section>
<section>
  <h3>Skillset</h3>
  <ul>
    {#each skillset as skill}
      <li>{skill}</li>
    {/each}
  </ul>
</section>
