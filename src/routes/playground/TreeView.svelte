<script>
  export let node;
  // export let indexStart = 0

  let isOpen = false;


  function toggle() {
    isOpen = !isOpen;
  }

</script>

<!-- Display node label -->
<div class="ml-8">
<button on:click={toggle}>{node.label}</button>

<!-- If node has children and is open, display them recursively -->
{#if node.children && isOpen}
  <ul>
    {#each node.children as child}
      <li>
        <svelte:self node={child}  />
      </li>
    {/each}
  </ul>
{/if}

</div>

<style>
  /* Just some basic styling for clarity */
  button {
    margin-left: 0em;
  }
</style>
