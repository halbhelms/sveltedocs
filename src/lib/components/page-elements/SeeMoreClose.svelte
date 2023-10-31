<!-- I send a custom "SeeMoreClose event" to my caller -->
<script>
  import { CloseButton } from 'flowbite-svelte';
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  function dispatchEvent() {
    dispatch('Hatem')
  }

  
</script>

<main>
  <CloseButton class="text-xs" name="Close" on:click={dispatchEvent} />
</main>