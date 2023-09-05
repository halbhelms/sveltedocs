<!-- I provide a link to a SeeMore -->

<script>
  import Icon from '@iconify/svelte';
  import { createEventDispatcher } from 'svelte'

  export let linkedText
  export let seeMoreID

  const dispatch = createEventDispatcher()
  
  function clickSeeMoreLink() {
    dispatch('change_see_more', { id: seeMoreID})
  }
</script>

<span on:click={clickSeeMoreLink} class="hover:cursor-pointer font-semibold text-green-600">{@html linkedText}<Icon class="inline-block mb-2" icon="fxemoji:microscope" width="28" /></span>
