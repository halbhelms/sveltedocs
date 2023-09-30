<script>
  export let level
</script>

<main class="px-8">
  <p>In order to make use of our sample apps, you need a basic knowledge of both HTML and JavaScript.</p>
  <p class="my-2">In Level {level} of this app, you will learn...</p>
  <slot>
    Fallback
  </slot>
  <p>For styling, we use TailwindCSS. For a crystal-clear explanation of getting Tailwind running in your Svelte app: <a href="https://tailwindcss.com/docs/guides/sveltekit" target="newwin">Install Tailwind CSS with SvelteKit</a></p>
</main>