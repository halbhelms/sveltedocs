
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

<span on:click={clickSeeMoreLink} class="inline-flex items-center hover:cursor-pointer hover:font-semibold hover:text-white bg-green-300 text-black rounded-full px-1 text-xs border-green-800 border-2">
    <Icon  icon="fxemoji:microscope" width="20" /> 
    {@html linkedText}
</span>
