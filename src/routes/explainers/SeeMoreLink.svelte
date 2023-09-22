
<script>
  import Icon from '@iconify/svelte';
  import { createEventDispatcher } from 'svelte'

  export let linkedText
  export let seeMoreID = 0

  const dispatch = createEventDispatcher()
  
  function clickSeeMoreLink() {
    dispatch('change_see_more', { id: seeMoreID})
  }
</script>

<span on:click={clickSeeMoreLink} class="hover:cursor-pointer hover:font-semibold hover:text-white bg-blue-300 text-gray-700 rounded-sm px-1 shadow-sm shadow-inner shadow-black text-xs"><Icon class="inline-block mb-1" icon="fxemoji:microscope" width="20" />{@html linkedText}</span>