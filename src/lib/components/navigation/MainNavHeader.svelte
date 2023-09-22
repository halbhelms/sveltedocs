<!-- I provide a navigational header for the entire site -->
<script>
  import { page } from '$app/stores'
  const navLinks = [
    {
      href:"/",
      label: "SvelteInfo"
    },
    {
      href: '/docs',
      label: 'Explainers'
    },
    {
      href: '/articles',
      label: 'Tutorials'
    },
    {
      href: '/recipes',
      label: 'Recipes'
    },
    {
      href: '/apps',
      label: 'Sample Apps'
    }  
  ]

  import { onMount, beforeUpdate, tick } from 'svelte'

  beforeUpdate( async () => {
    await tick()
  })
</script>
  <main class="grid grid-cols-6 place-items-end gap-2 my-2 font-semibold">
    {#each navLinks as navLink, idx (`${idx}_${navLink.href}`)}
    {@const c=$page.url.pathname.includes(navLink.href) && 'bg-indigo-500 rounded-full text-white'}
    <a 
    href={navLink.href} 
    class="w-24 text-center hover:bg-indigo-500 hover:text-white hover:rounded-full {c}" 
    >
    {navLink.label}
  </a>
  {/each}
  <a href="/contact" id="contact" class="text-center bg-indigo-900 text-gray-100 rounded-full w-24">Consulting</a>
</main>

<style>
  .current {
    color: red;
  }
</style>