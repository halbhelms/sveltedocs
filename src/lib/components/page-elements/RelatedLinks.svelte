<script>
  export let relatedComponents = []
</script>
{#if relatedComponents.length}
  <div class="bg-blue-100 p-4 rounded-lg border-indigo-500 border">
  <h2 class="text-xl">Related Links</h2>
    {#each relatedComponents as component}
    <a href="" class="block">{component?.name}</a>
  {/each}
</div>
{/if}