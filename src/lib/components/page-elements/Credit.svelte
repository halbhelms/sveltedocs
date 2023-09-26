<script>
  export let credit
  export let link = false
</script>

<div class="text-xs text-slate-400">
{#if !link}
<p>Special thanks to {credit}</p>
{:else}
<p class="hover:text-indigo-900">Special thanks to <a href={credit} target="new">{credit}</a></p>
{/if}
</div>

<style>
  div {
    font-family: 'Neucha'
  }
</style>