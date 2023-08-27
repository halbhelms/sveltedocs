<script>
  export let code
  export let linenumbers = true
  import { HighlightSvelte, LineNumbers } from "svelte-highlight";
  import github from "svelte-highlight/styles/github";
</script>

{#if linenumbers}
<HighlightSvelte {code} let:highlighted on:highlight={e => {
  console.log(e.detail.highlighted)
}}>
  <LineNumbers {highlighted} />
</HighlightSvelte>
{:else}
<HighlightSvelte {code} />
{/if}