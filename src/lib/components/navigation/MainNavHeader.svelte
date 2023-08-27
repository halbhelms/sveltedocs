<!-- I provide a navigational header for the entire site -->
<script>
  import { page } from '$app/stores'
  const navLinks = [
    {
      href: '/docs',
      label: 'Docs'
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
{#if navLinks.length == 2}
  {@const cols = `grid grid-cols-3`}
  <main class="{cols} place-items-end gap-2">
    {#each navLinks as navLink, idx (`${idx}_${navLink.href}`)}
    {@const c=$page.url.pathname.includes(navLink.href) && 'bg-indigo-500 rounded-full text-white'}
    <a 
    href={navLink.href} 
    class="w-24 text-center hover:bg-indigo-500 hover:text-white hover:rounded-full {c}" 
    >
    {navLink.label}
  </a>
  {/each}
  <a href="/contact" id="contact" class="text-center bg-indigo-900 text-gray-100 rounded-full w-24">Contact Us</a>
</main>
{/if}

<style>
  .current {
    color: red;
  }
</style>