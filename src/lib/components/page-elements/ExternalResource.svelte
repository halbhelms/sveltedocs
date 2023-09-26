<script>
  export let intro = "More information on related topics:"
  export let resource
  export let link = true
</script>

{#if !link}
  <p>{intro} {resource}</p>
{:else}
  <p><a href="{resource}" class="text-emerald-500 text-xs hover:text-indigo-900" target="new">{intro} {resource}</a></p>
{/if}

<style>
  p {
    font-family: 'Neucha'
  }
</style>

