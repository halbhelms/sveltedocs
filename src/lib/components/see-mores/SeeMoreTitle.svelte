<script>
  import { createEventDispatcher } from 'svelte'
  import Icon from '@iconify/svelte';
  export let title

  const dispatch = createEventDispatcher()

  function removeModal() {
    dispatch('change_see_more', {id: 0})
  }
</script>

<div class="mx-auto w-fit"><Icon class="inline-block" icon="fxemoji:microscope" width="50" />
  <div class="text-center inline-block text-2xl text-green-500">{@html title}</div>
  <div class="inline-block absolute right-8 hover:cursor-pointer" on:click={removeModal}>Close</div>
</div>